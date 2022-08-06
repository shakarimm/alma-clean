export type AdditionalServiceType = 'cleaning' | 'dry_cleaning';

export interface AdditionalServicesListItem {
  id: number,
  type: AdditionalServiceType,
  cleaning_types_ids: number[],
  name: string,
  price: number,
  icon_url: string,
}

export interface AdditionalServiceOrderFormModel {
  id: number,
  type: AdditionalServiceType,
  cleaningTypesIds: number[],
  name: string,
  price: number,
  iconUrl: string,
  quantity: number,
}

export interface AdditionalServiceOrderModel {
  id: number,
  name: string,
  price: number,
  quantity: number,
}
