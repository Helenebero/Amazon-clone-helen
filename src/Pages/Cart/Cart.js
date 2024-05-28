import React, { useContext } from "react";
import Classes from "./Cart.module.css";
import Layout from "../../Components/Layout/Layout";
import { DataContext } from "../../Components/DataProvider/Dataprovider";
import Productcard from "../../Components/Product/Productcard";
import CurrencyFormat from "../../Components/currencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";
import { Type } from "../../utility/Action.type";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

function Cart() {
  const [{ basket, User }, dispatch] = useContext(DataContext);
  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);
  console.log(total);
  const increment = (item) => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item,
    });
  };
  const decrement = (id) => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      id,
    });
  };
  return (
    <Layout>
      <section className={Classes.container}>
        <div className={Classes.cart_container}>
          <h3>Your shopping basket </h3>
          <hr />
          {basket?.length == 0 ? (
            <p>opps ! No item in your cart</p>
          ) : (
            basket?.map((item, i) => {
              return (
                <section className={Classes.cart_product}>
                  <Productcard
                    key={i}
                    Product={item}
                    renderDesc={true}
                    renderAdd={false}
                    flex={true}
                  />
                  <div className={Classes.btn_container}>
                    <button
                      className={Classes.bth}
                      onClick={() => increment(item)}
                    >
                      <IoIosArrowUp size={20} />
                    </button>
                    <span>{item.amount}</span>
                    <button
                      className={Classes.bth}
                      onClick={() => decrement(item.id)}
                    >
                      <IoIosArrowDown size={20} />
                    </button>
                  </div>
                </section>
              );
            })
          )}
        </div>
        {basket?.length !== 0 && (
          <div ClassName={Classes.subtotal}>
            <div>
              <p>Subtotal ({basket?.length}item) </p>
              <CurrencyFormat amount={total} />
            </div>
            <span>
              <input type="checkbox" />
              <small>This order contains a gift</small>
            </span>
            <Link to="/Payments"> Continue to Checkoout</Link>
          </div>
        )}
      </section>
    </Layout>
  );
}

export default Cart;
