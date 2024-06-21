import { useEffect, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import css from "./App.module.css";
// import ContactForm from "../ContactForm/ContactForm";
// import ContactList from "../ContactList/ContactList";
// import SearchBox from "../SearchBox/SearchBox";
// import Loader from "../Loader/Loader";
// import Error from "../Error/Error";
// import { fetchContacts } from "../../redux/contactsOps";
// import { selectError, selectLoading } from "../../redux/contactsSlice";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const ContactsPage = lazy(() =>
  import("../../pages/ContactsPage/ContactsPage")
);
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const RegisterPage = lazy(() =>
  import("../../pages/RegisterPage/RegisterPage")
);

export default function App() {
  // const dispatch = useDispatch();
  // const isLoading = useSelector(selectLoading);
  // const isError = useSelector(selectError);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    // <div className={css.container}>
    //   <h1 className={css.title}>Phonebook</h1>
    //   <ContactForm />
    //   <SearchBox />
    //   {isLoading && <Loader />}
    //   {isError && <Error />}
    //   <ContactList />
    // </div>
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </Layout>
  );
}
