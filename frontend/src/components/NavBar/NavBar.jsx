import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <ul className="navbar-brand">
        <li className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <b>My<span className="logo-span">Videos</span></b>
          </Link>
        </li>
        <li>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            {user ? (
              <button onClick={logoutUser}>Logout</button>
            ) : (
              <button onClick={() => navigate("/login")}>Login</button>
          )}
           </div>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
