import React from "react";
import BasketItems from "./BasketItems";

const Basket = ({basket, removeFromBasket }) => {

  let basketTotal=0;

  const basketItemNodes = basket.map((item, index) => {

    basketTotal+=item.price;
      return (
        <BasketItems key={index} index={index} item={item} removeFromBasket={removeFromBasket} />
      );
  })

  return (
    <div id="basket">
      <h2>Your shopping basket</h2>
      {basketItemNodes}
      <h3>Basket Total: £{basketTotal}</h3>
    </div>
  );
};

export default Basket;
