import React from 'react';

const BasketItems = ({item, index, removeFromBasket}) => {

    const handleClick = () => {
        removeFromBasket(index);
    }


    return(
        <div className="basket-item">
            <p>{item.name} £{item.price} <button onClick={handleClick}>Remove From Basket</button></p>
        </div>
    )
}


export default BasketItems;