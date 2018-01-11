// JavaScript Document
var mute1 = 0;
function Mute(){
if(mute1 == 0)
{
	document.getElementById("background").volume = 0.0;
	mute1 = 1;
	document.getElementById("Mute").innerHTML ="Unmute Sound";

	
	
}
	
else{
document.getElementById("background").volume="0.05"	;
mute1 = 0;
document.getElementById("Mute").innerHTML = "Mute Sound";

}	

}