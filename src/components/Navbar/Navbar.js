import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.scss";
import { StyleForCardContext, styleForCard } from "../../App";

export function Navbar({ favoriteGoods, cartProduct }) {
  const { style, setStyle } = useContext(StyleForCardContext);
  // console.log(style);
  return (
    <div className="navbar">
      <button
        onClick={() => {
          if (style === styleForCard.cards) {
            setStyle(styleForCard.list);
          }
          if (style === styleForCard.list) {
            setStyle(styleForCard.cards);
          }

          console.log(style);
        }}
      >
        Змінити вигляд
      </button>

      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active-link" : undefined)}
      >
        Home
      </NavLink>

      <NavLink
        to="/Cart"
        className={({ isActive }) => (isActive ? "active-link" : undefined)}
      >
        <div className="caunter-wraper">
          <span className="material-symbols-outlined">shopping_cart</span>

          {cartProduct.length > 0 ? (
            <p className="caunter">{cartProduct.length}</p>
          ) : (
            false
          )}
        </div>
      </NavLink>

      <NavLink
        to="/favorites"
        className={({ isActive }) => (isActive ? "active-link" : undefined)}
      >
        <div className="caunter-wraper">
          <span className="material-symbols-outlined">star</span>

          {favoriteGoods.length > 0 ? (
            <p className="caunter">{favoriteGoods.length}</p>
          ) : (
            false
          )}
        </div>
      </NavLink>
    </div>
  );
}
