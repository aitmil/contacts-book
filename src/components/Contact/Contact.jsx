import { useDispatch } from 'react-redux';
import { IoPerson } from 'react-icons/io5';
import { FaPhone } from 'react-icons/fa6';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { MdOutlineEdit } from 'react-icons/md';
import { openDeleteModal, openEditModal } from '../../redux/modal/slice';
import clsx from 'clsx';
import css from './Contact.module.css';

export default function Contact({ contact: { name, number } }) {
  const dispatch = useDispatch();

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
          onClick={() => dispatch(openEditModal())}
        >
          <MdOutlineEdit />
          Edit
        </button>
        <button
          type='button'
          className={css.btn}
          onClick={() => dispatch(openDeleteModal())}
        >
          <RiDeleteBin5Fill />
          Delete
        </button>
      </div>
    </>
  );
}
