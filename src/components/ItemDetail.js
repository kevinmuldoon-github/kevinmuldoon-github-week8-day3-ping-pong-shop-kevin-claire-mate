import React from "react";

const ItemDetail = ({index, item, addToBasket}) => {

    const handleClick = () => {
        addToBasket(index);
    }

    return(
        <>
            <p>Name: {item.name}</p>
            <p>Price: £{item.price}</p>
            <p>Stock: {item.stock}</p>
            <button onClick={handleClick}>Add to basket</button>
            <br/>
        </>

    );


};

export default ItemDetail;
