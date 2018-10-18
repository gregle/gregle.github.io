var ShrimpfestViewModel = (function () {
	var timer = ko.observable('00 : 00 : 00 : 00'),
		caption = ko.observable('You Broke Somethings'),
		memDate = moment(),
		now = moment(),
		diff = 0, days = 0, hours = 0, minutes = 0, seconds = 0;
		initialize = function(){
			calcMemDay();
			calcDifference();
			calcCaption();
			startLoop();
		},
		startLoop = function(){
			setInterval('ShrimpfestViewModel.calcDifference()', 1000);
		},
		calcDifference = function(){
			now = moment();
			diff = moment(memDate.diff(now, 'days'));
			days = memDate.diff(now, 'days');
			hours = memDate.diff(now, 'hours') - days*24;
			minutes = memDate.diff(now, 'minutes') - (days*1440 + hours*60);
			seconds = memDate.diff(now, 'seconds') - (days*86400 + hours*3600 + minutes*60);
			if (days<=0 && hours <= 0 && minutes <= 0 && seconds <= 0)
			{
				timer('00:00:00:00');
			}
			else 
			{
				timer(('0' + days).slice(-3) + ':' + ('0' + hours).slice(-2) + ':' + ('0' + minutes).slice(-2) + ':' + ('0' + seconds).slice(-2));
			}
		},
		calcCaption = function(num){
			if (days<=0 && hours <= 0 && minutes <= 0 && seconds <= 0)
			{
				caption("Holy turds! It's Shrimpfest!!!");
				shrimpFestCelebration();
			}
			else if (days<=0 && hours <=24){
				caption("The hype train intensifies");
				$('#caption').effect( "shake", {times: 200, distance:2});
			}
			else if (days<=1) caption("OMG OMG OMG OMG OMG!!!"); 
			else if (days<=2) caption("Only Two Days!"); 
			else if (days<=3) caption("Guhhhh so close...."); 
			else if (days<=4) caption("Can it be the weekend yet?");
			else if (days<=5) caption("Who could possibly focus when we're so close?");
			else if (days<=6) caption("Less than a week!");
			else if (days<=7) caption("One week left!");
			else if (days<=14) caption("Two weeks?! Better get Bryce on the Hype Train");
			else if (days<=30) caption("Only a month left!");
			else if (days<=50) caption("Better start planning");
			else if (days<=100) caption("It's about that time of year ain't it?");
			else if (days<=200) caption("You have a good soul, and I hate giving good people bad news.");	
			else if (days<=300) caption("I know, me too, I wish I was at Shrimpfest again too.");	
			else if (days<=350) caption("Are you still buzzing from Shrimpfest? I know I am.");
			else if (days<=358) caption("Science tells us that the post Shrimpfest euphoria can lasts weeks.");
			else  caption("Why can't Shrimpfest be every day?");
		},
		calcMemDay = function(){
			var year = +now.format('YYYY');
			
			memDate = moment({ y:year, M:4 });
			//get last monday and subtract 2
			memDate.endOf('month');
			while (memDate.day() != 1){
				memDate.subtract(1, 'days');
			}
			//check to see if now is past this monday
			memDate.startOf('day');
			if(memDate.isBefore(now))
			{
				memDate.add(1, 'year');
				//get next year's monday
				memDate.endOf('month');
				while (memDate.day() != 1){
					memDate.subtract(1, 'days');
				}
			}
			memDate.subtract(2, 'days');
		},
		shrimpFestCelebration = function(){
			document.getElementById('audiotag1').play();
			$('#confetti').show();
		};
	return {
		timer: timer,
		caption: caption,
		calcDifference: calcDifference,
		initialize: initialize
	}
})();

var bindingContainer = document.getElementById("ShrimpfestViewModel");
if (bindingContainer != null) {
	ShrimpfestViewModel.initialize();
	ko.applyBindings(ShrimpfestViewModel, bindingContainer);
	bindingContainer.style.display = 'block';
}