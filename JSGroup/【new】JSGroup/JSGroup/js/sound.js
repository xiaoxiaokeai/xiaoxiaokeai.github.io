function play1(){
   document.getElementById('audio').play();
}
function  pause1(){
	// avoid the bug that it go on the previous voice
	document.getElementById('audio').src = "music/doorring.mp3";
	document.getElementById('audio').pause1();

}