import { useSelector } from "react-redux";
import Header from "../components/Header";
import Form from "../components/Form";
import NavBar from "../components/NavBar";
import { useEffect, useRef } from "react";

const FormPage = () => {
  const { theme } = useSelector((state) => state.page);
  const divmMain = useRef(null);

  useEffect(() => {
    const headerHeight = 90;
    const scrollPosition = divmMain.current.offsetTop - headerHeight;
    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth',
    });
  }, []);

  return (
    <div className={ theme === 'dark' && 'bg-dark' } ref={divmMain}>
      <Header />
      <NavBar active="form"/>
      <Form />
    </div>
  );
};

export default FormPage;

