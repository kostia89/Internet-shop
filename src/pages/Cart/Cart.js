import { Formik } from "formik";
import { ProductList } from "../../components/ProductList";
import { useOutletContext } from "react-router-dom";
import * as Yup from "yup";
import { OrderForm } from "../../components/orderForm/OrderForm";
import { useDispatch, useSelector } from "react-redux";
import "./orderButton.scss";

export function Cart() {
  const dispatch = useDispatch();
  const { products, cartProduct } = useOutletContext();
  const order = useSelector((state) => state.cart);
  const orderFormActive = useSelector((state) => state.orderForm.orderForm);
  const cartList = products
    .filter((product) => cartProduct.includes(product.id))
    .map((product) => ({ ...product }));
  return (
    <div className="productCartCentr">
      <ProductList products={cartList} />

      <div>
        <button
          className="orderButton"
          onClick={() => dispatch({ type: "ACTIVE_ORDER_FORM" })}
        >
          Зробити замовлення
        </button>
      </div>
      {orderFormActive && (
        <div className="orderForm">
          <div
            className="closeOrderBg"
            onClick={(e) => {
              e.stopPropagation();

              dispatch({ type: "CLOSE_ORDER_FORM" });
            }}
          ></div>
          <>
            <Formik
              initialValues={{
                name: "",
                lastName: "",
                age: "",
                adress: "",
                phone: "",
                product: order,
              }}
              validationSchema={Yup.object({
                name: Yup.string().required().max(15).min(1),
                lastName: Yup.string().required().max(15).min(1),
                age: Yup.number().required().min(16),
                adress: Yup.string().required().min(5),
                phone: Yup.string().required().min(10).max(13),
                product: Yup.array().required().min(1),
              })}
              onSubmit={(values, { setSubmitting }) => {
                console.log(values);
                dispatch({ type: "CLOSE_ORDER_FORM" });
                dispatch({ type: "CONFIRM_ORDER" });
                setSubmitting(false);
              }}
              component={OrderForm}
            />
          </>
        </div>
      )}
    </div>
  );
}
