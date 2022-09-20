import request from "./request";

export const reqGetBannerList = () => request({ url: '/banner?type=2', method: 'GET' })

