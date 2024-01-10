function start(key,value1){
    const padKey=document.getElementById(`${key}`);
    const vol=document.querySelector('input');
    const a=document.getElementsByClassName('value');
    a[0].innerText=value1;
    const blueBox=document.querySelector('#power-box');
    if(blueBox.style.float=='left'){
        padKey.volume=0;
    }else{
        padKey.volume=vol.value/100.0;
    }
    padKey.play();
}
function valueChanger(){
    const vol=document.querySelector('input');
    const a=document.getElementsByClassName('value');
    a[0].innerText=`Volume : ${vol.value}`;
}
function posPower(){
    const blueBox=document.querySelector('#power-box');
    if(blueBox.style.float=='left'){
        blueBox.style.float='right';
    }else{
        blueBox.style.float='left';
    }
    return blueBox.style.float;
}
function posBank(){
    const blueBox=document.querySelector('#bank-box');
    if(blueBox.style.float=='left'){
        blueBox.style.float='right';
    }else{
        blueBox.style.float='left';
    }
}
document.addEventListener('keypress',(e)=>{
    const keyArray=['Q','W','E','A','S','D','Z','X','C'];
    const val=keyArray.find((k)=>{
        if(e.key.toUpperCase()==k){
            return true;
        }else{
            return false;
        }
    })
    const b=document.querySelector(`#${e.key.toUpperCase()}`);
    if(val){
        start(e.key.toUpperCase(),b.dataset.details);
    }
})
let size=screen.width;
if(size<650){
    const a=document.querySelector('.section');
    a.style.display='None';
    const b=document.querySelector('.rotater');
    b.style.display='flex';
    document.querySelector('body').style.backgroundColor='#fff';
    setInterval(()=>{
        const mobile=document.getElementById('mobile');
        if(mobile.style.rotate=='90deg'){
            mobile.style.rotate='0deg';
        }else{
            mobile.style.rotate='90deg';
        }
        console.log(mobile.style);
    },1000)
}else{
    const a=document.querySelector('.rotater');
    a.style.display='None';
}
