import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">Кредиты</li>
        <li className="nav-item">Депозиты</li>
        <li className="nav-item">Банковские карты</li>
        <li className="nav-item">Денежные переводы</li>
      </ul>
    </nav>
  );
}

export default NavBar;
