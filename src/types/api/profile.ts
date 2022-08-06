import { City } from '@/types/city';

export interface ProfileAddressData {
  name: string,
  city: City,
  street: string,
  streetNumber: string,
  floor: null|string,
  apartmentNumber: null|string,
}

export interface ProfileData {
  id: number,
  firstName: string,
  lastName: string,
  email: string,
  emailSubscribe: boolean,
  phone: string,
  roles: string[],
  addresses: ProfileAddressData[],
}

export interface ProfileAddressApiData {
  name: string,
  city: City,
  street: string,
  street_number: string,
  floor: null|string,
  apartment_number: null|string,
}

export interface ProfileApiData {
  id: number,
  first_name: string,
  last_name: string,
  email: string,
  email_subscribe: boolean,
  phone: string,
  roles: string[],
  addresses: ProfileAddressApiData[],
}

export interface ProfileAddressForm {
  name: null|string,
  city: null|City,
  street: null|string,
  streetNumber: null|string,
  floor: null|string,
  apartmentNumber: null|string,
  nameErrors: null|string[],
  cityErrors: null|string[],
  streetErrors: null|string[],
  streetNumberErrors: null|string[],
}

export interface ProfileForm {
  id: number,
  firstName: string,
  lastName: string,
  emailSubscribe: boolean,
  phone: string,
  addresses: ProfileAddressForm[],
  firstNameErrors: null|string[],
  lastNameErrors: null|string[],
  phoneErrors: null|string[],
}

export interface MeUpdateRequestAddress {
  name: string,
  city: City,
  street: string,
  street_number: string,
  floor: null|string,
  apartment_number: null|string,
}

export interface MeUpdateRequest {
  first_name: string,
  last_name: string,
  email_subscribe: boolean,
  phone: string,
  addresses: MeUpdateRequestAddress[],
}
