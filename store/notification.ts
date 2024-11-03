import { defineStore } from 'pinia';

type StatusType = 'success' | 'error' | null;

export interface INotificationStore {
  status: StatusType;
  message: string;
  visible: boolean;
}

interface NotificationPayload {
  status: StatusType;
  message: string;
}

export const useNotificationStore = defineStore('notification', {
  state: (): INotificationStore => ({
    status: null,
    message: '',
    visible: false,
  }),
  actions: {
    async setNotification({ status, message }: NotificationPayload) {
      this.$state.status = status;
      this.$state.message = message;
      this.$state.visible = true;

      setTimeout(() => {
        this.hideNotification();
      }, 5000);
    },
    async error(message: string | null) {
      if (message) {
        this.setNotification({ status: 'error', message });
      }
    },
    async success(message: string | null) {
      if (message) {
        this.setNotification({ status: 'success', message });
      }
    },
    async hideNotification() {
      (this.$state.status = null), (this.$state.message = '');
      this.$state.visible = false;
    },
  },
  persist: true,
});
