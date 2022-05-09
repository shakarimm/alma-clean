export interface CleaningTypesListItem {
  id: number,
  slug: boolean,
  name: string,
  price_apartment: number,
  price_house: number,
  price_apartment_room: number,
  price_house_room: number,
  price_apartment_bathroom: number,
  price_house_bathroom: number,
  description: string,
}

export interface CleaningTypeModel {
  id: number,
  slug: boolean,
  name: string,
  priceApartment: number,
  priceHouse: number,
  priceApartmentRoom: number,
  priceHouseRoom: number,
  priceApartmentBathroom: number,
  priceHouseBathroom: number,
  description: string,
}
