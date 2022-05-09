import { CleaningTypeModel } from '@/types/api/cleaning-type';
import { AdditionalServiceOrderModel } from '@/types/api/additional-service';

export type OrderLocationType = 'apartment' | 'house';
export type OrderCleaningFrequency = 'every_week' | 'every_month' | 'twice_month' | 'once';

export interface OrderModel {
  locationType: OrderLocationType,
  cleaningType: CleaningTypeModel,
  cleaningFrequency: OrderCleaningFrequency,
  roomsCount: number,
  bathroomsCount: number,
  additionalServices: AdditionalServiceOrderModel[],
  time: null|string,
  date: null|Date,
  comment: null|string,
  timeInvalid: boolean,
  dateInvalid: boolean,
  address: {
    city: null|string,
    street: null|string,
    streetNumber: null|string,
    floor: null|string,
    apartmentNumber: null|string,
    streetInvalid: boolean,
    streetNumberInvalid: boolean,
  },
}
