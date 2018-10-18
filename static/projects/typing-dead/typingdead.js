var isMobile = false;
var isSmallMobile = false;

$(document).ready(function() {
	var cw = $('#gameArea').width();
	$('#gameArea').css({'height':cw/2+'px'});
	$('#leftBushes').css({'height':((cw/2)+50)+'px'});
	$('#rightBushes').css({'height':((cw/2)+50)+'px'});
	$('#myChallenge').text(Word_List.getRandomWord()); 
	isMobile = window.matchMedia("only screen and (max-width: 760px)");
	if(isMobile.matches){
		isSmallMobile = window.matchMedia("only screen and (max-width: 480px)");
		$('#gameArea').css({'height':cw+'px'});
		$('#leftBushes').css({'height':(cw+50)+'px'});
		$('#rightBushes').css({'height':(cw+50)+'px'});
	}
	//check the entry when player hits enter
	$('#playerInput').keyup(function (e) {
	    if (e.keyCode == 13) {
	    	var thing = $('#playerInput');
	        checkWord(thing[0].value);
	    }
	});
	updateHighScoreList(null);
});

var rotation = 0;

jQuery.fn.rotate = function(degrees) {
    $(this).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
                 '-moz-transform' : 'rotate('+ degrees +'deg)',
                 '-ms-transform' : 'rotate('+ degrees +'deg)',
                 'transform' : 'rotate('+ degrees +'deg)'});
    return $(this);
};

Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
};
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = 0, len = this.length; i < len; i++) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
};

function Zombie(word, domObject){
	this.word = word;
	this.angle = 0;
	this.domObject = domObject;
	this.isLeft = Math.random() <= 0.5 ?  true : false;
	this.leftRight = 0;
	this.heighth = Math.floor(Math.random() * 90);
	this.slope = Math.abs(35-this.heighth)/45;
	if(this.isLeft)
	{
		this.domObject.firstChild.style.webkitTransform = 'rotate(270deg)';
	}
	else
	{
		this.domObject.firstChild.style.webkitTransform = 'rotate(90deg)';
	}
}

var score = 0;
var scoreDifficultyModifier = 0;
var playerHealth = 3;
var count=0;
var isTimerRunning = false;
var timerControl;
var gameDifficulty = 5;
var gameWords = [];
var zombies = [];
var numGameWords = 200;
var firetime = 0;
var scr = false;
var z = 10000;

function loadGame()
{

	var initialZoms = (isMobile.matches ? 3 : 5);
	$('#startButton').hide();
	for (i = 0; i < numGameWords; i++)
	{
		gameWords[i] = Word_List.getRandomWord(gameDifficulty);
	}
	for (i = 0; i < initialZoms; i++)
	{
		addZombie(i);
	}
	$('#playerInput').focus();
	timerControl=setInterval(timer, 100); //1000 will  run it every 1 second
	isTimerRunning = true;
}

function addZombie(index)
{
	var newWord = getWord();
	var div = document.createElement('div');
	div.className += 'zombie';
	div.innerHTML = "<div class='zomIcon'></div><div class='zomWord'>" + newWord + "</div>";
	zombies[index] = new Zombie(newWord, div);
	if(zombies[index].isLeft)
	{
		div.style.left = 0;
	}
	else
	{
		div.style.right = 0;
	}
	div.style.bottom = zombies[index].heighth +'%';
	div.style.zIndex = z;
	if(z > 100) { z--; }
	else {z = 10000;}
	$('#enemyContainer').append(div);
}

function removeZombie(index)
{
	zombies[index].domObject.remove();
	zombies.splice(index, 1);
}

function getWord()
{
	var wordIndex = Math.floor((Math.random() * 200));
	return gameWords[wordIndex];
}

function changeScore()
{
	score += 1 + scoreDifficultyModifier;
	$('#score').html(score);
}

function checkWord(inval)
{
	for (index = 0; index < zombies.length; index++)
	{
		//handles valid entry ie kill zombie
		if (zombies[index].word === inval.trim().toLowerCase())
		{
			//handle valid entry
			firetime = count + 5;
			//change to firing icon and rotate to target
			$('#playerCharacter').css('background-image', 'url("./assets/PlayerFire.png")');
			if(zombies[index].isLeft)
			{
				$('#playerCharacter').rotate(90);
			}
			else
			{
				$('#playerCharacter').rotate(270);
			}
			$('#playerInput').css({ 
				"border-style":"none"});
			$('#playerInput').val("");
			removeZombie(index);
			changeScore();
			return;
		}
	}
	//handle invalid entry ie shake box and make really angry red
	$('#playerInput').css({"border-color": "#FF0000", 
		"border-width":"5px", 
		"border-style":"solid"});
	$('#gameArea').effect("shake", {times: 3}, 80);
}

