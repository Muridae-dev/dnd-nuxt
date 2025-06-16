export const useTheTownStore = defineStore("theTownStore", {
  state: (): any => ({
    options: [
      {
        iconType: "npcs",
        iconName: "wise-man",
        title: "Open Dialogue",
        src: "intro/intro",
      },
      {
        iconType: "npcs",
        iconName: "villager-1",
        title: "Store",
        src: "store/store",
      },
    ],
    optionsToShow: [],
  }),
  actions: {
    updateShowingOptions(src: string) {
      const index = this.options.findIndex((option: any) => option.src === src);
      if (
        index !== -1 &&
        !this.optionsToShow.find((option: any) => option.src === src)
      ) {
        this.optionsToShow.push(this.options[index]);
      }
    },
  },
});
