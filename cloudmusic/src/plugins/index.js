import { Swipe, SwipeItem,Button,SwipeCell,Popup,Notify } from 'vant';

let vantComponents=[
    Swipe, SwipeItem,Button,SwipeCell,Popup,Notify
]

export default function getVant(app){
    vantComponents.forEach(item=>{
       return app.use(item)
    })
}
