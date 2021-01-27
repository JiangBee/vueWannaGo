import axios from 'axios'

const api = {
  requestList () {
    return new Promise((resolve, reject) => {
      // axios.get('https://www.daxunxun.com/douban')
      axios.get('http://39.105.39.134:3000/api/city')
        .then(data => resolve(data.data))
        .catch(err => reject(err))
    })
  }
}

export default api
