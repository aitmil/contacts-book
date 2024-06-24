import { useState } from 'react';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { IoPerson } from 'react-icons/io5';
import { FaPhone } from 'react-icons/fa6';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { MdOutlineEdit } from 'react-icons/md';
import Modal from 'react-modal';
import clsx from 'clsx';
import css from './Contact.module.css';
import { deleteContact } from '../../redux/contacts/operations';

Modal.setAppElement('#root');

export default function Contact({ contact: { id, name, number } }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const dispatch = useDispatch();
  const handleEdit = () => {};
  const handleDelete = () => {
    handleCloseModal();
    dispatch(deleteContact(id));
    toast.success('Contact deleted successfully!');
  };
  const handleOpenModal = () => {
    setModalIsOpen(true);
  };
  const handleCloseModal = () => {
    setModalIsOpen(false);
  };
  return (
    <>
      <div className={css.contactBox}>
        <div className={css.nameBox}>
          <IoPerson size={30} />
          <h2 className={css.name}>{name}</h2>
        </div>
        <div className={css.numberBox}>
          <FaPhone size={30} />
          <p className={css.number}>{number}</p>
        </div>
      </div>
      <div className={css.btnWrapper}>
        <button
          type='button'
          className={clsx(css.btn, css.editBtn)}
          onClick={handleEdit}
        >
          <MdOutlineEdit />
          Edit
        </button>
        <button
          type='button'
          className={css.btn}
          onClick={handleOpenModal}
        >
          <RiDeleteBin5Fill />
          Delete
        </button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
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
            onClick={handleCloseModal}
          >
            No
          </button>
        </div>
      </Modal>
    </>
  );
}
