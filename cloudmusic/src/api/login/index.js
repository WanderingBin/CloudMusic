import request  from "../request";

export const reqGetSent=(phone)=>request({url:`/captcha/sent?phone=${phone}`,method:'get'})
export const reqVerify=({phone,captcha})=>request({url:`/captcha/verify?phone=${phone}&captcha=${captcha}`,method:'get'})
export const reqLogin=({phone,captcha})=>request({url:`/login/cellphone?phone=${phone}&captcha=${captcha}`,method:'get'})

