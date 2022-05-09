export interface PromocodeApiModel {
  id: number,
  code: string,
  discount_percent: null|number,
  discount_value: null|number,
}

export interface PromocodeModel {
  id: null|number,
  code: null|string,
  discountPercent: null|number,
  discountValue: null|number,
  codeInvalid: boolean;
}
