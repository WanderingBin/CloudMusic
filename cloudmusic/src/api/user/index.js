import request  from "../request";

export const reqGetDetail=(uid)=>request({url:`/user/detail?uid=${uid}`,method:'get'})