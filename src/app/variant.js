  export const fadeIn = (direction,delay)=>{
      let distance = 10;
return{
    hidden:{
        y : direction ==='up'? distance :direction==='down'? -distance:0,
        x : direction ==='left'? distance :direction==='right'? -distance:0,
        opacity:0
    },
    show:{
        y:0,
        x:0,
        opacity:1,
        transition:{
            type:'tween',
            duration:1,
            delay: delay,
            ease :[0.42,0.,0.58,1],
        }
    }
}
 }
