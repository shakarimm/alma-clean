import {
  Action,
  Module,
  Mutation,
  VuexModule,
} from 'vuex-module-decorators';
import { City, CityInformation } from '@/types';
import { citiesList } from '@/app.config';

@Module
export default class Location extends VuexModule {
  city: null|CityInformation = citiesList[0];

  get locationCity(): null|CityInformation {
    return this.city;
  }

  @Mutation
  SET_LOCATION_CITY(city: CityInformation): void {
    this.city = city;
  }

  @Action({ commit: 'SET_LOCATION_CITY' })
  setLocationCity(city: City): null|CityInformation {
    return citiesList.find((listCity) => listCity.slug === city) ?? null;
  }
}
