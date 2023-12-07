
//Stop_watch screen 
let Stop_watch=document.querySelector('.watch>h2');
//Targetting all the given buttons Start Stop reset 
let start=document.querySelector('.btn1');
let stop=document.querySelector('.btn2');
let reset=document.querySelector('.btn3')
// adding variables accordingly to ss:mm:hh
let min=0,sec=0,hours=0;
let Stop=null;
let x=false;
//Click Event

start.addEventListener('click',()=>{
    // console.log("start")
    if(x==false){
     Stop=setInterval(Start,10);
     x=true;
    }
})
// Start function for stop watch 
function Start(){
    sec++;
    if(sec==60){
        min++;
        sec=0;
        if(min==60)
        {
            hours++;
            min=0
        }
    }
    Stop_watch.innerHTML=`${sec}:${min}:${hours}:`;
}
stop.addEventListener('click',()=>{

Stop1();
})
//Stop function for Stop watch
function Stop1(){
    if(x==true){
        clearInterval(Stop)
        x=false
    }
}
//Reset Function for stop watch
reset.addEventListener('click',()=>{
    min=0;
    sec=0;
    hours=0;

     Start();
    // Stop_watch.innerHTML=`0${hours}:${min}:${sec}`
})