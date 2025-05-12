export type MinimalElement = [
  tag: string,
  attrs: Record<string, any>,
  content: string | MinimalElement[]
];

export interface MinimalBody {
  type: "minimal";
  value: MinimalElement[];
  toc: {
    title: string;
    searchDepth: number;
    depth: number;
    links: any[];
  };
}
