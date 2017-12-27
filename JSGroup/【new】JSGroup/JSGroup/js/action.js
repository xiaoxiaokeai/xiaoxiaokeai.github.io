var can = document.getElementById("canvas");
		var mark = document.getElementById("mark");
		var cxt = can.getContext("2d");
		var w = 35,h = 35;
		var curMap;//current map
		var curLevel;// map level
		var cman;//c-man
		var curlevel = 0;//map level[]
		var moveTimes = 0;
		// initialize all pic.
		var oImgs = {
			"block" : "images/block.png",
			"obstacle" : "images/obstacle.png",
			"gift" : "images/gift.png",
			"chimney" : "images/chimney.png",
			"up" : "images/up.png",
			"down" : "images/down.png",
			"left" : "images/left.png",
			"right" : "images/right.png",
		}

   function imgPreload(srcs,callback){

			var count = 0,imgNo = 0,images = {};

			for(src in srcs){
				imgNo++;
			}
			for(src in srcs ){
				images[src] = new Image();
				images[src].onload = function(){ //determine whether the pic right or no.
		
					if (++count >= imgNo)
					{
						callback(images);
					}
				}
				images[src].src = srcs[src];
			}
		}


		var block,obstacle,gift,chimney,up,down,left,right;
		imgPreload(oImgs,function(images){
			//console.log(images.block);
			block = images.block;
			obstacle = images.obstacle;
			gift = images.gift;
			chimney = images.chimney;
			up = images.up;
			down = images.down;
			left = images.left;
			right = images.right;
			init();
		});
	/* initialize game*/
		function init(){
			//InitMap();
			//DrawMap(levels[0]);
			initLevel();//initialize different levels game.
			showMoveInfo();//initializing the corresponding level of game data
		}
		//block initialization
		function InitMap(){
			for (var i=0;i<16 ;i++ )
			{
				for (var j=0;j<16 ;j++ )
				{
					cxt.drawImage(block,w*j,h*i,w,h);
				}
			}
		}
		//c-man`s position
		function Point(x,y){
			this.x = x;
			this.y = y;
		}
		var cmanPosition = new Point(5,5);//initial coordinate value
		
		function DrawMap(level){                        //draw each game map
			for (var i=0;i<level.length ;i++ )
			{
				for (var j=0;j<level[i].length ;j++ )
				{
					var pic = block;//initialize pic.
					switch (level[i][j])
					{
					case 1:// draw the obstacle
						pic = obstacle;
						break;
					case 2://draw the chimney         now the problem is I can`t find a suitable chimneey pic.
						pic = chimney;
						break;
					case 3://draw  gifts
						pic = gift;
						break;
					case 4://draw c-man
						pic = cman;//Attention is associated with the upper and lower sides
						//get the ccurrent position of c-man.
						cmanPosition.x = i;
						cmanPosition.y = j;
						break;
					case 5://draw the chimney and gifts position    can`t move = = faiule
						pic = gift;
						break;
					}
				

					cxt.drawImage(pic,w*j-(pic.width-w)/2,h*i-(pic.height-h),pic.width,pic.height)
					//Each picture is different and needs to be drawn at the center of the corresponding floor.s
				}
			}
		}
		//Initialize the game level
		function initLevel(){
			curMap = copyArray(levels[curlevel]);//The current mobile game map
			curLevel = levels[curlevel];//The initial map of the current level
			cman = down;//Initialize c-man
			InitMap();//Initialize map
			DrawMap(curMap);//draw the current level map
		}
		//enter the next turn
		function NextLevel(i){
			//curlevel  reccord the current turn number.
			curlevel = curlevel + i;
			if (curlevel<0)
			{
				curlevel = 0;
				return;
			}
			var len = levels.length;
			if (curlevel > len-1)
			{
				curlevel = len-1;
			}
			initLevel();//Initial current level turn
			moveTimes = 0;//to zero
			showMoveInfo();//Initialization of current card data
		}

		//move!!!!
		function go(dir){
			var p1,p2;
			switch (dir)
			{
			case "up":
				cman = up;
				//Get the two coordinates in front of the person to determine whether the person can move.
				p1 = new Point(cmanPosition.x-1,cmanPosition.y);
				p2 = new Point(cmanPosition.x-2,cmanPosition.y);
				break;
			case "down":
				cman = down;
				p1 = new Point(cmanPosition.x+1,cmanPosition.y);
				p2 = new Point(cmanPosition.x+2,cmanPosition.y);
				break;
			case "left":
				cman = left;
				p1 = new Point(cmanPosition.x,cmanPosition.y-1);
				p2 = new Point(cmanPosition.x,cmanPosition.y-2);
				break;
			case "right":
				cman = right;
				p1 = new Point(cmanPosition.x,cmanPosition.y+1);
				p2 = new Point(cmanPosition.x,cmanPosition.y+2);
				break;
			}
			//If people can move then update the game data, redraw the map
			if (Trygo(p1,p2))
			{
			  moveTimes ++;
				showMoveInfo();
			}
			//draw block again
			InitMap();
			//draw map agan.
			DrawMap(curMap);
			//If the success to the next level.    (move successfully)
			if (checkFinish())
			{
				alert("Congratulations！！ You are so amazing.");
				NextLevel(1);
			}
		}
		//Judge whether to push the success or not
		function checkFinish(){
			for (var i=0;i<curMap.length ;i++ )
			{
				for (var j=0;j<curMap[i].length ;j++ )
				{
					//The current mobile map and the initial map comparison, into the parameters in the case would not move after the initial success if not refer to push on the map in
					if (curLevel[i][j] == 2 && curMap[i][j] != 3 || curLevel[i][j] == 5 && curMap[i][j] != 3)
					{
						return false;
					}
				}
			}
			return true;
		}
		//Detemine whether the c-man can move
		function Trygo(p1,p2){
			if(p1.x<0) return false;//If beyond the map above----->fail
			if(p1.y<0) return false;//If beyond the map left----->fail
			if(p1.x>curMap.length) return false;//If beyond the map down----->fail
			if(p1.y>curMap[0].length) return false;//If beyond the map right----->fail
			if(curMap[p1.x][p1.y]==1) return false;//If meet the obstacle---->fail
			if (curMap[p1.x][p1.y]==3 || curMap[p1.x][p1.y]==5)
			{//If the box is in front of people also need to judge the front of the box there is no obstacle (box / wall)
				if (curMap[p2.x][p2.y]==1 || curMap[p2.x][p2.y]==3)
				{
					return false;
				}
				//If the judgment is not successful step forward in front of the box.
				curMap[p2.x][p2.y] = 3;//Change the value of a map corresponding to the coordinates of the coordinates
				//console.log(curMap[p2.x][p2.y]);
			}
			//If no judgment step success ,c-man go on
			curMap[p1.x][p1.y] = 4;//Change the value of a map corresponding to the coordinates of the coordinates
			//If c-man gon on 
			var v = curLevel[cmanPosition.x][cmanPosition.y];
			if (v!=2)//If the fruit just started the little person's position, he can`t move.
			{
				if (v==5)//can`t move
				{
					v=2;//If the villain itself after the move into it or display in
				}else{
					v=0;//The little man's position was changed to the floor before the man moved away
				}
			}
			//Map parameters to reset the person's position
			curMap[cmanPosition.x][cmanPosition.y] = v;
			//If cc-man judge a step forward, update the coordinates
			cmanPosition = p1;
			//if c -man can move,----->return ture.
			return true;
		}
		//Judge whether to push the success or not
	
		function doKeyDown(event){
			switch (event.keyCode)
			{
			case 65:
				go("left"); playSound();//←
				break;
			case 87:
				go("up");  playSound();//↑
				break;
			case 68:
				go("right"); playSound(); //→
				break;
			case 83:
				go("down");  playSound();//↓
				break;
			}

		}
   // walking music mp3
     var au = document.createElement("audio");
       au.preload="auto";
       au.src = "music/walk.mp3";
     function playSound() {
       au.play();
} 








		//Late patch
		function showMoveInfo(){
			mark.innerHTML = "Current is " + (curlevel+1) +" pass. Move times :" + moveTimes;
		}
		//introduction
		var showhelp = false;
		function showHelp(){
			showhelp = !showhelp;
			if (showhelp)
			{
				alert("Merry Christmas! It was a new year for Christmas again, but the Santa Claus seemed to have a little trouble.Le`s  help him send the gift to each of the chimneys.Use the upper, lower, left and right keys on the keyboard to move the Santa Claus and push the gift to the position of the chimneys. The gift can only be pushed forward, not back, and the Santa Claus can only push a box at a time.");  
	
			}else{
				showMoveInfo();
			}
		}

		//copy array
		function copyArray(arr){
			var b=[];//Each move update map data is emptied before adding a new map.
			for (var i=0;i<arr.length ;i++ )
			{
				b[i] = arr[i].concat();//Link two arrays
			}
			return b;
		}