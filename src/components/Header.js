import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  function handleMenuIcon() {
    setOpen(!open);
  }

  function handleMenuItem() {
    setOpen(false);
  }

  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              <Link onClick={handleMenuItem} to="/" className="logo">
                comeTo<em>Mauritius</em>
              </Link>
              <ul
                style={{
                  display: open ? "block" : "none",
                }}
                className="nav"
              >
                <li onClick={handleMenuItem} className="scroll-to-section">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li onClick={handleMenuItem} className="scroll-to-section">
                  <NavLink to="/about">About</NavLink>
                </li>
                <li onClick={handleMenuItem} className="scroll-to-section">
                  <NavLink to="/services">Our services</NavLink>
                </li>
                <li onClick={handleMenuItem} className="scroll-to-section">
                  <Link to="/contact-us">Contact</Link>
                </li>
              </ul>
              <Link
                to="#"
                onClick={handleMenuIcon}
                className={["menu-trigger", open ? "active" : ""].join(" ")}
              >
                <span>Menu</span>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
