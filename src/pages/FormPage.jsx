import { useSelector } from "react-redux";
import Header from "../components/Header";
import Form from "../components/Form";
import NavBar from "../components/NavBar";

const FormPage = () => {
  const { theme } = useSelector((state) => state.page);
  return (
    <div className={ theme === 'dark' && 'bg-dark' }>
      <Header />
      <NavBar active="form"/>
      <Form />
    </div>
  );
};

export default FormPage;

