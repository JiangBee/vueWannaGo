import apicookie from '@/api/goods/Cookie.js'

const api = {
  requestdata () {
    let goodlist = []
    goodlist = JSON.parse(apicookie.getCookie('goodlist'))
    return new Promise((resolve, reject) => {
      resolve(goodlist)
    })
  }
}

export default api
