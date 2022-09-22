import request from "../request";

//获取歌单详情
export const reqGetMusicListItem = (id) => request({ url: `/playlist/detail?id=${id}`, method: 'GET' })
//获取歌单的歌曲
export const reqGetMusicListSongs = (id,limit=30,offset=0) => request({ url: `/playlist/track/all?id=${id}&limit=${limit}&offset=${offset}`, method: 'GET' })

