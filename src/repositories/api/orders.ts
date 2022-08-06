import { AxiosPromise } from 'axios';
import {
  DataResponse,
  OrderApiModel,
  OrderPayResult,
  OrderCreateRequest,
} from '@/types';
import api from '@/repositories/api';

export default {
  getList(): AxiosPromise<DataResponse<OrderApiModel[]>> {
    return api.get('/profile/orders');
  },
  create(params: OrderCreateRequest): AxiosPromise<DataResponse<OrderApiModel>> {
    return api.post('/profile/orders', params);
  },
  pay(orderId: number): AxiosPromise<OrderPayResult> {
    return api.post(`/profile/orders/${orderId}/pay`);
  },
};
