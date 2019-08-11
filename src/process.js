var supportsVibrate = "vibrate" in navigator;
if(!supportsVibrate)
{
    document.write()
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