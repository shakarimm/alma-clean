import { AxiosPromise } from 'axios';
import {
  CleanerApiModel,
  CleanerUpdateRequest,
  DataResponse,
} from '@/types';
import api from '@/repositories/api';

export default {
  getList(): AxiosPromise<DataResponse<CleanerApiModel[]>> {
    return api.get('/profile/cleaners');
  },
  update(id: number, params: CleanerUpdateRequest): AxiosPromise<DataResponse<CleanerApiModel>> {
    return api.put(`/profile/cleaners/${id}`, params);
  },
};
