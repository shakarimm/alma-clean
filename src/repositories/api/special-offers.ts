import { AxiosPromise } from 'axios';
import api from '@/repositories/api';
import { SpecialOffersItem } from '@/types/api/special-offers';
import { DataResponse } from '@/types';

export default {
  getList(): AxiosPromise<DataResponse<SpecialOffersItem[]>> {
    return api.get('/special-offers');
  },
};
