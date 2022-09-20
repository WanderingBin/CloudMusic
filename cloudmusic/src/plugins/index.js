import { Swipe, SwipeItem,Button,SwipeCell } from 'vant';

let vantComponents=[
    Swipe, SwipeItem,Button,SwipeCell
]

export default function getVant(app){
    vantComponents.forEach(item=>{
       return app.use(item)
    })
}
