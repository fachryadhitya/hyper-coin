import 'server-only';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const dictionaries: Record<string, () => Promise<Record<string, any>>> = {
  'ko-KR': () => import('./dictionaries/ko.json').then((module) => module.default),
};

// TODO: support multiple locales
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getDictionary = async (locale: string) => dictionaries['ko-KR']();
