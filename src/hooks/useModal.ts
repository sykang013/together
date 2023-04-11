import { modalAtomFamily } from '@/store/modalState';
import { useCallback, useMemo } from 'react';
import { useRecoilState } from 'recoil';

const useModal = (modalId: string) => {
  const [modalState, setModalState] = useRecoilState(modalAtomFamily(modalId));

  const openModal = useCallback(() => {
    setModalState((modalState) => ({ ...modalState, isOpen: true }));
  }, [setModalState]);

  const closeModal = useCallback(() => {
    setModalState((modalState) => ({ ...modalState, isOpen: false }));
  }, [setModalState]);

  const toggleModal = useCallback(() => {
    setModalState((modalState) => ({
      ...modalState,
      isOpen: !modalState.isOpen,
    }));
  }, [setModalState]);

  return useMemo(
    () => ({ modalState, openModal, closeModal, toggleModal }),
    [modalState, openModal, closeModal, toggleModal]
  );
};

export default useModal;
