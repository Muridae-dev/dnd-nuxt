import type { OptionsProps } from "~/types/optionTypes";

export const useTheTownStore = defineStore("theTownStore", {
  state: (): { options: OptionsProps[]; optionsToShow: OptionsProps[] } => ({
    options: [
      {
        type: "dialogue",
        iconType: "npcs",
        iconName: "wise-man",
        title: "Open Dialogue",
        src: "intro/intro",
      },
      {
        type: "store",
        iconType: "npcs",
        iconName: "villager-1",
        title: "Shopkeeper",
        src: "store/store",
      },
    ],
    optionsToShow: [
      {
        type: "dialogue",
        iconType: "npcs",
        iconName: "wise-man",
        title: "Open Dialogue",
        src: "intro/intro",
      },
    ],
  }),
  actions: {
    updateShowingOptions(optionSrc: string) {
      const indexOfOption = this.options.findIndex(
        (option) => option.src === optionSrc
      );
      if (
        indexOfOption !== -1 &&
        !this.optionsToShow.find((option) => option.src === optionSrc)
      ) {
        this.optionsToShow.push(this.options[indexOfOption]);
        const { addNotification } = useNotificationStore();
        addNotification({
          message: `${this.options[indexOfOption].title} is now available`,
        });
      }
    },
  },
});
