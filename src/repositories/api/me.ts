import { AxiosPromise } from 'axios';
import {
  DataResponse, MeUpdateRequest,
  ProfileApiData,
} from '@/types';
import api from '@/repositories/api';

export default {
  get(): AxiosPromise<DataResponse<ProfileApiData>> {
    return api.get('/profile/me');
  },
  update(params: MeUpdateRequest): AxiosPromise<DataResponse<ProfileApiData>> {
    return api.put('/profile/me', params);
  },
};
