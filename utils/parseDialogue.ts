export const parseDialogue = (dialogue: string) => {
  const map1 = dialogue.split("---");

  const map2 = map1.map((m) => {
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

  return map2;
};

const splitByNs = (array: string) => {
  return array
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);
};

const formatParagraphs = (str: string) => {
  return str
    .split("-")
    .map((line) => line.trim())
    .filter(Boolean);
};

const splitDialogue = (dialogue: string) => {
  let dialogues: { person: string; dialogue: string[]; choices?: any }[] = [];
  dialogue.split("# [")[1] &&
    dialogue.split("# [").forEach((s) => {
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
