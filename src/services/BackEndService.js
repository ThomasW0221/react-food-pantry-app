import axios from 'axios';

class BackEndService {

    rootURL = "https://jamil-niner-foodpantry-api.herokuapp.com"
    inventoryEndpoint = "inventory"

    getAllInventoryItems = () => {
        let data=  axios.get(`${this.rootURL}/${this.inventoryEndpoint}`).then((response) => {
            return response.data
        })

        return data
    }

    getInventoryItemsByName = async (itemName) => {
        let response
        try {
            response = await axios.get(`${this.rootURL}/${this.inventoryEndpoint}`, {
                params: {
                    itemName: itemName
                }
            })
        } catch (error) {
            response = 404
        }

        return response
    }

}

export default BackEndService