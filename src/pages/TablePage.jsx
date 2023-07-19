import { useSelector } from "react-redux";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Table from "./Table";


export default function TablePage() {
  const { theme } = useSelector((state) => state.page);
  return (
    <div className={ theme === 'dark' && 'bg-dark' }>
      <Header />
      <NavBar active="table"/>
      <Table />
    </div>
  );
}
