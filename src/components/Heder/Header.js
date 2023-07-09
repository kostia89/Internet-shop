import React from "react";
import { Logo } from "../Logo/Logo";
import { Navbar } from "../Navbar/Navbar";
import "./header.scss";

export function Header({ favoriteGoods, cartProduct }) {
  return (
    <div className="heder-wraper">
      <div className="header">
        <Logo />
        <Navbar cartProduct={cartProduct} favoriteGoods={favoriteGoods} />
      </div>
    </div>
  );
}
