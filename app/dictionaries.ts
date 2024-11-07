import 'server-only';

const dictionaries: any = {
  'ko-KR': () => import('./dictionaries/ko.json').then((module) => module.default),
};

// TODO: support multiple locales
export const getDictionary = async (locale: string) => dictionaries['ko-KR']();
