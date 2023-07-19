import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Table from "./Table";


export default function TablePage() {
  return (
    <>
      <Header />
      <NavBar active="table"/>
      <Table />
    </>
  );
}
