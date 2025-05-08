import Home from "./Home";
import Navbar from "./Navbar";

function Header({ setSearch, basket, removeFromBasket }) {
  return (
    <>
      <Navbar setSearch={setSearch} />
      <Home removeFromBasket={removeFromBasket} basket={basket} />
    </>
  );
}

export default Header;
