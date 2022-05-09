export type AdditionalServiceType = 'cleaning' | 'dry_cleaning';

export interface AdditionalServicesListItem {
  id: number,
  type: AdditionalServiceType,
  cleaning_types_ids: number[],
  name: string,
  price: number,
  icon_url: string,
}

export interface AdditionalServiceOrderModel {
  id: number,
  type: AdditionalServiceType,
  cleaningTypesIds: number[],
  name: string,
  price: number,
  iconUrl: string,
  quantity: number,
}
