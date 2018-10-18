var isMobile = false;
var isSmallMobile = false;

$(document).ready(function() {
	$('#myChallenge').text(Word_List.getRandomWord()); 
	isMobile = window.matchMedia("only screen and (max-width: 760px)");
	if(isMobile.matches){
		isSmallMobile = window.matchMedia("only screen and (max-width: 480px)");
		setInterval(function() { ObserveInputValue($('#mobileEntry').val()); }, 500);
	}
});

var lastKeyDown;
var score = 0;
var count=30;
var counter;
var counterStarted = false;
var colorArray = 
	[["#FFFFFF","white"],
	["#FF0000","red"],
	["#FF9933", "orange"],
	["#009900","green"],
	["#0000FF","blue"],
	["#FFFF00","yellow"],
	["#660066", "purple"],
	["#FF99CC", "pink"],
	["#000000", "black"]];
var lastColor = 0;


//handle backspace and enter key
window.addEventListener('keydown', function(event){
	if(!isMobile.matches){
		if (event.keyCode === 8) {
			var text = $('#myInput').text();
			text = text.substr(0, text.length-1);
			$('#myInput').text(text);
			var answer = $('#answer').text();
			var len = $('#myInput').text().length;
			if (answer.substring(0,len) != $('#myInput').text())
			{
				$('#modalContent').css({"border-color": "#990000", 
		            "border-width":"5px", 
		            "border-style":"solid",
		         	"border-radius":"5px"});
			}
			else
			{
				$('#modalContent').css({"border-color": "#009900", 
		            "border-width":"5px", 
		            "border-style":"solid",
		         	"border-radius":"5px"});
			}
			event.preventDefault();
	    }
	    if (event.keyCode === 13) {
	    	//check for correct answer
			if ($('#myInput').text() === $('#answer').text())
			{
				$('#modalContent').css({"border": "none"});
				$('#myInput').text("");
				score += 10;
				$('#score').text(score);
				$('#myChallenge').text(Word_List.getRandomWord()); 
				var newColor = getRandomColor();
				$('#myChallenge').css({"color": newColor});
			}
	    }
	}
});

//normal keyboard keys
window.addEventListener('keypress', function(event){
	if(!isMobile.matches){
		if (count == 30 && !counterStarted)
		{
			counter=setInterval(timer, 1000); //1000 will  run it every 1 second
			counterStarted = true;

		}
		else if (count ===0){
			return;
		}
		if (!($('#myTyper').hasClass('in')))
		{
			$('#myTyper').modal('show');
		}
		if($('#myInput').text().length < 10)
		{
			if (event.keyCode !== 13) {
				$('#myInput').text($('#myInput').text().trim() + String.fromCharCode(event.which).toLowerCase());
			}
			var answer = $('#answer').text();
			var len = $('#myInput').text().length;
			if (answer.substring(0,len) != $('#myInput').text())
			{
				$('#modalContent').css({"border-color": "#FF0000", 
		            "border-width":"5px", 
		            "border-style":"solid",
		         	"border-radius":"5px"});
				$('#shaker').effect("shake", {times: 3}, 80);
			}
			else
			{
				$('#modalContent').css({"border-color": "#009900", 
		            "border-width":"5px", 
		            "border-style":"solid",
		         	"border-radius":"5px"});
			}
		}
	}
});

//hide the modal after a while
window.addEventListener('keyup', function(event){
	if(!isMobile.matches){
		clearInterval(lastKeyDown);
		lastKeyDown = setTimeout(function () {
	        $('#myTyper').modal('hide');
	        $('#myInput').text("");
	    }, 2000);
	}
});

function timer()
{
	count=count-1;
	if (count <=10)
	{
		$('#time').text(count);
		if(!isSmallMobile.matches){
			$('#time').css({"color": "#FF0000",
				"font-size": "60px",
				"font-weight":"bold"});
		}
		else{
			$('#time').css({"color": "#FF0000",
				"font-size": "45px",
				"font-weight":"bold"});
		}
	}
	if (count <= 0)
	{
		$('#time').text(count);
    	clearInterval(counter);
    	//counter ended, do something here
    	$('#myTyper').modal('hide');
    	if(!isSmallMobile.matches){
    		$('#finalModal').modal().css(
            {
                'margin-top': function () {
                    return (($(this).height() / 2 )-104);
                }
            });
    		$('#finalModal').modal('show');
	    	$('#finalScore').text(score);
	    	$('#reset').show();
    	}
    	else{
    		$('#finalModalMobile').modal().css(
            {
                'margin-top': function () {
                    return (($(this).height() / 2 )-104);
                }
            });
    		$('#finalModalMobile').modal('show');
	    	$('#finalScoreMobile').text(score);
	    	$('#resetMobile').show();
    	}
    	return;
  	}
	//Do code for showing the number of seconds here
  	$('#time').text(count);
}

function reset()
{
	count=30;
	counterStarted = false;
	score=0;
	$('#myInput').text("");
	$('#myChallenge').text(Word_List.getRandomWord()); 
	$('#finalModal').modal('hide');
	$('#finalModalMobile').modal('hide');
	$('#time').text(count);
	if(!isSmallMobile.matches){
		$('#time').css({"color": "#EAEAEA",
			"font-size": "40px",
			"font-weight":"normal"});
	}
	else{
		$('#time').css({"color": "#EAEAEA",
			"font-size": "20px",
			"font-weight":"normal"});
	}
	$('#score').text(score);
	$('#reset').hide();
} 

function getRandomColor()
{
	var entry = Math.floor(Math.random() * colorArray.length);
	do
	{
		entry = Math.floor(Math.random() * colorArray.length);
	}
	while(lastColor == entry);
	$('#answer').text(colorArray[entry][1]);
	lastColor = entry;
	return colorArray[entry][0];

}

function ObserveInputValue(inval){
	inval = inval.toLowerCase();
	if (count === 30 && inval !== "" && !counterStarted)
	{
		counter=setInterval(timer, 1000); //1000 will  run it every 1 second
		counterStarted = true;
	}
	else if (count === 0){
		return;
	}
	var answer = $('#answer').text();
	if(inval.trim() == answer.trim())
	{
		$('#mobileEntry').val("");
		score += 10;
		$('#score').text(score);
		$('#myChallenge').text(Word_List.getRandomWord()); 
		var newColor = getRandomColor();
		$('#myChallenge').css({"color": newColor});
	}
}
