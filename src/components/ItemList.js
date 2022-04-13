import React from "react";
import ItemDetail from "./ItemDetail";

const ItemList = ({items, addToBasket}) => {

  const itemNodes = items.map((item, index) => {
    return <ItemDetail key={index} index={index} item={item} addToBasket={addToBasket} />
  });
  
  return (
    <div id="item-list">
      <h2>Stock Items</h2>
      {itemNodes}
    </div>
  );
};

export default ItemList;
