import Home from "./Home";
import Navbar from "./Navbar";

function Header({ setSearch }) {
  return (
    <>
      <Navbar setSearch={setSearch} />
      <Home />
    </>
  );
}

export default Header;
