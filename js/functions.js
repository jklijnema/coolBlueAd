/**
 * Created by jorrikklijnsma on 17/11/2017.
 */

//VARs Declaration//
var windowRotate = document.getElementsByClassName("rotateIt")[0];
var machine = document.getElementsByClassName("machine")[0];
var timeoutLoop = 0;
var timeoutTrans = 0;
var frameRate = 60;
var frameTime = (1000 / frameRate);
var deg = 0;
var animTime = 7500;
var initTime = 7500;
var step = initTime / frameRate;
var faster = true;

//Hover event//
function OnMouseIn() {
	faster = true; //set animation to faster mode
	timeoutTrans = setTimeout(transition, frameTime); //Run transition
}

//Hover off event
function OnMouseOut() {
	faster = false; //reset animation to default mode
	timeoutTrans = setTimeout(transition, frameTime);
}

//Initialize
window.onload = function(e){
	timeoutLoop = setTimeout(rotateLoop, frameTime); //Run transition
}

//Transition
function transition() {
	if (faster) { //Check if its going faster of slower
		if (animTime <= 750) { //check if is at end of speeding up
			animTime = 750; //if below minimum set to minimum
			clearTimeout(timeoutTrans); //Stop animation
		} else {
			animTime = animTime - step; //decrease time interval (set the speed of rotating)
		}
	} else {
		if (animTime <= 7500) { //check if is at end of slowing down
			animTime = 7500; //if above maximum set to maximum
			clearTimeout(timeoutTrans); //Stop animation
		} else {
			animTime = animTime + step; //increase time interval (set the speed of rotating)
		}
	}
	
	timeoutTrans = setTimeout(transition, frameTime); //Loop transition frames
}

//AnimationLoop
function rotateLoop() {
	calcDeg(); //Call function to calculate the rotation amount
	var x = Math.random() * (.5+.5) - .5; //set random x value between -0.5 and 0.5 for the x offset
	var y = Math.random() * (.5+.5) - .5; //set random y value between -0.5 and 0.5 for the y offset
	var r = Math.random() * (.5+.5) - .5; //set random r value between -0.5 and 0.5 for the rotation
	
	windowRotate.setAttribute("style","transform: rotate("+deg+"deg);"); //change rotation css
	
	//Set moving base
	if (faster && animTime == 750) { //check if hover is ongoing.
		machine.setAttribute("style","transform:  rotate("+r+"deg) translate("+x+"px, "+y+"px);"); //set shaking with random generated values
	} else {
		machine.setAttribute("style","transform: rotate(0deg) translate(0px, 0px);"); //set shaking back to default value
	}
	
	timeoutLoop = setTimeout(rotateLoop, frameTime); //Loop animation frames
}

//Calculate rotation degree
function calcDeg() {
	var animPart = animTime / frameTime; //Calculate the part corresponding the time of 1 frame
	var degPart = 360 / animPart; //Calculate the degrees of needed rotation.
	deg = deg + degPart; //Add degrees to previous degrees
	if (deg > 360) { //Check if need to set new round
		deg = deg - 360; //set new round
	}
}