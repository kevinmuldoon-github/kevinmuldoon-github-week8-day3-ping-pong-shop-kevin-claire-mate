import React, { useState } from "react";
import Header from "../components/Header";
import ItemList from "../components/ItemList";
import Basket from "../components/Basket";
import UserContext from "../context/UserContext";

const PingPongContainer = () => {
  const [items, setItems] = useState([
    { name: "Ping Pong Table", price: 200, stock: 4 },
    { name: "Gold Ping Pong Bat", price: 50, stock: 3 },
    { name: "Cardboard Ping Pong Bat", price: 3, stock: 100 },
    { name: "Ping Pong Balls", price: 1, stock: 75 },
    { name: "Ping Pong Net", price: 10, stock: 8 },
    {
      name: "Commemorative Gold-Plated 'Ping Pong Max' Framed Photograph",
      price: 2000,
      stock: 1
    }
]);

  const [user, setUser] = useState({ name: "Máté" });

  const [basket, setBasket] = useState([]);

  const addToBasket = (index) => {

      if (items[index].stock>0) { // Only add to basket if in stock
      // Update Basket
      const itemToAdd = items[index];
      const newBasket = [...basket];
      newBasket.push(itemToAdd);
      setBasket(newBasket);
      //Update Item Stock Level
      const copyItems = [...items];
      copyItems[index].stock --;
      setItems(copyItems);
      }
    }

    const removeFromBasket = (index) => {
      // Update Basket
      const newBasket = [...basket];
      const itemToAdd = newBasket.splice(index,1)[0]; // remove item from basket and save as variable
      setBasket(newBasket);
      //Update Item Stock Level
      const copyItems = [...items];
      copyItems.forEach( (item) => {
        if (item.name == itemToAdd.name) { // if item name in array matches item we removed from basket
          item.stock ++;
        }
      });
      setItems(copyItems);
    };

  return (
    <div id="ping-pong">
        <Header user = {user} />
        {/* <UserContext.Provider value={{user}} > */}
            <div id="items-basket">
                <ItemList items={items} addToBasket={addToBasket}/>
                <Basket basket={basket} removeFromBasket = {removeFromBasket} />
            </div>
        {/* </UserContext.Provider> */}
    </div>
  );
};

export default PingPongContainer;
