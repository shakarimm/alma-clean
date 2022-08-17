import { AxiosPromise } from 'axios';
import api from '@/repositories/api';
import { StatCountsItem, DataResponse } from '@/types/api';

export default {
  getList(): AxiosPromise<DataResponse<StatCountsItem[]>> {
    return api.get('/stat-counts');
  },
};
