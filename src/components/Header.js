import React from "react";
import "../App.scss";

function Header() {

  return (
    <header className="header bg-gray py-2">
      <div className="container">
        <div className="logo d-flex justify-content-center align-items-center">
          <span>診所LOGO</span>
          <h1>看診預約自助報到</h1>
        </div>
      </div>
    </header>
  );
}

export default Header;