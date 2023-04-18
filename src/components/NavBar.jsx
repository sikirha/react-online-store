import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { BsFillPencilFill } from "react-icons/bs";
// import { login, logout, onUserStateChange } from "../api/firebase";
import User from "./User";
import Button from "../ui/Button";
import { useAuthContext } from "./context/AuthContext";
import CartStatus from "./CartStatus";

export default function NavBar() {
  const { user, login, logout } = useAuthContext();

  return (
    <header className="flex p-2 font-semibold justify-between border-b border-gray-300">
      <Link to="/" className="flex items-center text-4xl text-brand">
        <FiShoppingBag />
        <h2 className="text-3xl">Shoppy</h2>
      </Link>
      <nav className="flex items-center gap-4">
        <Link to="/products">Products</Link>
        {user && (
          <Link to="/carts">
            <CartStatus></CartStatus>
          </Link>
        )}
        {user && user.isAdmin && (
          <Link to="/products/new" className="text-2xl">
            <BsFillPencilFill />
          </Link>
        )}
        {user && <User user={user} />}
        {!user && <Button text="Login" onClick={login} />}
        {user && <Button text="Logout" onClick={logout} />}
      </nav>
    </header>
  );
}
