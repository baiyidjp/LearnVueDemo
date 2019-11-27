import {request} from "./request";

const homeRequest = {}

homeRequest.homeMultiData = () => {
  return request({
    url: '/home/multidata'
  })
}

homeRequest.homeGoodsData = (type, page) => {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}

export default homeRequest
