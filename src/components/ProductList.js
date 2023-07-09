import { Card } from "./Card/Card";
import { StyleForCardContext } from "../App";
import { useContext } from "react";

export function ProductList({ products }) {
  const { style } = useContext(StyleForCardContext);
  return (
    // "goodsWraper"
    <div className={style.class}>
      {products.map((card) => (
        <Card
          key={card.id}
          name={card.name}
          price={card.price}
          foto={card.img_url}
          article={card.id}
          color={card.color}
        />
      ))}
    </div>
  );
}
