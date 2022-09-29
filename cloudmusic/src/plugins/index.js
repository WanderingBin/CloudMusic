import { Swipe, SwipeItem,Button,SwipeCell,Popup } from 'vant';

let vantComponents=[
    Swipe, SwipeItem,Button,SwipeCell,Popup
]

export default function getVant(app){
    vantComponents.forEach(item=>{
       return app.use(item)
    })
}
