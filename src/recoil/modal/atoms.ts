import { atom, atomFamily } from 'recoil';

export interface ModalProps {
  id: string;
  params: null;
}

export const modalState = atomFamily<ModalProps, string>({
  key: 'modalState',
  default: (id) => ({
    id,
    params: null,
  }),
});

export const modalListState = atom<Array<string>>({
  key: 'modalListState',
  default: [],
});
