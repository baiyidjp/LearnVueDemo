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

export default detailRequest
