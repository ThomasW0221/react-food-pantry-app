import React from 'react';

const InventoryItem = (props) => {
    return (
        <div>
            {props.item.foodItemName} : {props.item.foodItemQuantity}
        </div>
    )
}

export default InventoryItem;