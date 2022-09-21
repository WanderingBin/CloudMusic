import request from "../request";

//获取歌单详情
export const reqGetMusicListItem = (id) => request({ url: `/playlist/detail?id=${id}`, method: 'GET' })

