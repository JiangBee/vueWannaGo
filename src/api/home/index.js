import axios from 'axios'

const api = {
  requestList () {
    return new Promise((resolve, reject) => {
      // axios.get('https://www.daxunxun.com/douban')
      axios.get('http://39.105.39.134:3000/api/product?pageCode=1&pageNumber=20')
        .then(data => resolve(data.data))
        .catch(err => reject(err))
    })
  },
  requestBanner () {
    return new Promise((resolve, reject) => {
      axios.get('http://39.105.39.134:3000/api/banner')
        .then(data => resolve(data.data))
        .catch(err => console.log(err))
    })
  },
  loadmore (pageCode) {
    return new Promise((resolve, reject) => {
      // axios.get('https://www.daxunxun.com/douban')
      axios.get('http://39.105.39.134:3000/api/product?pageCode=' + pageCode + '&pageNumber=20')
        .then(data => resolve(data.data))
        .catch(err => reject(err))
    })
  }
}

export default api
