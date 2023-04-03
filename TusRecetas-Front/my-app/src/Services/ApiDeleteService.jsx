import axios from "axios";
import { useNavigate } from "react-router-dom";

async function ApiDeleteService(url, id) {
    try {
        await axios.delete(url + `/delete/${id}`)
    } catch (error) {
        console.log(error)
    }
}

export default ApiDeleteService;