// import { useDispatch, useSelector } from 'react-redux';
// import toast from 'react-hot-toast';
// import Modal from 'react-modal';
// import { IoPerson } from 'react-icons/io5';
// import { FaPhone } from 'react-icons/fa6';
// import { MdOutlineEdit } from 'react-icons/md';
// import { closeEditModal } from '../../redux/modal/slice';
// import { selectEditModalIsOpen } from '../../redux/modal/selectors';
// import { editContact } from '../../redux/contacts/operations';
// import css from './ModalEdit.module.css';

// Modal.setAppElement('#root');

// export default function ModalEdit({ contact: { id, name, number } }) {
//   const isOpen = useSelector(selectEditModalIsOpen);
//   const dispatch = useDispatch();

//   if (!isOpen) {
//     return null;
//   }

//   const handleEdit = () => {
//     dispatch(editContact(id));
//     dispatch(closeEditModal());
//     toast.success('Contact edited successfully!');
//   };

//   return (
//     <Modal
//       isOpen={isOpen}
//       onRequestClose={() => dispatch(closeEditModal())}
//       className={css.modalEdit}
//       overlayClassName={css.overlayEdit}
//       contentLabel='Edit Modal'
//       closeTimeoutMS={400}
//     >
//       <p className={css.delText}>Input changes:</p>
//       <div className={css.contactBox}>
//         <label className={css.label}>
//           <IoPerson size={30} />
//           <input
//             className={css.input}
//             name='name'
//             type='text'
//           ></input>
//         </label>
//         <label className={css.label}>
//           <FaPhone size={30} />
//           <input
//             className={css.input}
//             name='number'
//             type='number'
//           ></input>
//         </label>
//       </div>
//       <button
//         type='button'
//         className={css.btn}
//         onClick={handleEdit}
//       >
//         <MdOutlineEdit />
//         Edit
//       </button>
//     </Modal>
//   );
// }
