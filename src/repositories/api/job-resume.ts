import { AxiosPromise } from 'axios';
import api from '@/repositories/api';
import { SuccessfulResponse } from '@/types/api';
import { JobResumeSendRequest } from '@/types/api/job-resume';

export default {
  send(params: JobResumeSendRequest): AxiosPromise<SuccessfulResponse> {
    const formData = new FormData();
    Object.keys(params).forEach((key) => {
      const value = (params as any)[key];
      if (value) {
        formData.append(key, value);
      }
    });
    return api.post('/job-resume/send', formData);
  },
};
