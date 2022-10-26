import axios from "axios"

axios.defaults.baseURL = "https://jsonpla2ceholder.typicode.com/"

const httpService = {
    get: axios.get,
}

export default httpService
