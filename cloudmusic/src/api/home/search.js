
import request from "../request";

// 获取搜索结果
export const reqGetSearchList = (keywords) => request({ url: `/search?keywords=${keywords}`, method: 'GET' })