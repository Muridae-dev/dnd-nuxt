const characterImageMap: Record<string, string> = {
  "the guide": "npcs/wise-man",
  you: "npcs/bandit",
};

export const getCharacterImage = (name: string) => {
  return characterImageMap[name.trim().toLowerCase()];
};
