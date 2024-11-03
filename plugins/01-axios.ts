import { useUserStore } from '~/store/user';
import { useNotificationStore } from '~/store/notification';
import axios from 'axios';

export default defineNuxtPlugin(nuxtApp => {
  const userStore = useUserStore();
  const notification = useNotificationStore();
  const config = useRuntimeConfig();

  const headers = {
    Accept: 'application/json',
  };

  if (userStore.token) {
    headers.Authorization = `Bearer ${userStore.token}`;
  }

  let axiosInstance = axios.create({
    baseURL: config.public.API_URL as string,
    headers,
  });

  axiosInstance.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      // token expired and it is not refresh token request - naviagate to login
      if (error.response.status === 401) {
        notification.error('Sorry your session has ended, please log in again and continue working.');
        userStore.$reset();
        window.location.href = '/login';
      }

      if (error.response.status === 403) {
        notification.error(error.response.data.error);
      }

      if (error.response.status === 429) {
        notification.error('We received too many requests from your device. Please try again later.');
      }

      return Promise.reject(error);
    }
  );
  return {
    provide: {
      axios: axiosInstance,
    },
  };
});
