const imgs=["first.jpg","second.jpg","third.jpg","fourth.jpg"]
const imgslider=document.querySelector(".slider")
let count=0
setInterval(() => {
    if(count>=imgs.length-1){
        count=0
    }
    imgslider.style.backgroundImage=`url("${imgs[count]}")`
    ++count
}, 2000);