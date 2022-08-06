import {
  Action,
  Module,
  Mutation,
  VuexModule,
} from 'vuex-module-decorators';
import { ProfileApiData, ProfileData } from '@/types';
import me from '@/repositories/api/me';
import Cookie from 'js-cookie';
import { tokenCookieExpiresInDays, tokenCookieKey } from '@/app.config';
import auth from '@/repositories/api/auth';

@Module
export default class Profile extends VuexModule {
  profile: null|ProfileData = null;
  loading = false;

  get myProfile(): null|ProfileData {
    return this.profile;
  }

  get profileLoading(): boolean {
    return this.loading;
  }

  get isCurrentUserAdmin(): null|boolean {
    return this.profile?.roles.indexOf('admin') !== -1;
  }

  @Mutation
  SET_PROFILE(profile: null|ProfileData): void {
    this.profile = profile;
  }

  @Mutation
  SET_PROFILE_LOADING(loading: boolean): void {
    this.loading = loading;
  }

  @Action({ commit: 'SET_PROFILE' })
  logout(): null {
    return null;
  }

  @Action({ commit: 'SET_PROFILE' })
  setProfile(data: ProfileApiData): ProfileData {
    return {
      id: data.id,
      firstName: data.first_name,
      lastName: data.last_name,
      phone: data.phone,
      email: data.email,
      emailSubscribe: data.email_subscribe,
      roles: data.roles,
      addresses: data.addresses.map((address) => ({
        name: address.name,
        city: address.city,
        street: address.street,
        streetNumber: address.street_number,
        floor: address.floor,
        apartmentNumber: address.apartment_number,
      })),
    };
  }

  @Action
  async getProfile(): Promise<void> {
    try {
      this.context.commit('SET_PROFILE_LOADING', true);
      const res = await me.get();
      if (res.data.data) {
        this.context.dispatch('setProfile', res.data.data);
        return;
      }
      this.context.dispatch('setProfile', null);
      this.context.dispatch('showAlertError', 'Произошла ошибка при загрузке приложения');
    } catch (e) {
      if (e.response.status === 401) {
        Cookie.remove(tokenCookieKey);
      }
      this.context.dispatch('showAlertError', 'Произошла ошибка при загрузке приложения');
      this.context.dispatch('setProfile', null);
    } finally {
      this.context.commit('SET_PROFILE_LOADING', false);
    }
  }

  @Action({ commit: 'SET_PROFILE' })
  async logoutProfile(): Promise<null|ProfileData> {
    if (!Cookie.get(tokenCookieKey)) return null;
    try {
      await auth.logout();
      Cookie.remove(tokenCookieKey);
      return null;
    } catch (e) {
      if (e.response.status === 401) {
        Cookie.remove(tokenCookieKey);
        return null;
      }
      this.context.dispatch('showAlertError', 'Произошла ошибка при загрузке приложения');
    }
    return this.profile;
  }

  @Action
  async initProfile(): Promise<void> {
    if (!Cookie.get(tokenCookieKey)) return;
    await this.context.dispatch('getProfile');
  }

  @Action
  saveToken(token: string): void {
    Cookie.set(tokenCookieKey, token, {
      expires: +tokenCookieExpiresInDays as number,
      secure: true,
      sameSite: 'Lax',
    });
  }
}
