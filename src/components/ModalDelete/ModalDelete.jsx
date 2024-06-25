import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import Modal from 'react-modal';
import clsx from 'clsx';
import { closeDeleteModal } from '../../redux/modal/slice';
import { selectDeleteModalIsOpen } from '../../redux/modal/selectors';
import { deleteContact } from '../../redux/contacts/operations';
import css from './ModalDelete.module.css';

Modal.setAppElement('#root');

export default function ModalDelete({ contact: { id } }) {
  const isOpen = useSelector(selectDeleteModalIsOpen);
  const dispatch = useDispatch();

  if (!isOpen) {
    return null;
  }

  const handleDelete = () => {
    dispatch(deleteContact(id));
    dispatch(closeDeleteModal());
    toast.success('Contact deleted successfully!');
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => dispatch(closeDeleteModal())}
      className={css.modalDelete}
      overlayClassName={css.overlayDelete}
      contentLabel='Delete Modal'
      closeTimeoutMS={400}
    >
      <p className={css.delText}>Delete contact?</p>
      <div className={css.delBtnWrapper}>
        <button
          type='button'
          className={css.delBtn}
          onClick={handleDelete}
        >
          Yes
        </button>
        <button
          type='button'
          className={clsx(css.delBtn, css.btnNo)}
          onClick={() => dispatch(closeDeleteModal())}
        >
          No
        </button>
      </div>
    </Modal>
  );
}
