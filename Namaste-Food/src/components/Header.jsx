import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext)

  // Subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="logo-container">
          <img className="h-14 w-auto" src={LOGO_URL} alt="Logo" />
        </div>

        {/* Navigation */}
        <nav className="nav-items">
          <ul className="flex items-center space-x-8 text-gray-700 font-medium">
            <li>Online Status: { onlineStatus ? "🟢" : "🔴" }</li>
            <li className="hover:text-black cursor-pointer transition duration-200">
             <Link to="/">Home</Link>
            </li>
            <li className="hover:text-black cursor-pointer transition duration-200">
               <Link to="/about">About Us</Link>
            </li>
            <li className="hover:text-black cursor-pointer transition duration-200">
               <Link to="/contact">Contact Us</Link>
            </li>
            <li className="hover:text-black cursor-pointer transition duration-200">
               <Link to="/grocery">Grocery</Link>
            </li>
            <li className="hover:text-black cursor-pointer transition duration-200">
            Cart- ({cartItems.length} items)
            </li>
            <button
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
              }}
              className="px-4 py-2 bg-orange-500 text-white font-semibold rounded-xl"
            >
              {btnName}
            </button>
             <li className="hover:text-black cursor-pointer transition duration-200">
              { loggedInUser }
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
