
function getServerDate(){
    var xhr = null;
    if(window.XMLHttpRequest){
        xhr = new window.XMLHttpRequest();
    }else{ // ie
        xhr = new ActiveObject("Microsoft")
    }

    xhr.open("GET","/",true);
    xhr.send(null);
    xhr.onreadystatechange=function(){
        var time,date;
        if(xhr.readyState == 2){
            time = xhr.getResponseHeader("Date");
            date = new Date(time);
            // console.log(date);
            var todayYear = date.getFullYear();
            var todayMonth = date.getMonth()+1;
            var todayDay = date.getDate();
            var todayWeek = date.getDay();
            var todayHours = date.getHours();
            var days = 1000*60*60*24;
            var tWeek = "";
            var helloText = "";
            if(todayHours>=5&&todayHours<9){
                helloText = "早上好！";
            }else if(todayHours>=9&&todayHours<12){
                helloText = "上午好！";
            }else if(todayHours>=12&&todayHours<13){
                helloText = "中午好！";
            }else if(todayHours>=13&&todayHours<19){
                helloText = "下午好！";
            }else if(todayHours>=19&&todayHours<23){
                helloText = "晚上好！";
            }else if(todayHours=23){
                helloText = "夜深了，还没睡呀！";
            }else if(todayHours>=0&&todayHours<5){
                helloText = "深夜！";
            }else{
                helloText = "";
            }
            if(todayMonth<10){
                todayMonth = '0'+todayMonth;
            }
            if(todayDay<10){
                todayDay = '0'+todayDay;
            }
            switch (todayWeek) {
                case 0:
                    tWeek = "星期日";
                        break;
                case 1:
                    tWeek = "星期一";                        
                        break;
                case 2:
                    tWeek = "星期二";
                        break;
                case 3:
                    tWeek = "星期三";
                        break;
                case 4:
                    tWeek = "星期四";
                        break;
                case 5:
                    tWeek = "星期五";
                        break;
                case 6:
                    tWeek = "星期六";
                        break;
            };
            var t1 = Date.UTC(todayYear,12,31);
            var t2 = Date.UTC(todayYear,todayMonth,todayDay);
            var diff = t1-t2;
            var diffDays = Math.floor(diff/days);
            document.getElementById("time1").innerHTML="今天是 "+todayYear+" 年 "+todayMonth+" 月 "+todayDay+"  "+tWeek;
            document.getElementById("time2").innerHTML="<span class='year'>"+todayYear+"</span>"+" 年剩余 "+"<span class='lastday'>"+diffDays+"</span>"+" 天";
            document.getElementById("helloTxt").innerHTML = helloText;
        }
    }
}

window.addEventListener('DOMContentLoaded',getServerDate);