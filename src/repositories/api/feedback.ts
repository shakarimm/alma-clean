import { AxiosPromise } from 'axios';
import api from '@/repositories/api';
import { SuccessfulResponse } from '@/types/api';
import { FeedbackSendRequest } from '@/types/api/feedback';

export default {
  send(params: FeedbackSendRequest): AxiosPromise<SuccessfulResponse> {
    return api.post('/feedback/send', params);
  },
};
