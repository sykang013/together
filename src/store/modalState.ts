import { atomFamily } from 'recoil';

export interface IModalAtomFamily {
  id: string;
  isOpen: boolean;
}

export const modalAtomFamily = atomFamily<IModalAtomFamily, string>({
  key: 'modalAtomFamily',
  default: (id) => ({
    id,
    isOpen: false,
  }),
});
