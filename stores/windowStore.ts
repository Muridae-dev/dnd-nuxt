import type { Component } from "nuxt/schema";

interface WindowOpenProps {
  component: Component;
  collectionName?: string;
  articleName?: string;
}

export const useWindowStore = defineStore("windowStore", {
  state: (): any => ({
    windows: [],
  }),

  actions: {
    addWindow({ component }: WindowOpenProps) {
      // TODO: this might need to be cleaner... Maybe not use find
      // TODO: remove any:s
      const isWindowOpen = this.windows.find((w: any) => {
        return w.component === component;
      });
      !isWindowOpen && this.windows.push({ component });
    },
    closeWindow(window: any) {
      const index = this.windows.findIndex((w: any) => w === window);
      if (index !== -1) {
        this.windows.splice(index, 1);
      }
    },
  },
});
