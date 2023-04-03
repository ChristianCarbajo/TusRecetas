import axios from "axios";

async function ApiGetbyIdService(url, id){
  let response = await axios.get(url + `/${id}`)
  return response.data
}

export default ApiGetbyIdService;