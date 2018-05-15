//window.onload = init;
//function init(){
  //var testinterval = setInterval(function(){console.log("hello")},1000);
  //startbreak();
//}

var timeleftinterval;
var breakincrement = 0;
var timerincrement = 0;
var timerbusy = false;
var paused = false;
var breakbool = false;
var time = 0;
var breaktime = 0;
var timeremaining = 0;
var breaktimeremaining = 0;
var accumulator = 0;
var breakaccumulator =0;

function incrementplus(id){
 if(id === 'up-button1'){
  breakincrement++;
  if(breakincrement < 10){
  document.getElementById("break-arrows").style.marginRight = "5%";
  document.getElementById("break-num").innerHTML = breakincrement;
  }
  else{
  document.getElementById("break-arrows").style.marginRight = "4.3%";
  document.getElementById("break-num").innerHTML = breakincrement;
  }
 }
 else{//id is timerincrement
  timerincrement++;
  if(timerincrement < 10){
  document.getElementById("timer-arrows").style.marginLeft = "5%";
  document.getElementById("time-num").innerHTML = timerincrement;
  }
  else{
  document.getElementById("timer-arrows").style.marginLeft = "4.3%";
  document.getElementById("time-num").innerHTML = timerincrement;
  }
 }
}

function incrementminus(id){
 if(id === 'down-button1'){
  if(breakincrement > 0){breakincrement--;}
  if (breakincrement < 10){
  document.getElementById("break-arrows").style.marginRight = "5%";
  document.getElementById("break-num").innerHTML = breakincrement;
  }
  else{
  document.getElementById("break-arrows").style.marginRight = "4.35%";
  document.getElementById("break-num").innerHTML = breakincrement;
  }
 }
 else{
  if(timerincrement > 0){timerincrement--;}
  if(timerincrement < 10){
  document.getElementById("timer-arrows").style.marginLeft = "5%";
  document.getElementById("time-num").innerHTML = timerincrement;
  }
  else{
  document.getElementById("timer-arrows").style.marginLeft = "4.3%";
  document.getElementById("time-num").innerHTML = timerincrement;
  }//end for timer increiment
 }
}

function setTimer(settime,setbreak){
 //convert minutes to seconds
 if(!timerbusy && !paused){
 time = parseInt(settime)*60;
 breaktime = parseInt(setbreak)*60;
 timeremaining = time;
 breaktimeremaining = breaktime;
 timerbusy = true;
 document.getElementById('start').style.color = "green";
   startInterval();
 }
 if(paused){
  paused = false;
  document.getElementById("pause").style.color = "white";
  document.getElementById('start').style.color = "green";
  if(!breakbool){
    startInterval();
   }
  else{
    startBreakInterval();
   }
 }
}

function pause(){
 paused = true;
 timerbusy = false;
 document.getElementById("start").style.color = "white";
 document.getElementById("pause").style.color = "red";
 if(!breakbool){
    displayTime(timeremaining);
    clearInterval(timeleftinterval);
 }
 else{
    displayTime(breaktimeremaining);
    clearInterval(breakleftinterval);
 }
}

function startInterval(){
 //updates every second
  //alert("at least in here");
  if(time > 0){
   document.getElementById("time").style.marginTop = "10%";
   document.getElementById("start").style.marginTop = "13%";
   timeleftinterval = setInterval(function(){
   checkInterval(timeleftinterval)},1000);
  }
  else{
   refresh();
  }
}

function startBreakInterval(){
   document.getElementById("breaktext").innerHTML = "Break";
   document.getElementById("time").style.marginTop = "-5%";
   document.getElementById("start").style.marginTop = "-1.3%";
   breakleftinterval = setInterval(function(){checkBreakInterval(breakleftinterval)},1000);
}

function checkBreakInterval(binterval){
 breaktimeremaining--;
 if(breaktimeremaining == 0){
   clearInterval(binterval);
   breakfinish();
   }
 else{
   displayTime(breaktimeremaining);
   } 
}

function checkInterval(interval){
 document.getElementById("breaktext").innerHTML = "";
 timeremaining--;
  if(timeremaining == 0){
   clearInterval(interval);
   finish();
   }
  else{
   displayTime(timeremaining);
   }
  }


function finish(){
  timerbusy = false;
  document.getElementById("start").style.color = "white";
  document.getElementById("time").innerHTML = "Done!";
  timeremaining = time;
  if(breaktime > 0){
   breakbool = true;
   startBreakInterval();
  }
  else{
   startInterval();
  }
}

function breakfinish(){
  breakbool = false;
  timerbusy = false;
  document.getElementById("breaktext").innerHTML = "";
  document.getElementById("start").style.color = "white";
  document.getElementById("time").innerHTML = "Stop!";
  breaktimeremaining = breaktime;
  breakaccumulator = 0;
  if(time > 0){
   startInterval();
  }
  else{
   refresh();
  }
}

//use javascript to change the margin properties
//after clicking to keep things centered.
function displayTime(secs){
  secs = secs;
  var timestring = "";
  if(secs < 60){
   if(secs >= 10){timestring = "00:" + String(secs);}
   else{timestring = "00:0" + String(secs);}
  }
  if(secs >= 60){
   sectomin = Math.floor(secs/60);
   secsleft = secs % 60;
   var minstring = "";
   var secstring = "";
   if(sectomin < 10 && sectomin > 0){minstring = "0" + String(sectomin);}
   else{minstring = String(sectomin);}
   if(secsleft < 10 && secsleft >= 0){secstring = "0" + String(secsleft);}
   else{secstring = String(secsleft);}
   timestring = minstring + ":" + secstring;
  }
 document.getElementById("time").innerHTML = timestring;
 return timestring;
}

function refresh(){
 
 document.getElementById("start").style.color = "white";
 document.getElementById("pause").style.color = "white";
 document.getElementById("time-num").innerHTML = 0;
 document.getElementById("break-num").innerHTML = 0;
 timerincrement = 0;
 breakincrement = 0;
 timeremaining = 0;
 accumulator = 0;
 breakaccumulator = 0;
 time = 0;
 breaktime = 0;
 clearInterval(timeleftinterval);
 clearInterval(breakleftinterval);
 breakbool = false;
 document.getElementById("time").innerHTML = "00:00";
 document.getElementById("time").style.marginTop = "10%";
 document.getElementById("start").style.marginTop = "13%";
 document.getElementById("breaktext").innerHTML = "";
}
