import { ErrorMessage, Field, Form } from "formik";
import { useDispatch } from "react-redux";
import { OrderInput } from "./OrderInput";

export function OrderForm(props) {
  const dispatch = useDispatch();
  return (
    <div className="orderFormWraper">
      <span
        className="closeForm"
        onClick={() => {
          dispatch({ type: "CLOSE_ORDER_FORM" });
        }}
      >
        X
      </span>
      <Form>
        <Field name="name" type="text" label="Ім'я" component={OrderInput} />
        <ErrorMessage name="name" />

        <Field
          name="lastName"
          type="text"
          label="Прізвище"
          component={OrderInput}
        />
        <ErrorMessage name="lastName" />

        <Field name="age" type="number" label="Вік" component={OrderInput} />
        <ErrorMessage name="age" />

        <Field
          name="adress"
          type="text"
          label="Адреса доставки"
          component={OrderInput}
        />
        <ErrorMessage name="adress" />

        <Field
          name="phone"
          type="text"
          label="Телефон"
          component={OrderInput}
        />
        <ErrorMessage name="phone" />
        <div></div>
        <ErrorMessage name="product" />

        <button type="submit" disabled={props.isSabmiting} className="btnForm">
          Відправити замовлення
        </button>
      </Form>
    </div>
  );
}
