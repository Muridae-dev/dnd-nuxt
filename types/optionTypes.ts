export interface OptionsProps {
  type: "dialogue" | "store";
  iconType: "npcs";
  iconName: string;
  title: string;
  src: string;
}

export interface Dialogue {
  dialogueData: DialogueData[];
  choiceTitle?: string;
}

export interface DialogueData {
  dialogue: string[];
  person: string;
  choices?: string[] | string;
}

export interface DialogueOption extends OptionsProps {
  type: "dialogue";
  dialogues: Dialogue[];
  finished: any;
  isOpen: boolean;
}

export interface StoreOption extends OptionsProps {
  type: "store";
  storeData: StoreInventory[];
  isOpen: boolean;
}

export interface StoreInventory {
  amount: string;
  itemId: string;
}
