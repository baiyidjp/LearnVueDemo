import {request} from "./request";

const detailRequest = {}

detailRequest.goodsDetail = (iid) => {
  return request({
    url: '/detail',
    params: {
      iid: iid
    }
  })
}

detailRequest.goodsDetailRecommend = () => {
  return request({
    url: '/recommend'
  })
}

export default detailRequest
