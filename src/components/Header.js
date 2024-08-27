import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnelineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnLogin, setBtnLogin] = useState("Login");
  const onlineStatus = useOnelineStatus();

  return (
    <div className="nav">
      <div className="logo">
        <img alt="Logo" src={LOGO_URL} />
        <h1>Order Food</h1>
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status: {onlineStatus===true?"✅":"🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Offer</li>
          <li>Discount</li>
          <li>Policy</li>
          <li>Help</li>
          <li>Cart</li>
          <li
            onClick={() => {
              btnLogin === "Login"
                ? setBtnLogin("Logout")
                : setBtnLogin("Login");
            }}
          >
            {btnLogin}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
