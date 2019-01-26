var Timer;
var TotalSeconds;
//Timer Function starts here..
function CreateTimer(mins,secs) {
        Timer = document.getElementById("timer");
        Seconds = secs;
		Minutes = mins;
        UpdateTimer();
        window.setTimeout("Tick();", 1000);
}

function Tick() {
		if(Seconds == 0 && Minutes == 0) {
			check();
			document.getElementById('quesform').submit();
		}
		if(Seconds == 0) {
			Minutes -= 1;
			Seconds = 60;
		}
        Seconds -= 1;
        UpdateTimer()
        window.setTimeout("Tick()", 1000);
}

function UpdateTimer() {
        Timer.innerHTML = Minutes+":"+Seconds;
		if(Seconds < 10)
			timer.innerHTML = Minutes+":0"+Seconds;
		if(Minutes < 10)
			timer.innerHTML = "0"+Minutes+":"+Seconds;
		if(Minutes < 10 && Seconds < 10)  
			timer.innerHTML = "0"+Minutes+":0"+Seconds;
}