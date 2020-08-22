import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RiCloseLine } from 'react-icons/ri';
import { SectionModal, Modal } from './styled';
import * as actionsMenu from '../../store/modules/menu/actions';

export default function ModalComponent({ Info }) {
  const statusModal = useSelector(state => state.menu.statusModal);
  const dispatch = useDispatch();

  const handleClick = e => {
    if (e.target.id === 'sectionModal') {
      dispatch(actionsMenu.statusModal(false));
    }
  };

  return (
    <SectionModal
      id="sectionModal"
      statusModal={statusModal}
      onClick={handleClick}
    >
      <Modal>
        <button
          className="default"
          type="button"
          onClick={() => dispatch(actionsMenu.statusModal(false))}
        >
          <RiCloseLine />
        </button>

        <Info />
      </Modal>
    </SectionModal>
  );
}
