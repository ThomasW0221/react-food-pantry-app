import React from 'react';

const InventoryFormRow = () => {
    return (
        <div className="form-group">
            <div className="form-row">
                <div className="col">
                    <label className="sr-only" htmlFor="foodItemName">Food Item Name</label>
                    <input type="text" className="form-control mb-2 mr-sm-2" id="foodItemName" placeholder="Food Item Name"></input>
                </div>
                
                <div className="col">
                    <label className="sr-only" htmlFor="foodItemName">Food Item Quantity</label>
                    <input type="text" className="form-control mb-2 mr-sm-2" id="foodItemQuantity" placeholder="Food Item Quantity"></input>
                </div>
                
            </div>
            
        </div>
    )
}

export default InventoryFormRow