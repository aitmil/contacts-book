import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    editModalIsOpen: false,
    deleteModalIsOpen: false,
    activeToEdit: null,
    activeToDelete: null,
  },
  reducers: {
    openEditModal: (state, action) => {
      state.editModalIsOpen = true;
      state.activeToEdit = action.payload;
    },
    closeEditModal: state => {
      state.editModalIsOpen = false;
      state.activeToEdit = null;
    },
    openDeleteModal: (state, action) => {
      state.deleteModalIsOpen = true;
      state.activeToDelete = action.payload;
    },
    closeDeleteModal: state => {
      state.deleteModalIsOpen = false;
      state.activeToDelete = null;
    },
  },
});

export const {
  openEditModal,
  closeEditModal,
  openDeleteModal,
  closeDeleteModal,
} = modalSlice.actions;

export const modalReducer = modalSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';

// const modalSlice = createSlice({
//   name: 'modal',
//   initialState: {
//     editModalIsOpen: false,
//     deleteModalIsOpen: false,
//     contactIdToEdit: null,
//     contactIdToDelete: null,
//   },
//   reducers: {
//     openEditModal: (state, action) => {
//       state.editModalIsOpen = true;
//       state.contactIdToEdit = action.payload;
//     },
//     closeEditModal: state => {
//       state.editModalIsOpen = false;
//       state.contactIdToEdit = null;
//     },
//     openDeleteModal: (state, action) => {
//       state.deleteModalIsOpen = true;
//       state.contactIdToDelete = action.payload;
//     },
//     closeDeleteModal: state => {
//       state.deleteModalIsOpen = false;
//       state.contactIdToDelete = null;
//     },
//   },
// });

// export const {
//   openEditModal,
//   closeEditModal,
//   openDeleteModal,
//   closeDeleteModal,
// } = modalSlice.actions;

// export const modalReducer = modalSlice.reducer;
