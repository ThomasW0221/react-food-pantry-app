import React from 'react';
import BackEndService from '../services/BackEndService'

export default class Inventory extends React.Component {

    state = { InventoryItems: [], searchTerm: '' }

    service = new BackEndService()

    initializeData = async () => {
        let response = await this.service.getAllInventoryItems()

        this.setState({InventoryItems: response})
    }

    searchByName = async (event, itemName) => {
        event.preventDefault()
        if (itemName === '') {
            this.initializeData()
            return
        }

        let response = await this.service.getInventoryItemsByName(itemName)
        let itemList = []
        if(response === 404){
            itemList.push({foodItemName: "We don't currently have that item", foodItemQuantity:null})
            this.setState({InventoryItems: itemList})
            return
        }
        
        itemList.push(response.data)
        this.setState({InventoryItems: itemList})
    }

    onInputChange = (event) => {
        this.setState({searchTerm: event.target.value})
    }

    componentDidMount() {
        this.initializeData()
    }

    render() {
        
        return (
            <div className="container">
                <div className="row" style={{display: 'flex', justifyContent: 'center'}}>
                    <div className="col-xs-12 center-block text-center">
                        <form className="form-inline" onSubmit={(e) => this.searchByName(e, this.state.searchTerm)}>
                            <div className="form-group m-2">
                                <input type="text" className="form-control" id="itemName" placeholder="search an item here" value={this.state.searchTerm} onChange={this.onInputChange}/>
                            </div>
                            <button type="submit" className="btn btn-primary mb-2">Search</button>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Item Name</th>
                                <th scope="col">Item Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                           {
                                this.state.InventoryItems.map((item) => (
                                    <tr key={item.foodItemName}>
                                        {
                                            <td>
                                                {item.foodItemName}
                                            </td> 
                                        }
                                        {
                                            <td>
                                                {item.foodItemQuantity}
                                            </td>
                                        }
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
                
        )
    }
}
