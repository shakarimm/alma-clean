<template>
  <!--START SECTION SETTINGS-->
  <section class="section section--pb-medium s-profile-settings">
    <div class="container container--flex">
      <div class="content-block content-block--profile">
        <div v-if="profileForm === null" class="loader-container">
          <Loader color="primary"/>
        </div>
        <template v-else>
          <div class="separated-block">
            <div class="separated-block__title">Личные данные</div>
            <div class="separated-block__form separated-block__form--mt-0">
              <AInput
                  class="separated-block__input-block"
                  :short="true"
                  label="Имя"
                  :invalid="profileForm.firstNameErrors"
                  :errors-texts="profileForm.firstNameErrors"
                  @input="profileForm.firstNameErrors = null"
                  v-model="profileForm.firstName"
              />
              <AInput
                  class="separated-block__input-block"
                  :short="true"
                  label="Фамилия"
                  :invalid="profileForm.lastNameErrors"
                  :errors-texts="profileForm.lastNameErrors"
                  @input="profileForm.lastNameErrors = null"
                  v-model="profileForm.lastName"
              />
              <AInput
                  class="separated-block__input-block"
                  :short="true"
                  label="Телефон"
                  v-model="profileForm.phone"
                  :mask="phoneMask"
                  :auto-unmask="false"
                  :invalid="profileForm.phoneErrors"
                  :errors-texts="profileForm.phoneErrors"
                  @input="profileForm.phoneErrors = null"
                  placeholder="(___) ___ __ __"
              >
                <template #prepend>+7</template>
              </AInput>
            </div>
          </div>
          <div class="separated-block">
            <div class="separated-block__title">Адрес</div>
            <div class="separated-block__subtitle">Заполните эти данные чтобы не
              указывать их в заявке каждый раз.</div>
            <div v-for="(address, index) in profileForm.addresses" :key="address"
                 class="separated-block__form separated-block__form--user-info">
              <AInput
                  class="separated-block__input-block separated-block__input-block--double"
                  :short="true"
                  label="Название"
                  :invalid="profileForm.addresses[index].nameErrors"
                  :errors-texts="profileForm.addresses[index].nameErrors"
                  @input="profileForm.addresses[index].nameErrors = null"
                  v-model="profileForm.addresses[index].name"
              />
              <div class="separated-block__form-separate-line"></div>
              <ASelect
                  placeholder="Город"
                  :short="true"
                  class="separated-block__input-block"
                  :options="citiesOptions"
                  :invalid="profileForm.addresses[index].cityErrors"
                  :errors-texts="profileForm.addresses[index].cityErrors"
                  @input="profileForm.addresses[index].cityErrors = null"
                  v-model="profileForm.addresses[index].city"
              />
              <AInput
                  class="separated-block__input-block"
                  :short="true"
                  placeholder="Улица"
                  :invalid="profileForm.addresses[index].streetErrors"
                  :errors-texts="profileForm.addresses[index].streetErrors"
                  @input="profileForm.addresses[index].streetErrors = null"
                  v-model="profileForm.addresses[index].street"
              />
              <AInput
                  class="separated-block__input-block"
                  :short="true"
                  placeholder="Дом"
                  :invalid="profileForm.addresses[index].streetNumberErrors"
                  :errors-texts="profileForm.addresses[index].streetNumberErrors"
                  @input="profileForm.addresses[index].streetNumberErrors = null"
                  v-model="profileForm.addresses[index].streetNumber"
              />
              <div class="separated-block__form-separate-line"></div>
              <AInput
                  class="separated-block__input-block"
                  :short="true"
                  placeholder="Квартира"
                  v-model="profileForm.addresses[index].apartmentNumber"
              />
              <AInput
                  class="separated-block__input-block"
                  :short="true"
                  placeholder="Этаж"
                  v-model="profileForm.addresses[index].floor"
              />
              <div class="separated-block__form-separate-line"></div>
              <AButton
                  v-if="profileForm.addresses.length > 1 || !isAddressEmpty(address)"
                  class="separated-block__btn-delete"
                  :small="true"
                  :circle="true"
                  color="danger"
                  font-weight="bold"
                  text="Удалить"
                  @click="removeAddress(index)"
              />
            </div>
            <AButton
                v-if="profileForm.addresses.length <= 10"
                class="separated-block__btn-secondary"
                :small="true"
                :circle="true"
                color="secondary"
                font-weight="bold"
                text="Добавить еще один адрес"
                @click="addEmptyAddress"
            />
          </div>
          <div class="separated-block">
            <div class="separated-block__title">Почтовые рассылки и уведомления</div>
            <div class="separated-block__subtitle">Будьте в курсе событий
              и акций, получайте квитанции</div>
            <div class="separated-block__form separated-block__form--mt-0 subscribe-form">
              <div class="subscribe-form__email-block">
                <AInput
                    :short="true"
                    label="Ваш Email"
                    :disabled="true"
                    v-model="profile.email"
                />
              </div>
              <div class="subscribe-form__checkbox-block">
                <ACheckbox
                    v-model="profileForm.emailSubscribe"
                    label="Получать новости и спецпредложения"/>
              </div>
            </div>
          </div>
          <div class="separated-block">
            <div
                v-if="showSuccess"
                class="alert-box alert-box--primary alert-box--mb-sm">
              <div class="alert-box__icon">
                <i class="ac-icon ac-icon-check"></i>
              </div>
              Данные успешно обновлены
            </div>
            <AButton
                text="Сохранить изменения"
                @click="saveForm"
                :loading="saveLoading"
                font-weight="bold"
            />
          </div>
        </template>
      </div>
      <ProfileSidebar/>
    </div>
  </section>
  <!--END SECTION SETTINGS-->
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import AInput from '@/components/AInput.vue';
import AButton from '@/components/AButton.vue';
import ACheckbox from '@/components/ACheckbox.vue';
import { mapGetters } from 'vuex';
import {
  MeUpdateRequestAddress,
  ProfileAddressData,
  ProfileAddressForm,
  ProfileData,
  ProfileForm,
} from '@/types';
import Loader from '@/components/Loader.vue';
import ASelect, { ASelectOption } from '@/components/ASelect.vue';
import { citiesList, phoneMask } from '@/app.config';
import me from '@/repositories/api/me';
import ProfileSidebar from '@/components/profile/ProfileSidebar.vue';

