import { atom } from 'recoil';

export const scrollState = atom({
  key: 'scrollToBottom',
  default: false,
});
