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
      this.windows.push({ component });

      console.log(this.windows);
    },
  },
});
