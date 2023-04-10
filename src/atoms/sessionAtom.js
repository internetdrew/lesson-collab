import { atom } from 'recoil';

export const sessionState = atom({
  key: 'session',
  default: null,
});