function timer()
{
	count=count+1;
	//Reset Character
	if (firetime == count)
	{
		$('#playerCharacter').css('background-image', 'url("./assets/Player.png")');
	}
	//Handles Enemy Spawn
	var countTimer  = (isMobile.matches ? 65 : 25);
	if (count % countTimer === 0 && zombies.length < 50)
	{
		addZombie(zombies.length);
		if (count > 100)
		{
			addZombie(zombies.length);
		}
		if (count > 750)
		{
			addZombie(zombies.length);
		}
		if (count > 1000)
		{
			addZombie(zombies.length);
		}
		if (count > 2000)
		{
			addZombie(zombies.length);
		}
	}
	//Handles Enemy Movement
	for (i = 0; i < zombies.length; i++)
	{
		if(isMobile.matches && zombies[i].leftRight >= 45)
		{
			clearInterval(timerControl);
			isTimerRunning = false;
			showEndScreen();
		}
		if(zombies[i].leftRight >= 45)
		{
			clearInterval(timerControl);
			isTimerRunning = false;
			showEndScreen();
		}
		if(zombies[i].heighth < 40)
		{
			zombies[i].heighth += zombies[i].slope*0.2;
		}
		else if (zombies[i].heighth > 40)
		{
			zombies[i].heighth -= zombies[i].slope*0.2;
		}
		if(zombies[i].leftRight <= 45)
		{
			zombies[i].leftRight += 0.2;
		}
		if(zombies[i].isLeft)
		{
			zombies[i].domObject.style.left = zombies[i].leftRight +'%';
		}
		else
		{
			zombies[i].domObject.style.right = zombies[i].leftRight +'%';
		}
		zombies[i].domObject.style.bottom = zombies[i].heighth +'%';
	}
}

function showEndScreen()
{
	$('#finalScore').text(score);
	$("#playerInput").attr('disabled','disabled');
	$("#resetScreenWrap").fadeIn("slow");
}

function submitScore()
{
	var playerName = $("#submitPlayerName")[0].value.substring(0, 3).toUpperCase();
	if (playerName.length < 3)
	{
		//handle invalid entry ie shake box and make really angry red
		$('#submitPlayerName').css({"border-color": "#FF0000", 
			"border-width":"5px", 
			"border-style":"solid"});
		$('#gameArea').effect("shake", {times: 3}, 80);
	}
	else
	{
		$('#submitPlayerName').css({"border-style":"none"});
		var ScorePackage = {
			Submit: true,
			SCR: scr,
			Score: score,
			Name: playerName
		};
		updateHighScoreList(ScorePackage);
		$("#submitPlayerName").val("");
		$("#submitPlayerName").toggleClass( "disabled" );
		$("#submitScore").toggleClass( "disabled" );
		$("#submitPlayerName").attr('disabled','disabled');
		$("#submitScore").attr('disabled','disabled');
	}
}

function updateHighScoreList(scorePackage)
{
	$.post('php/submitScore.php', scorePackage, function(result) {
		scr = true;
		resultsArr = JSON.parse(result);
		var highScoreDiv = $('#highScoreTable');
		highScoreDiv.empty();
		for(i = 0; i < resultsArr.length; i++)
		{
			highScoreDiv.append("<span class='highscoreRow'><div class='numCol'>" + (i+1) + "</div><div class='dateCol'>" + resultsArr[i].Date.substring(5, 10).replace(new RegExp('-', 'g'),'/') + "</div><div class='scoreCol'>" + resultsArr[i].Score + "</div><div class='nameCol'>" + resultsArr[i].PlayerName + "</div></span>");
		}
	});
	
}

function resetGame()
{
	scr = false;
	score = 0;
	playerHealth = 3;
	count=0;
	for (i = zombies.length-1; i >= 0; i--)
	{
		removeZombie(i);
	}
	$("#playerInput").removeAttr('disabled');
	
	$("#resetScreenWrap").fadeOut("slow", function() {
    // Animation complete.
    	$("#playerInput")[0].value = "";
    	$('#playerInput').focus();
    	$('#score').text(score);
		$("#submitPlayerName").toggleClass( "disabled" );
		$("#submitScore").toggleClass( "disabled" );
    	$("#submitScore").removeAttr('disabled');
    	$("#submitPlayerName").removeAttr('disabled');
		loadGame();
	});

}