import type { Classes, Stats } from "~/types/characterTypes";
import type { Gear } from "~/types/itemTypes";

interface CharacterState {
  name: string;
  class: Classes | "";
  stats: Stats;
  gear: Gear;
}

export const useCharacterStore = defineStore("characterStore", {
  state: (): CharacterState => ({
    name: "",
    class: "",
    stats: {
      strength: 0,
      intellect: 0,
      agility: 0,
      charisma: 0,
      luck: 0,
    },
    gear: {
      head: null,
      chest: null,
      legs: null,
      misc: [],
    },
  }),
  actions: {
    setName(newName: string) {
      this.name = newName;
    },
    // TODO: change this any to class interface
    setClass(newClass: any) {
      this.class = newClass;
    },
    // TODO: change these to reflect which stats of stats & number
    updateStats({ chosenStat, amountToIncrease }: any) {
      // Send in an object of stats to upgrade
    },
    // TODO: change to item class
    updateGear(item: any) {
      // Send in a gear-piece with a set slot, eg. "Mail Hauberk" "Chest" & equip accordingly
      // Also put old piece back in bag
    },
  },
});
