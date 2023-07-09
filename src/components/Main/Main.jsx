import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Button } from "../../Butoon/Button";
import { Modal } from "../Modal/Modal";
import { Header } from "../Heder/Header";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/thunks";

export function Main() {
  const products = useSelector((state) => state.products.products);
  const modalActive = useSelector((state) => state.modalActive.modalActive);
  const deleteModalActive = useSelector(
    (state) => state.deleteModalActive.deleteModalActive
  );

  const article = useSelector((state) => state.checArticle.findeArticle);

  const cartProduct = useSelector((state) => state.cart);
  const productName = useSelector((state) => state.productName.productName);

  const favorits = useSelector((state) => state.favorits);
  let location = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    if (location.pathname === "/Cart") {
      dispatch({ type: "LOCATION_CART_ACTIV" });
    } else {
      dispatch({ type: "LOCATION_CART_CLOSE" });
    }
  }, [location, dispatch]);

  useEffect(() => {
    localStorage.setItem("favorits", favorits);
  }, [favorits]);

  useEffect(() => {
    localStorage.setItem("cart", cartProduct);
  }, [cartProduct]);

  const onClose = () => {
    dispatch({ type: "DELETE_MODAL_CLOSE" });
    dispatch({ type: "ADD_MODAL_CLOSE" });
  };

  return (
    <div className="App">
      <Header cartProduct={cartProduct} favoriteGoods={favorits} />

      <Outlet
        context={{
          products,
          cartProduct,
        }}
      ></Outlet>

      {modalActive && (
        <Modal
          onClose={onClose}
          header={"Ви хочете додати цей товар?"}
          text={productName}
          actions={
            <>
              {
                <div className="btnModalBloc">
                  <Button
                    className="btnMod"
                    text="Ok"
                    hendleClick={() => {
                      dispatch({ type: "ADD_MODAL_CLOSE" });
                      dispatch({ type: "ADD_TO_CART", article });
                    }}
                  />
                  <Button
                    className="btnMod"
                    text="Cancel"
                    hendleClick={() => {
                      dispatch({ type: "ADD_MODAL_CLOSE" });
                    }}
                  />
                </div>
              }
            </>
          }
        />
      )}

      {deleteModalActive && (
        <Modal
          onClose={onClose}
          header="Ви хочете видалити цей товар?"
          text={productName}
          actions={
            <>
              <div className="btnModalBloc">
                <Button
                  className="btnMod2"
                  text="Ok"
                  hendleClick={() => {
                    dispatch({ type: "DELETE_FROM_CART", article });
                    dispatch({ type: "DELETE_MODAL_CLOSE" });
                  }}
                />
                <Button
                  className="btnMod2"
                  text="Cancel"
                  hendleClick={() => {
                    dispatch({ type: "DELETE_MODAL_CLOSE" });
                  }}
                />
              </div>
            </>
          }
        />
      )}
    </div>
  );
}
