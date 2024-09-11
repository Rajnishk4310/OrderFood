import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnelineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnLogin, setBtnLogin] = useState("Login");
  const onlineStatus = useOnelineStatus();
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="flex justify-between items-center p-4 bg-slate-200 shadow-xl">
      {/* Logo and Title Section */}
      <div className="flex items-center">
        <img className="w-16 h-16 mx-3" alt="Logo" src={LOGO_URL} />
        <h1 className="text-2xl font-bold text-[#ad1017]">Order Food</h1>
      </div>

      {/* Navigation Menu */}
      <div>
        <ul className="flex items-center gap-6 text-gray-700">
          <li className="text-xl font-semibold">
            Online Status: {onlineStatus === true ? "✅" : "🔴"}
          </li>
          <li>
            <Link
              to="/"
              className="hover:text-[#ad1017] font-bold transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-[#ad1017] font-bold transition-colors duration-200"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-[#ad1017] font-bold transition-colors duration-200"
            >
              Contact Us
            </Link>
          </li>
          <li className="hover:text-[#ad1017] font-bold transition-colors duration-200">
            Offer
          </li>
          <li className="hover:text-[#ad1017] font-bold transition-colors duration-200">
            Discount
          </li>
          <li className="hover:text-[#ad1017] font-bold transition-colors duration-200">
            Policy
          </li>
          <li className="hover:text-[#ad1017] font-bold transition-colors duration-200">
            Help
          </li>
          <li className="hover:text-[#ad1017] font-bold transition-colors duration-200">
            Cart
          </li>
          <li
            onClick={() => {
              btnLogin === "Login"
                ? setBtnLogin("Logout")
                : setBtnLogin("Login");
            }}
            className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-[#ad1017] transition-colors duration-200"
          >
            {btnLogin}
          </li>
          <li className="font-bold">Welcome {loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
