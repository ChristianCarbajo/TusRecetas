import axios from "axios";

async function ApiGetService(url){
  let response = await axios.get(url)
  return response.data
}

export default ApiGetService;