/**
 * Created by jorrikklijnsma on 17/11/2017.
 */
var ad = document.getElementsByClassName("ad")[0];
var windowRotate = document.getElementsByClassName("rotateIt")[0];
var timeoutLoop = 0;

function OnMouseIn() {
	var i = 1;                     //  set your counter to 1
	var delay =10 / i;
	
	
	
	function rotateLoop() {           //  create a loop function
		//delay = 200 / i;
		var seconds = 7.5 - (.075 * i);
		if (seconds < .75) {
			seconds = .75;
		}
		windowRotate.setAttribute("style","animation: rotate "+seconds+"s linear infinite;");
		
		console.log(i);
		i++;
		
		timeoutLoop = setTimeout(function () {    //  call a 3s setTimeout when the loop is called
			//  increment the counter
			if (i < 100) {            //  if the counter < 10, call the loop function
				rotateLoop();             //  ..  again which will trigger another
			}                 //  ..  setTimeout()
		}, delay)
	}
	
	timeoutLoop = setTimeout(rotateLoop, delay);
}

function OnMouseOut() {
	if (timeoutLoop) {
		clearTimeout(timeoutLoop);
		timeoutLoop = 0;
		windowRotate.setAttribute("style","animation: rotate 7.5s linear infinite;");
	}
}

window.onload = function(e){
}