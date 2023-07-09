import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./card.scss";
import { StyleForCardContext } from "../../App";
import { useContext } from "react";

export function Card({ name, price, foto, article, color }) {
  const dispatch = useDispatch();
  const cross = useSelector((state) => state.cross.cross);

  const { style } = useContext(StyleForCardContext);
  console.log(style.styleCard);
  let isFavorit = useSelector((state) => state.favorits);
  let colorStr = "material-symbols-outlined";
  if (isFavorit.includes(article)) {
    colorStr = "material-symbols-outlined coloredStar";
  }
  return (
    <div className={style.styleCard}>
      {cross && (
        <button
          onClick={() => {
            dispatch({ type: "DELETE_MODAL_ACTIVE" });
            dispatch({ type: "FINDE_ARTICLE", article });
            dispatch({ type: "GET_NAME_PRODUCT", name });
          }}
        >
          X
        </button>
      )}
      <img alt="foto" src={foto} className="cardFoto"></img>
      <div>
        <span>Артикул: {article}</span>
        <h4>Назва: {name}</h4>
        <p>Ціна: {price}</p>
        <p>Колір: {color}</p>
      </div>
      <div>
        <button
          className="material-symbols-outlined"
          onClick={(e) => {
            dispatch({ type: "FINDE_ARTICLE", article });
            dispatch({ type: "ADD_MODAL_ACTIVE", article });
            dispatch({ type: "GET_NAME_PRODUCT", name });
          }}
        >
          add_shopping_cart
        </button>

        {
          <button
            className={colorStr}
            onClick={() => {
              dispatch({ type: "ADD_TO_FAVORITE", article });
            }}
          >
            star
          </button>
        }
      </div>
    </div>
  );
}
