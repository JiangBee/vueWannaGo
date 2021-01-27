import axios from 'axios'

const api = {
  requestData (id) {
    return new Promise((resolve, reject) => {
      axios.get('http://39.105.39.134:3000/api/detail?id=' + id)
        .then(data => resolve(data.data.data))
        .catch(err => console.log(err))
    })
  }
}

export default api
