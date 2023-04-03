import axios from "axios"


async function ApiPutService(url, item, id) {
  try {
    await axios.put(url + '/update/' + id, item)
  } catch (error) {
    console.log(error)
  }
}

export default ApiPutService