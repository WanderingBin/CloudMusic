import { Swipe, SwipeItem,Button } from 'vant';

let vantComponents=[
    Swipe, SwipeItem,Button
]

export default function getVant(app){
    vantComponents.forEach(item=>{
       return app.use(item)
    })
}
