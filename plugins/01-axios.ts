import { useUserStore } from '~/store/user';
import { useNotificationStore } from '~/store/notification';
import axios from 'axios';

export default defineNuxtPlugin(nuxtApp => {
  const userStore = useUserStore();
  const notification = useNotificationStore();
  const config = useRuntimeConfig();

  let axiosInstance = axios.create({
    baseURL: config.public.API_URL as string,
    headers: {
      Accept: 'application/json',
      common: {
        'X-Authorization': `Bearer ${userStore.token}`,
      },
    },
  });

  axiosInstance.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      // console.log(error);

      // Если токен протух и это не запрос на обновление токена
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
