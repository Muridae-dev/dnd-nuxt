export const loadDialogue = async (src: string) => {
  const base = useRequestURL();
  const res = await fetch(`${base.origin}/dialogues/${src}.md`);
  const raw = await res.text();
  return parseDialogue(raw);
};
