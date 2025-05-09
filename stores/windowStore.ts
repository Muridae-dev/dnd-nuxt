import type { Component } from "nuxt/schema";

interface WindowProps {
  component: Component;
  collectionName?: string;
  articleName?: string;
}

export const useWindowStore = defineStore("windowStore", {
  state: (): any => ({
    windows: [],
  }),

  actions: {
    addWindow({ component }: WindowProps) {
      const isWindowOpen = this.windows.some(
        (w: WindowProps) => w.component === component
      );
      !isWindowOpen && this.windows.push({ component });
    },
    closeWindow(window: WindowProps) {
      const index = this.windows.findIndex((w: WindowProps) => w === window);
      if (index !== -1) {
        this.windows.splice(index, 1);
      }
    },
  },
});
