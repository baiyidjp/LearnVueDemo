import {request} from "./request";

const homeRequest = {}

homeRequest.homeMultiData = () => {

  return request({
    url: '/home/multidata'
  })
}

export default homeRequest
