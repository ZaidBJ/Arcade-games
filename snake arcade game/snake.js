var cvs=document.getElementById("canvas").getContext("2d");
var k=document.getElementById("canvas");
var snake=[1,2,3,4];
var s=[{m:105,n:0},{m:70,n:0},{m:35,n:0},{m:0,n:0}];
var initial={ x:300,y:300};
var direction="";
var a,b;
var last;
var slast;
var food_x=800;
var food_y=600;
var h,k;
var score=document.getElementById("score");
var total=0;
var time=100;
function create(){

total=(total+time);
if(direction=="")
total=0;
score_show();
cvs.clearRect(0,0,1920,1000);

	food(food_x,food_y);
cvs.fillStyle="orange";
	
	var sx=0;
var sy=0;

for(var x=0;x<snake.length;x++){
	if(direction=="right"){
		
	if(x==0){
		last=s[0].m;
        slast=s[0].n;
		s[0].m+=35;
		
	}
	else
	{if(x==1){
h=s[x].m;
k=s[x].n;
s[x].m=last;
s[x].n=slast;
	}
	else
	{
a=s[x].m;
b=s[x].n;
s[x].m=h;
s[x].n=k;
h=a;
k=b;
	}
		
		

	}
}

if(direction=="up"){

	if(x==0){
		last=s[0].m;
        slast=s[0].n;
		s[0].n-=35;
		
	}
	else
	{if(x==1){
h=s[x].m;
k=s[x].n;
s[x].m=last;
s[x].n=slast;
	}
	else
	{
a=s[x].m;
b=s[x].n;
s[x].m=h;
s[x].n=k;
h=a;
k=b;
	}


}}


if(direction=="down")

{

	if(x==0){
		last=s[0].m;
        slast=s[0].n;
		s[0].n+=35;
		
	}
	else
	{if(x==1){
h=s[x].m;
k=s[x].n;
s[x].m=last;
s[x].n=slast;
	}
	else
	{
a=s[x].m;
b=s[x].n;
s[x].m=h;
s[x].n=k;
h=a;
k=b;
	}


}}

if(direction=="left")


{

	if(x==0){
		last=s[0].m;
        slast=s[0].n;
		s[0].m-=35;
		
	}
	else
	{if(x==1){
h=s[x].m;
k=s[x].n;
s[x].m=last;
s[x].n=slast;
	}
	else
	{
a=s[x].m;
b=s[x].n;
s[x].m=h;
s[x].n=k;
h=a;
k=b;
	}


}}




	
	if(x<1)
cvs.fillRect(initial.x+s[0].m,initial.y+s[0].n,25,25);
else
	cvs.fillRect(initial.x+s[x].m,initial.y+s[x].n,25,25);

check(x);
gameOver();
}
}

var prev_key=0;

var tik=setInterval(create,time);
document.addEventListener("keydown",function(e){
console.log("move");

		if(e.keyCode==37&&prev_key!=39&&prev_key!=37)
{direction="left";}
if(e.keyCode==38&&prev_key!=40&&prev_key!=38)
{direction="up";}
if(e.keyCode==39&&prev_key!=37&&prev_key!=39)
{direction="right";}
if(e.keyCode==40&&prev_key!=38&&prev_key!=40)
{direction="down";}

prev_key=e.keyCode;
});


function food(x,y){
cvs.fillStyle="green";
var co_x=1000*Math.random();
var co_y=1400*Math.random();
cvs.fillRect(x,y,20,20);}



var count=0;

function check(p){


	if(Math.abs(initial.x+s[p].m-food_x)<20&&Math.abs(initial.y+s[p].n-food_y)<20)
	{
		food_x=700*Math.random();
		food_y=650*Math.random();
snake.push(p*2);
console.log(snake);
s.push({m:h,n:k});

	}
}

var game=document.getElementById("game");

function gameOver(){
for(var i=0;i<s.length;i++){
for(var j=0;j<s.length;j++){
if(s[i].m==s[j].m&&i!=j&&s[i].n==s[j].n){
clearInterval(tik);
game.style.display="block";
}
if(initial.x+s[i].m==1000||initial.y+s[i].n==650||initial.x+s[i].m<16||initial.y+s[i].n<15  )
	{clearInterval(tik);
game.style.display="block";}
}
}}

function score_show(){
score.innerHTML="Score : "+total;}