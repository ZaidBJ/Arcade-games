var ctx=document.getElementById("canvas").getContext("2d");
var img=document.getElementById("img");
ctx.fillStyle="red";
var spaceship=document.getElementById("spaceship");
var direction="";
document.addEventListener("keydown",function(e){
	console.log("keypress");
if(e.keyCode==37)
	direction="left";
if(e.keyCode==39)
	direction="right";
if(e.keyCode==38)
	laser();
if(e.keyCode==40)
	direction="";
});



var gun=[];
var alien=[];
var spaceCraft=[{x:500,y:585}];
var time=0;
var a=0;
var b=0;
var down=85;
function enemy(){
console.log("enemy called");
 a=a+55;
b=down;

alien.push({x:a,y:b});

}
var num=[0];
var p=0;
var watch=[];
var previous=[1];
var list=[];

setTimeout(init,100);



function init(){
list=[];
for(var i=0;i<18;i++){

list.push({x:a+i*55,y:0});}
watch.push(0);
alien.push(list);


}
var move_check=true;
var change;
var nan=0;

function create(){
	plane_controls();
move_check=true;
ctx.clearRect(0,0,1000,800);
for(var i=0;i<alien.length;i++)
{if(alien.length-1==0)
 change=0;

 if(watch[i]-watch[i+1]==90||watch[i+1]=="undefined")

 	{ 
 		
 	 if(watch[i+1]=="undefined")
 	    change=i;

 		change=i+1;
 		break;
}
else
change=0;


 
}

for(var p=0;p<alien.length;p++)
	for(var q=0;q<18;q++)
		ctx.drawImage(img,alien[p][q].x,watch[p],40,40);

if(watch[alien.length-1]!=0&&alien.length<=4){
	setTimeout(init,100);

move_check=false;
}
if(move_check)
move(change);


//Create Spaceship

ctx.drawImage(spaceship,spaceCraft[0].x,spaceCraft[0].y,70,70);

//check collison
check_Collision();


//bullet_move
for(var i=0;i<gun.length;i++)
	{gun[i].y-=30;

//draw bulllet
ctx.fillRect(gun[i].x,gun[i].y,10,10);}


//check if enemy is killed

enemy_killed();
}


function check_Collision(){

for(var p=0;p<alien.length;p++)
	for(var  q=0;q<18;q++){
		if(Math.abs(watch[p]-spaceCraft[0].y)<22&&Math.abs(alien[p][q].x-spaceCraft[0].x)<22)
		clearInterval(tick)
	
	
}

}


var tick=setInterval(create,150);
var neeche;
var add=0;



function move(c){
watch[c]+=45;



}


function plane_controls(){
	
if(spaceCraft[0].x>10&&spaceCraft[0].x<940){
if(direction=="left")
	spaceCraft[0].x-=45;
if(direction=="right")
	spaceCraft[0].x+=45;}
else
	{

		if(direction=="left")
{console.log("left");
direction="right";
spaceCraft[0].x+=45;}
else
if(direction="right"){
	console.log("right");
direction="left";
spaceCraft[0].x-=45}}

}

function laser(){
var shot={x:spaceCraft[0].x+30,y:spaceCraft[0].y+20};
gun.push(shot);


}

function enemy_killed(){

for(var i=0;i<gun.length;i++){

	for(var p=0;p<alien.length;p++)
		for(var q=0;q<18;q++)
		{

if(Math.abs(gun[i].x-alien[p][q].x)<30&&Math.abs(gun[i].y-watch[p])<30)
	{
console.log("killed");
		alien[p][q].x=-50;
gun[i].x=-60;
break;
}
}

}


}

