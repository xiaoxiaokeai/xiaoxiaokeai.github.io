

function play7(){
   document.getElementById('audio').play();
}
function  pause7(){
	// avoid the bug that it go on the previous voice
	document.getElementById('audio').src = "music/wooddoor.mp3"; 
	document.getElementById('audio').pause7();

}