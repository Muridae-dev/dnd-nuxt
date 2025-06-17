import type { DialogueData } from "~/types/optionTypes";

export const parseDialogue = (rawDialogues: string) => {
  const splitDialogues = rawDialogues.split("---");

  const dialogues = splitDialogues.map((m) => {
    if (m.split("###")[1]) {
      const choiceTitle = m.split("### ")[1].split(/\n/)[0];
      return {
        choiceTitle,
        dialogueData: splitDialogue(m.split(choiceTitle).splice(1)[0]),
      };
    } else {
      return { dialogueData: splitDialogue(m) };
    }
  });

  let finished: any = rawDialogues.split("### FINISHED {")[1];
  if (finished) {
    finished = finished.split("}")[0].trim();

    if (finished.includes("open:")) {
      finished = { open: finished.split("open: ")[1] };
    }
  }

  return { dialogues, finished };
};

const formatParagraphs = (str: string) => {
  return str
    .split("-")
    .map((line) => line.trim())
    .filter(Boolean);
};

const splitDialogue = (rawDialogue: string) => {
  let dialogues: DialogueData[] = [];
  rawDialogue.split("# [")[1] &&
    rawDialogue.split("# [").forEach((s) => {
      if (s.includes("# [")) return;
      else if (s.includes("]")) {
        const person = s.split("]")[0];
        const choices =
          s.split("##")[1] && formatParagraphs(s.split("##")[1]).splice(1);
        const dialogue = choices
          ? formatParagraphs(s.split("##")[0].split("]")[1])
          : formatParagraphs(s.split("]")[1]);

        dialogues.push({
          person,
          dialogue,
          choices,
        });
      }
    });

  return dialogues;
};
