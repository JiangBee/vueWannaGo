import axios from 'axios'

const api = {
  requestList () {
    return new Promise((resolve, reject) => {
      // axios.get('https://www.daxunxun.com/douban')
      axios.get('http://39.105.39.134:3000/api/product?pageCode=1&pageNumber=40')
        .then(data => resolve(data.data))
        .catch(err => reject(err))
    })
  },
  brandList () {
    return new Promise((resolve, reject) => {
      axios.get('http://39.105.39.134:3000/api/product/distinct')
        .then(data => resolve(data))
        .catch(err => console.log(err))
    })
  }
}

export default api
