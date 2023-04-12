import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { BsFillPencilFill } from "react-icons/bs";

export default function NavBar() {
  return (
    <header>
      <Link to="/">
        <FiShoppingBag />
        <h2>Shoppy</h2>
      </Link>
      <nav>
        <Link to="/products">Products</Link>
        <Link to="/carts">Carts</Link>
        <Link to="/products/new">
          <BsFillPencilFill />
        </Link>
        <button>Login</button>
      </nav>
    </header>
  );
}
