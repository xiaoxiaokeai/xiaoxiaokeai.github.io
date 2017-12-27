function ImgOver1()
{
 document.form1.IMG1.src = 'images/game.png';  //mouse hover
}
function ImgOut1()
{

 document.form1.IMG1.src = 'images/bell.png';  //the static appearence
}

function ImgOver2()
{
 document.form2.IMG2.src = 'images/story.jpg';  //mouse hover
}
function ImgOut2()
{

 document.form2.IMG2.src = 'images/bell.png';  //the static appearence
}

function ImgOver3()
{
 document.form3.IMG3.src = 'images/cooike.png';  //mouse hover
}
function ImgOut3()
{

 document.form3.IMG3.src = 'images/bell.png';  //the static appearence
}

function ImgOver4()
{
 document.form4.IMG4.src = 'images/dream.png';  //mouse hover
}
function ImgOut4()
{

 document.form4.IMG4.src = 'images/bell.png';  //the static appearence
}

function ImgOver5()
{
 document.form5.IMG5.src = 'images/home.png';  //need to finds
}
function ImgOut5()  //homepage
{

 document.form5.IMG5.src = 'images/bell.png';  //the static appearence
}



function play2(){
   document.getElementById('audio').play();
}
function  pause2(){
	// avoid the bug that it go on the previous voice
	document.getElementById('audio').src = "music/game.mp3";
	document.getElementById('audio').pause2();

}
function play3(){
   document.getElementById('audio').play();
}
function  pause3(){
	// avoid the bug that it go on the previous voice
	document.getElementById('audio').src = "music/story.mp3";
	document.getElementById('audio').pause3();

}
function play4(){
   document.getElementById('audio').play();
}
function  pause4(){
	// avoid the bug that it go on the previous voice
	document.getElementById('audio').src = "music/cooike.mp3";
	document.getElementById('audio').pause4();

}
function play5(){
   document.getElementById('audio').play();
}
function  pause5(){
	// avoid the bug that it go on the previous voice
	document.getElementById('audio').src = "music/bell.mp3";
	document.getElementById('audio').pause5();

}
function play6(){
   document.getElementById('audio').play();
}
function  pause6(){
	// avoid the bug that it go on the previous voice
	document.getElementById('audio').src = "music/opendoor.mp3"; 
	document.getElementById('audio').pause6();

}
