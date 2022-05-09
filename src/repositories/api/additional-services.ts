import { AxiosPromise } from 'axios';
import api from '@/repositories/api';
import { AdditionalServicesListItem, DataResponse } from '@/types/api';

export default {
  getList(): AxiosPromise<DataResponse<AdditionalServicesListItem[]>> {
    return api.get('/additional-services');
  },
};
