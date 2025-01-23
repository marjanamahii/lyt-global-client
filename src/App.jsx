import { Outlet } from "react-router-dom";
import "./App.css";
// import Header from "./components/Shared/Header/Header";
import Footer from "./components/Shared/Footer/Footer";
import HeaderNav from "./components/Shared/HeaderNav/HeaderNav";

function App() {
  return (
    <>
      {/* <Header></Header> */}
      <HeaderNav></HeaderNav>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default App;
