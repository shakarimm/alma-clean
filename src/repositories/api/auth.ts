import { AxiosPromise } from 'axios';
import {
  AuthSignInRequest,
  AuthSignInResponse,
  AuthSignUpRequest,
  AuthSignUpResponse,
} from '@/types/api/auth';
import api from '@/repositories/api';

export default {
  signUp(params: AuthSignUpRequest): AxiosPromise<AuthSignUpResponse> {
    return api.post('/auth/sign-up', params);
  },
  signIn(params: AuthSignInRequest): AxiosPromise<AuthSignInResponse> {
    return api.post('/auth/sign-in', params);
  },
  logout(): AxiosPromise {
    return api.post('/auth/logout');
  },
};
