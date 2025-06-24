type NotificationType = "error" | "message" | "help";

interface NotificationStore {
  type: NotificationType | null;
  message: string | null;
  timeout: number | null;
  id: number;
}

export const useNotificationStore = defineStore("notificationStore", {
  state: (): NotificationStore => ({
    type: null,
    message: null,
    timeout: null,
    id: 0,
  }),
  actions: {
    clearNotification() {
      this.type = null;
      this.message = null;
      this.timeout = null;
    },
    addNotification({
      message,
      timeout = 2000,
      type = "message",
    }: {
      message: string;
      timeout?: number;
      type?: NotificationType;
    }) {
      this.message = message;
      this.timeout = timeout;
      this.type = type;
      this.id++;
    },
  },
});
