export type LangKey = "en" | "es";
export type Lang = { key: LangKey; label: string; flag: string };

const LANGUAGES: Lang[] = [
  { key: "en", label: "ENG", flag: "/assets/icons/flag/us.svg" },
  { key: "es", label: "SPN", flag: "/assets/icons/flag/es.svg" },
];

export { LANGUAGES };
