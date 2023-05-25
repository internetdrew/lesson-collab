import { atom } from 'recoil';

export const newUsersState = atom({
  key: 'newUsers',
  default: [],
});
