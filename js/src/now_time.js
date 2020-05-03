function getTime(){
    var time = new Date();
    var hours = time.getHours();
    var week = time.getDay();
    var helloText = "";
    // console.log(hours);
    if(hours>=0&&hours<3){
        helloText = "早点休息，身体是革命的本钱啊！";
    }else if(hours>=3&&hours<5){
        helloText = "还没睡呢？还是已经醒了？";
    }else if(hours>=5&&hours<7){
        helloText = "清晨好！这么早就来网站啦，谢谢关注！";
    }else if(hours>=7&&hours<8){
        helloText = "早上好呀，一天之际在于晨，又是美好的一天！";
    }else if(hours>=8&&hours<9){
        helloText = "新的一天又开始了，祝你过得快乐!";
    }else if(hours>=9&&hours<11){
        helloText = "小伙伴，上午好！";
    }else if(hours>=11&&hours<12){
        helloText = "马上该吃午饭啦！有什么好吃的？";
    }else if(hours>=12&&hours<13){
        helloText = "中午好！你没有午休的习惯吗？";
    }else if(hours>=13&&hours<18){
        helloText = "下午好！外面的天气好吗？";
    }else if(hours>=18&&hours<19){
        helloText = "傍晚好！今天的心情怎么样？";
    }else if(hours>=19&&hours<22){
        helloText = "晚上好！忙碌了一天，累了吧？";
    }else if(hours>=22&&hours<23){
        helloText = "还在上网？早点洗洗睡吧!";
    }else if(hours=23){
        helloText = "夜深了，还没睡呀？";
    }else{
        helloText = "";
    }
    // document.getElementById('hello').innerHTML = helloText;
    document.getElementsByClassName('header-banner-info__subtitle')[0].innerHTML = helloText;
    var bannerDom = document.getElementsByClassName('header-banner')[0];
    // console.log(week);
    bannerDom.style.background = 'url(/images/own/banner/banner'+week+'.jpg';
}
// window.onload = function(){
//     getTime();
// }
window.addEventListener('DOMContentLoaded',getTime);