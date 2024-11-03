import axios from 'axios';

export default defineNuxtPlugin(nuxtApp => {
  let axiosInstance = axios.create({
    headers: {
      Accept: 'application/json',
    },
  });

  return {
    provide: {
      axiosExt: axiosInstance,
    },
  };
});
