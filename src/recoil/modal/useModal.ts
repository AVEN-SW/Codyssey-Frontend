import { useCallback } from 'react';
import { useRecoilCallback } from 'recoil';
import { ModalProps } from './atoms';
import { modalSelector } from './selectors';

const useModal = () => {
  const setModal = useRecoilCallback(
    ({ set }) =>
      (id: string, value: ModalProps) => {
        set(modalSelector(id), value);
      },
    [],
  );
  const closeModal = useRecoilCallback(
    ({ reset }) =>
      (id: string) => {
        reset(modalSelector(id));
      },
    [],
  );
  const handleOpenModal = useCallback(
    (id: string, params: null) => {
      const value = {
        id,
        params,
      };
      setModal(id, value);
    },
    [setModal],
  );

  return { openModal: handleOpenModal, closeModal };
};

export default useModal;
