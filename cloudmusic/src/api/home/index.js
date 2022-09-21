import request from "../request";

// 获取轮播列表
export const reqGetBannerList = () => request({ url: '/banner?type=2', method: 'GET' })
// 获取推荐歌单
export const reqGetMusicList = () => request({ url: '/personalized?limit=6', method: 'GET' })

