import { AxiosPromise } from 'axios';
import api from '@/repositories/api';
import { PromocodeApiModel } from '@/types/api/promocode';
import { DataResponse } from '@/types/api';

export default {
  use(promocode: string): AxiosPromise<DataResponse<PromocodeApiModel>> {
    return api.post('/promocodes/use', { promocode });
  },
};
