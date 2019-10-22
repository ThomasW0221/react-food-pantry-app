import React from 'react';
import InventoryFormRow from './InventoryFormRow'

class InventoryForm extends React.Component {

    state = { numberOfRows: 1}

    addRow = () => {
        let newRowCount = this.state.numberOfRows + 1
        this.setState({numberOfRows: newRowCount})        
    }

    removeRow = () => {
        let newRowCount = this.state.numberOfRows - 1
        this.setState({numberOfRows: newRowCount}) 
    }

    createRows = () => {
        let rows = []
        for(let i = 0; i < this.state.numberOfRows; i++){
            rows.push(<InventoryFormRow key={i}/>)
        }
        return rows
    }

    render() {
        let rows = this.createRows()
        return (
            <div className="container">
                <div className="row mt-2 mb-2 justify-content-center">
                        <button type="button" className="btn btn-success ml-1 mr-1" onClick={this.addRow}>Add Row</button>
                        <button type="button" className="btn btn-danger ml-1 mr-1" onClick={this.removeRow}>Remove Row</button>
                </div>
                 <form>
                    <div className="row">
                        <div className="col">
                            {rows}
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <button type="submit" className="btn btn-primary mb-2">Submit</button>
                    </div>
                </form>
            </div>
           
        )
    }
}

export default InventoryForm