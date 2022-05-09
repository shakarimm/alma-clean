import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import Cookie from 'js-cookie';
import {
  apiBaseUrl,
  tokenCookieKey,
} from '@/app.config';
import { ResponseStatus } from '@/types/api/common';

function requestResolve(config: AxiosRequestConfig) {
  const token = Cookie.get(tokenCookieKey);
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
}

function requestReject(err: unknown) {
  return Promise.reject(err);
}

function responseResolve(response: AxiosResponse) {
  return response;
}

function responseReject(err: AxiosError) {
  if (err.response) {
    if (err.request.responseURL.indexOf(`${apiBaseUrl}/auth/login`) !== 0
      && !window.location.href.includes('/auth/login')
      && err.response.status === ResponseStatus.UNAUTHORIZED) {
      Cookie.remove(tokenCookieKey);
      window.location.href = '/auth/login';
    }
  }

  return Promise.reject(err);
}

axios.defaults.baseURL = apiBaseUrl;
axios.interceptors.request.use(requestResolve, requestReject);
axios.interceptors.response.use(responseResolve, responseReject);

export default axios;
