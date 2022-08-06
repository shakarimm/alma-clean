import { CleaningTypeModel } from '@/types/api/cleaning-type';
import {
  AdditionalServiceOrderFormModel,
  AdditionalServiceOrderModel,
} from '@/types/api/additional-service';
import { City } from '@/types/city';

export type OrderLocationType = 'apartment' | 'house';
export type OrderPaymentType = 'cash' | 'online';
export type OrderStatus = 'waiting_pay' | 'waiting_cleaning' | 'completed'
  | 'canceled_by_client' | 'canceled_by_company' | 'pay_error';

export type OrderCleaningFrequency = 'every_week' | 'every_month' | 'twice_month' | 'once';

export interface OrderAdditionalServiceApiModel {
  id: number,
  name: string,
  quantity: number,
  price: number,
}

export interface OrderPayResult {
  pay_url: string,
}

export interface OrderApiModel {
  id: number,
  status: OrderStatus,
  location_type: OrderLocationType,
  cleaning_type: {
    slug: string,
    name: string,
  },
  rooms_count: number,
  bathrooms_count: number,
  cleaning_frequency: OrderCleaningFrequency,
  cleaning_frequency_discount_percent: number,
  datetime: string,
  address: {
    city: City,
    street: string,
    street_number: string,
    floor: null|string,
    apartment_number: null|string,
  },
  additional_services: OrderAdditionalServiceApiModel[],
  comment: null|string,
}

export interface OrderFormModel {
  locationType: OrderLocationType,
  cleaningType: CleaningTypeModel,
  cleaningFrequency: OrderCleaningFrequency,
  roomsCount: number,
  bathroomsCount: number,
  additionalServices: AdditionalServiceOrderFormModel[],
  time: null|string,
  date: null|Date,
  comment: null|string,
  paymentType: OrderPaymentType,
  timeErrors: null|string[],
  dateErrors: null|string[],
  address: {
    city: null|City,
    street: null|string,
    streetNumber: null|string,
    floor: null|string,
    apartmentNumber: null|string,
    streetErrors: null|string[],
    streetNumberErrors: null|string[],
  },
}

export interface OrderModel {
  id: number,
  locationType: OrderLocationType,
  cleaningType: {
    slug: string,
    name: string,
  },
  cleaningFrequency: OrderCleaningFrequency,
  roomsCount: number,
  bathroomsCount: number,
  status: OrderStatus,
  additionalServices: AdditionalServiceOrderModel[],
  datetime: Date,
  comment: null|string,
  address: {
    city: City,
    street: string,
    streetNumber: string,
    floor: null|string,
    apartmentNumber: null|string,
  },
}

interface OrderAdditionalServiceCreateRequest {
  id: number,
  quantity: number,
}

export interface OrderCreateRequest {
  location_type: OrderLocationType,
  rooms_count: number,
  bathrooms_count: number,
  cleaning_type_id: number,
  additional_services: OrderAdditionalServiceCreateRequest[],
  cleaning_frequency: OrderCleaningFrequency,
  datetime: string,
  payment_type: OrderPaymentType,
  comment: null|string,
  address: {
    city: City,
    street: string,
    street_number: string,
    floor: null|string,
    apartment_number: null|string,
  },
}
