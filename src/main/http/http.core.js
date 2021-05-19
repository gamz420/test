import axios from 'axios';

import { BASE_URL, ROUTES } from './http.constant';
import { redirect } from '../navigation/navigation.core';
import { HTTP_ERROR_ROUTER } from './index';

export const httpRequest = axios.create({
  baseURL: BASE_URL,
  timeout: 100000,
});

const onResponseSuccess = (response) => {
  return response;
};

const onResponseError = (error) => {
  if (!error.response) {
    return redirect(HTTP_ERROR_ROUTER.INTERNAL_SERVER_ERROR);
  }
  if (error.response) {
    if (error.response.status === 401) {
      return redirect(HTTP_ERROR_ROUTER.UNAUTHORIZED_ERROR);
    }

    if (error.response.status === 403) {
      return redirect(HTTP_ERROR_ROUTER.ACCESS_DENIED);
    }

    if (error.response.status === 500) {
      return redirect(HTTP_ERROR_ROUTER.SERVER_ERROR);
    }

    if (error.response.status === 404) {
      return redirect(HTTP_ERROR_ROUTER.NOT_FOUND);
    }

    return Promise.reject(error);
  }
};

httpRequest.interceptors.response.use(onResponseSuccess, onResponseError);
