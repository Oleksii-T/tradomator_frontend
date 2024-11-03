import type { AxiosRequestConfig } from 'axios';
import type { AsyncDataOptions } from '#app';
import { AxiosError } from 'axios';

import HttpFactory from '~/repository/factory';
import type { ILoginFormData, ILoginResponse } from '~/types/auth-types';

class AuthModule extends HttpFactory {
  login(data: ILoginFormData, asyncDataOptions?: AsyncDataOptions<ILoginResponse>) {
    const fullUrl = '/login';

    return useAsyncData<ILoginResponse, AxiosError>(() => {
      const axiosOptions: AxiosRequestConfig = { headers: { 'Accept-Language': 'en-US' } };
      return this.call<ILoginResponse>('POST', fullUrl, data, axiosOptions);
    }, asyncDataOptions);
  }
}

export default AuthModule;
