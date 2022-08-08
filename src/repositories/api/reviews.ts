import { AxiosPromise } from 'axios';
import api from '@/repositories/api';
import { ReviewsListItem, DataResponse } from '@/types/api';

export default {
  getList(): AxiosPromise<DataResponse<ReviewsListItem[]>> {
    return api.get('/reviews');
  },
};
