import { reqGetLyric } from "@/api/musicList/musicItem";
import { createStore } from "vuex";

export default createStore({
  state: {
    playlist:[{
      name:"起风了",
      al:{
          // 播放列表默认
          id: 74715426,
          name: "起风了",
          pic: 109951163699673360,
          picUrl: "https://p2.music.126.net/diGAyEmpymX8G7JcnElncQ==/109951163699673355.jpg"
      },
      id:1330348068,
      ar:[{
        id:12085562,
        name:'买辣椒也用券'
    }],
    }],
    arIndex:0,
    playlistIndex:0,//默认下标
    // 是否播放音乐
    isbtnshow:true,
    // 弹出层
    detailShow:false,
    // 歌词
    lyricList:{},
    // 当前播放时间
    currentTime:0,
    // 总时长
    duration:0
  },
  getters: {
  },
  mutations: {
    // 更新暂停按钮
    updateIsBtnShow:(state,value)=>{
       state.isbtnshow=value
    },
    // 更新歌曲列表
    updatePlaylist:(state,value)=>{
      state.playlist=value
    },
    // 更新歌曲列表下标
    updatePlaylistIndex:(state,value)=>{
      state.playlistIndex=value
    },
    //更新演唱者
    updateAr:(state,value)=>{
      state.ar=value
    },
    // 更新弹出歌词详情层
    updateDetailShow:(state)=>{
      state.detailShow=!state.detailShow
    },
    // 更改歌词
    updateLyricList:(state,value)=>{
      state.lyricList=value
    },
    //更新当前播放时间
    updateCurrentTime:(state,value)=>{
       state.currentTime=value
    },
    //更新播放总时长
    updateDuration:(state,value)=>{
      state.duration=value
    }
  },
  actions: {
    getLyric:async (context,value)=>{
       let res=await reqGetLyric(value)
       context.commit("updateLyricList",res.data.lrc)
    }
  },
})
