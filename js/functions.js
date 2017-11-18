/**
 * Created by jorrikklijnsma on 17/11/2017.
 */
var windowRotate = document.getElementsByClassName("rotateIt")[0];
var timeoutLoop = 0;
var timeoutFaster = 0;
var frameRate = 60;
var frameTime = (1000 / frameRate);
var deg = 0;
var animTime = 7500;
var initTime = 7500;
var fasterCounter = 0;

function OnMouseIn() {
	timeoutFaster = setTimeout(fasterAnim, frameTime);
}

function OnMouseOut() {
	console.log(1);
	clearTimeout(timeoutFaster);
}

window.onload = function(e){
	timeoutLoop = setTimeout(rotateLoop, frameTime);
}

function fasterAnim() {
	var animPart;
	
	if (fasterCounter < 60) {
		animPart = initTime / ((60 - fasterCounter));
		animTime = initTime - (animPart);
		//console.log(animPart);
	}
	
	if (animTime < 750) {
		animTime = 750;
	}
	
	
	console.log(animTime);
	
	fasterCounter ++;
	timeoutFaster = setTimeout(fasterAnim, frameTime);
}

function rotateLoop() {
	calcDeg();
	//console.log(deg);
	windowRotate.setAttribute("style","transform: rotate("+deg+"deg);");
	
	timeoutLoop = setTimeout(rotateLoop, frameTime);
}

function calcDeg() {
	var animDuration = animTime / frameTime;
	var degPart = 360 / animDuration;
	deg = deg + degPart;
	if (deg > 360) {
		deg = deg - 360;
	}
}