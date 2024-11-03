import type { AxiosRequestConfig, Method, AxiosInstance, AxiosResponse, AxiosError } from 'axios';
import type { AsyncDataOptions } from '#app';

class HttpFactory {
  private axiosInstance: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }

  async call<T>(method: Method, url: string, data?: object, axiosOptions?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.request<T>({
      method,
      url,
      data,
      ...axiosOptions,
    });

    return response.data;
  }

  callShort<T>(
    method: Method,
    url: string,
    data?: object,
    headers: Record<string, string> = {},
    asyncDataOptions: AsyncDataOptions<T> = {}
  ) {
    headers['Accept-Language'] = 'en-US';
    const axiosOptions: AxiosRequestConfig = { headers };
    // const asyncDataOptions: AsyncDataOptions<T> = { server: false };

    return useAsyncData<T, AxiosError>(
      url,
      async () => {
        return await this.call<T>(method, url, data, axiosOptions);
      },
      asyncDataOptions
    );
  }
}

export default HttpFactory;
