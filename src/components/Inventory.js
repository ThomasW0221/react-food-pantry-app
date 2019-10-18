import React from 'react';
import BackEndService from '../services/BackEndService'
import InventoryItem from './InventoryItem'

export default class Inventory extends React.Component {

    state = { InventoryItems:[] }

    service = new BackEndService()

    initializeData = async () => {
        let response = await this.service.getAllInventoryItems()

        this.setState({InventoryItems: response})
    }

    componentDidMount() {
        this.initializeData()
    }

    render() {
        const itemList = this.state.InventoryItems
        const renderedItemList = itemList.map((item) => {
            return (
                <InventoryItem item={item} />
            )
        })

        return (
            <div>
                {renderedItemList}
            </div>
            
        )
    }
}
