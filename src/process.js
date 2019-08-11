function touchlisten()
{
    var audio=document.getElementById("audio");
    audio.currentTime=0;
    audio.play();
}

function rotateAlarm()
{
    if(window.orientation!=90)
    {
        if(window.orientation!=-90)
        {
            alert("请在横屏下使用！");
        }
        
    }
}

addEventListener('load', function(){
    rotateAlarm();
    window.onorientationchange =  rotateAlarm;
});

addEventListener("touchend",function(){
    touchlisten();
});