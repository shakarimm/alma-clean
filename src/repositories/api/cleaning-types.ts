import { AxiosPromise } from 'axios';
import api from '@/repositories/api';
import { CleaningTypesListItem, DataResponse } from '@/types/api';

export default {
  getList(): AxiosPromise<DataResponse<CleaningTypesListItem[]>> {
    return api.get('/cleaning-types');
  },
};
