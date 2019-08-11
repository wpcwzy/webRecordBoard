function touchlisten()
{
    var audio=document.getElementById("audio");
    audio.currentTime=0;
    audio.play();
    document.body.style.background="red";
    setTimeout("reverse();",100);
}

function reverse()
{
    document.body.style.backgroundImage='url(img/background.png)';
    document.body.style.backgroundSize="100%";
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