@Options({
  components: {
    ProfileSidebar,
    ASelect,
    Loader,
    ACheckbox,
    AButton,
    AInput,
  },
  computed: mapGetters({
    profile: 'myProfile',
  }),
  watch: {
    profile: {
      deep: true,
      handler(): void {
        if (!this.profile || this.profileForm) return;
        this.profileForm = {
          id: this.profile.id,
          emailSubscribe: this.profile.emailSubscribe,
          firstName: this.profile.firstName,
          lastName: this.profile.lastName,
          phone: this.profile.phone,
          firstNameErrors: null,
          lastNameErrors: null,
          phoneErrors: null,
          addresses: this.profile.addresses.map((address: ProfileAddressData) => ({
            name: address.name,
            city: address.city,
            street: address.street,
            streetNumber: address.streetNumber,
            floor: address.floor,
            apartmentNumber: address.apartmentNumber,
            nameErrors: null,
            cityErrors: null,
            streetErrors: null,
            streetNumberErrors: null,
          } as ProfileAddressForm)),
        } as ProfileForm;
        if (this.profileForm.addresses.length === 0) {
          this.addEmptyAddress();
        }
      },
    },
  },
})
export default class ProfileSettings extends Vue {
  readonly citiesOptions: ASelectOption[] = citiesList.map((city) => ({
    value: city.slug,
    label: city.name,
    selectable: true,
  }));
  readonly phoneMask = phoneMask;
  profile!: ProfileData;
  profileForm: null|ProfileForm = null;
  saveLoading = false;
  showSuccess = false;

  removeAddress(removeIndex: number): void {
    if (this.profileForm === null) return;
    this.profileForm.addresses = this.profileForm.addresses
      .filter((address, index) => removeIndex !== index);
    if (this.profileForm.addresses.length === 0) {
      this.addEmptyAddress();
    }
  }

  isAddressEmpty(address: ProfileAddressForm): boolean {
    return !address.name && !address.city
      && !address.street && !address.streetNumber
      && !address.floor && !address.apartmentNumber;
  }

  addEmptyAddress(): void {
    if (this.profileForm === null) return;
    this.profileForm.addresses.push({
      name: null,
      city: null,
      street: null,
      streetNumber: null,
      floor: null,
      apartmentNumber: null,
      nameErrors: null,
      cityErrors: null,
      streetErrors: null,
      streetNumberErrors: null,
    });
  }

  validateForm(): boolean {
    if (this.profileForm === null) return false;
    let valid = true;

    if (this.profileForm.firstName.trim().length < 1) {
      this.profileForm.firstNameErrors = ['Укажите имя'];
      valid = false;
    }
    if (this.profileForm.lastName.trim().length < 1) {
      this.profileForm.lastNameErrors = ['Укажите фамилию'];
      valid = false;
    }
    if (!this.$helpers.validPhone(this.profileForm.phone)) {
      this.profileForm.phoneErrors = ['Введите номер телефона'];
      valid = false;
    }
    this.profileForm.addresses.forEach((address) => {
      if (!this.isAddressEmpty(address)) {
        if (!address.name || address.name.trim().length < 1) {
          address.nameErrors = ['Укажите название адреса (например, "Дом")'];
          valid = false;
        }
        if (!address.city) {
          address.cityErrors = ['Укажите город'];
          valid = false;
        }
        if (!address.street || address.street.trim().length < 1) {
          address.streetErrors = ['Укажите улицу'];
          valid = false;
        }
        if (!address.streetNumber || address.streetNumber.trim().length < 1) {
          address.streetNumberErrors = ['Укажите номер дома'];
          valid = false;
        }
      }
    });

    return valid;
  }

  async saveForm(): Promise<void> {
    if (this.profileForm === null) return;
    console.log(this.profileForm.emailSubscribe);
    this.showSuccess = false;
    if (!this.validateForm()) return;
    try {
      this.saveLoading = true;
      const response = await me.update({
        first_name: this.profileForm.firstName,
        last_name: this.profileForm.lastName,
        email_subscribe: this.profileForm.emailSubscribe,
        phone: this.profileForm.phone,
        addresses: this.profileForm.addresses
          .filter((address) => !this.isAddressEmpty(address))
          .map((address) => ({
            name: address.name,
            city: address.city,
            street: address.street,
            street_number: address.streetNumber,
            floor: address.floor,
            apartment_number: address.apartmentNumber,
          } as MeUpdateRequestAddress)),
      });
      if (response.data.data) {
        this.showSuccess = true;
        this.$store.dispatch('setProfile', response.data.data);
      }
    } catch (e) {
      this.$store.dispatch('showAlertError', 'При попытке входа произошла ошибка');
    } finally {
      this.saveLoading = false;
    }
  }
}
</script>
