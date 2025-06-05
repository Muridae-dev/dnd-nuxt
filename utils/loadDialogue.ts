import fs from "fs/promises";

import path from "path";

export const loadDialogue = async (id: string) => {
  const filePath = path.resolve("content", `${id}.md`);
  const raw = await fs.readFile(filePath, "utf-8");

  const parsed = parseDialogue(raw);

  return parsed;
};
