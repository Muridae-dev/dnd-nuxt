export interface Dialogue {
  dialogueData: DialogueData[];
  choiceTitle?: string;
}

export interface DialogueData {
  dialogue: string[];
  person: string;
  choices?: string[] | undefined;
}
