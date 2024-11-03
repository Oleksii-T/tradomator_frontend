import { defineStore } from 'pinia';
import type { ILoginFormData } from '~/types/auth-types';
import { ApiStatusEnum } from '~/constants/api-statuses';

export interface IUserStore {
  id?: string | null;
  first_name: string | null;
  last_name: string | null;
  email: string | null;
  token: string | null;
}

export const useUserStore = defineStore('user', {
  state: (): IUserStore => ({
    id: null,
    first_name: null,
    last_name: null,
    email: null,
    token: null,
  }),
  actions: {
    async verifiedStaff(verification: ILoginFormData) {
      const axios = useNuxtApp().$axios;
      const { $api } = useNuxtApp();

      const { data, status, error } = await $api.auth.login(verification, { server: false });
      if (status.value === ApiStatusEnum.SUCCESS) {
        this.$state.first_name = data.value?.data?.user?.first_name || null;
        this.$state.last_name = data.value?.data?.user?.last_name || null;
        this.$state.id = data.value?.data?.user?.id || null;
        this.$state.token = data.value?.data?.token || null;
        axios.defaults.headers.common['X-Authorization'] = `Bearer ${data.value?.data?.token}`;
      }

      return { data, error, status };
    },
  },
  persist: true,
});
