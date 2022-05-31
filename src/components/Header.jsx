import React, { useState, useContext } from "react";
import ThemeContext from "./ThemeContext";
import { Link } from "react-router-dom";

const Header = (props) => {
  const [darkMode, setDarkMode] = useState(false);
  const color = useContext(ThemeContext);
  const handleClick = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <div className="Header">
        <h1 className="Header-title">
          <Link to="/home">PlatziConf Merch</Link>
          <li>
            <a href="/contacto">UseState</a>
          </li>
          <li>
            <a href="/useRef">useref</a>
          </li>
          <li>
            <a href="/useEffect">useEffect</a>
          </li>
        </h1>

        <h1 className="Header-title">
          <Link to="/checkout">Checkout</Link>
        </h1>
        <h1 style={{ color }}>ReactHooks {props.saludo}</h1>
        <h3>{props.children}</h3>

        <button type="button" className="" onClick={handleClick}>
          {darkMode ? "Dark Mode" : "Light mode"}
        </button>

        <button
          type="button"
          className=""
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "Dark Mode2" : "Light mode2"}
        </button>
      </div>
    </div>
  );
};

export default Header;
