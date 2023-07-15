import React from 'react';
import ToggleMenuModal from './ToggleMenuModal';
import AdviceModal from './AdviceModal';
import { useRecoilValue } from 'recoil';
import { modalListState } from '@Modal/atoms';
import { createPortal } from 'react-dom';

const MODAL_COMPONENTS: Record<string, () => React.ReactElement> = {
  toggle: ToggleMenuModal,
  advice: AdviceModal,
};

const RecoilModalRoot = () => {
  const modalList = useRecoilValue(modalListState);
  const renderModal = modalList.map((id) => {
    const ModalComponent = MODAL_COMPONENTS[id];

    return <ModalComponent key={id} />;
  });

  return createPortal(
    <>{renderModal}</>,
    document.getElementById('modal') as HTMLElement,
  );
};

export default RecoilModalRoot;
