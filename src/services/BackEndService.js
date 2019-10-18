import axios from 'axios';

class BackEndService {

    rootURL = "https://jamil-niner-foodpantry-api.herokuapp.com"

    getAllInventoryItems = async () => {
        const response = await axios.get(`${this.rootURL}/inventory`)
        console.log("response: ", response.data)
        return response.data
    }

}

export default BackEndService