import axios from 'axios'

const api = {
  requestList (brand) {
    return new Promise((resolve, reject) => {
      // axios.get('https://www.daxunxun.com/douban')
      axios.get('http://39.105.39.134:3000/api/product/search?brand=' + brand)
        .then(data => resolve(data.data))
        .catch(err => reject(err))
    })
  }
}

export default api
