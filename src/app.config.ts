import Inputmask from 'inputmask';
import { CityInformation } from '@/types';

export const apiBaseUrl = process.env.VUE_APP_API_BASE_URL;
export const tokenCookieKey = 'almc_token';
export const tokenCookieExpiresInDays = 365;

export const currencyMaskOptions: Inputmask.Options = {
  alias: 'currency',
  rightAlign: false,
  groupSeparator: ' ',
  inputmode: 'numeric',
  numericInput: true,
  suffix: 'тг.',
  radixPoint: ',',
  digits: 0,
  max: 9999999,
};

export const phoneMaskOptions: Inputmask.Options = {
  mask: '(999) 999 99 99',
  placeholder: '_',
  inputmode: 'numeric',
};
export const phoneMask = new Inputmask(phoneMaskOptions);

export const citiesList: CityInformation[] = [
  {
    slug: 'almaty',
    name: 'Алматы',
    phones: ['+7 (777) 831-08-08', '+7 (727) 327-32-05'],
  },
  {
    slug: 'astana',
    name: 'Нур-Султан',
    phones: ['+7 (777) 777-77-77', '+7 (777) 777-77-78'],
  },
  {
    slug: 'shimkent',
    name: 'Шымкент',
    phones: ['+7 (777) 777-77-77'],
  },
];

export default {
  apiBaseUrl,
  citiesList,
  currencyMaskOptions,
  phoneMask,
};
