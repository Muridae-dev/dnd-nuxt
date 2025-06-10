export const loadDialogue = async () => {
  const base = useRequestURL();
  const res = await fetch(`${base.origin}/dialogues/the-town/intro/intro.md`);
  const raw = await res.text();
  return parseDialogue(raw);
};
