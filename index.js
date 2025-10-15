const start =document.getElementById('start')
const pause = document.getElementById('pause')
const Reset =document.getElementById('Reset')

const time= document.querySelector(".time")

start.addEventListener('click',()=>{
    let second=0
    let minute =0
    let hour=0
    clearinterval =setInterval(()=>{
        second++
        if(second==60){
            second=0
            minute++
            if(minute==60){
                minute=0
                hour++
            }
        }
        if (second < 10) {
            second="0"+second
        }
        
        time.textContent=`${hour}:${minute}:${second}`
    },1000)
})

pause.addEventListener('click',()=>{
    clearInterval(clearinterval)
})
Reset.addEventListener('click',()=>{
    time.textContent=`00:00:00`
})
