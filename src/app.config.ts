import { CityInformation } from '@/types';

export const apiBaseUrl = process.env.VUE_APP_API_BASE_URL;

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
};
