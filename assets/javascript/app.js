var count;
var correctAnswers;
var incorrectAnswers;
var unanswered;
var showQ;
var userAnswer;
var gameStarted = false;

var q1 = {
	q: 'Netflix became a "hero" for producing a new season of which cult comedy series, cancelled by Fox in 2006?',
	a: 'Master of None',
	b: 'House of Cards',
	c: 'Wet Hot American Summer',
	d: 'Arrested Development',
	answer: 'Arrested Development',
	triviaAnsw: 'd',
	correctImg: '<iframe src="https://giphy.com/embed/6YCelxMJo0txK" width="480" height="271" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/jJ56cJ4ZU1fTq">via GIPHY</a></p>',
	incorrectImg: '<iframe src="https://giphy.com/embed/jJ56cJ4ZU1fTq" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/jJ56cJ4ZU1fTq">via GIPHY</a></p>',
}

var q2 = {
	q: 'Who is Kimmy\'s talented roommate on "Unbreakable Kimmy Schmidt"?',
	a: 'Jacqueline Voorheese',
	b: 'Lillian Jaushtupper',
	c: 'Titus Andromedon',
	d: 'Kimmy lives alone',
	answer: 'Titus Andromedon',
	triviaAnsw: 'c',
	correctImg: '<iframe src="https://giphy.com/embed/18pjPEqqIt2k8" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/comedy-drama-emmys-18pjPEqqIt2k8">via GIPHY</a></p>',
	incorrectImg: '<iframe src="https://giphy.com/embed/3oEjHKvjqt5pssL99C" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/kimmyschmidt-unbreakable-kimmy-schmidt-uks-3oEjHKvjqt5pssL99C">via GIPHY</a></p>',
}

var q3 = {
	q: '"Jessica Jones" gives us our first look at which character ahead of their own series coming to Netflix?',
	a: 'Luke Cage',
	b: 'Deadpool',
	c: 'Daredevil',
	d: 'The Avengers',
	answer: 'Luke Cage',
	triviaAnsw: 'a',
	correctImg: '<iframe src="https://giphy.com/embed/3o6Mbg4Vhqfje7iQEw" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/marvel-netflix-luke-cage-3o6Mbg4Vhqfje7iQEw">via GIPHY</a></p>',
	incorrectImg: '<iframe src="https://giphy.com/embed/SqtUeHelzv0Pe" width="480" height="441" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/jessica-jones-SqtUeHelzv0Pe">via GIPHY</a></p>',
}

var q4 = {
	q: 'In "Wet Hot American Summer: First Day of Camp," it is revealed that Lindsay is actually:',
	a: 'An undercover cop',
	b: 'A convict',
	c: 'A Russian assasin',
	d: 'An undercover journalist',
	answer: 'An undercover journalist',
	triviaAnsw: 'd',
	correctImg: '<iframe src="https://giphy.com/embed/10117xykbdkEU0" width="480" height="304" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/wet-hot-american-summer-jordan-peele-whasedit-10117xykbdkEU0">via GIPHY</a></p>',
	incorrectImg: '<iframe src="https://giphy.com/embed/KrHaLUAF1vaZq" width="480" height="272" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/crying-hug-group-KrHaLUAF1vaZq">via GIPHY</a></p>',
}

var q5 = {
	q: 'What religion is Matt Murdock on "Daredevil"?',
	a: 'Catholic',
	b: 'Protestant',
	c: 'Jewish',
	d: 'Atheist',
	answer: 'Catholic',
	triviaAnsw: 'a',
	correctImg: '<iframe src="https://giphy.com/embed/32Jz1xBJBYlpe" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/devilmurdocks-32Jz1xBJBYlpe">via GIPHY</a></p>',
	incorrectImg: '<iframe src="https://giphy.com/embed/D1tqdCzgWFs64" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/D1tqdCzgWFs64">via GIPHY</a></p>',
}

var q6 = {
	q: 'In "Orange Is the New Black," Piper Chapman was sentenced to serve how much time at Litchfield?',
	a: '12 months',
	b: '15 months',
	c: '24 months',
	d: 'Life sentence',
	answer: '15 months',
	triviaAnsw: 'b',
	correctImg: '<iframe src="https://giphy.com/embed/3oEduO2Ed8WgPPbyJq" width="480" height="269" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/dancing-piper-chapman-alex-vause-3oEduO2Ed8WgPPbyJq">via GIPHY</a></p>',
	incorrectImg: '<iframe src="https://giphy.com/embed/2hAID9tfD5Ghi" width="480" height="388" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/television-orange-is-the-new-black-oitnb-2hAID9tfD5Ghi">via GIPHY</a></p>',
}

var q7 = {
	q: 'Which of D.J. Tanner\'s high school boyfriends returned in Season 1 of "Fuller House"?',
	a: 'Michael Montfort',
	b: 'Nelson Burkhard',
	c: 'Steve Hale',
	d: 'Kevin Gwin',
	answer: 'Steve Hale',
	triviaAnsw: 'c',
	correctImg: '<iframe src="https://giphy.com/embed/l378jKRUCSZUEZ5FC" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/netflix-season-3-full-house-l378jKRUCSZUEZ5FC">via GIPHY</a></p>',
	incorrectImg: '<iframe src="https://giphy.com/embed/3ov9kbcY2eCkydBn0Y" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/netflix-season-3-full-house-3ov9kbcY2eCkydBn0Y">via GIPHY</a></p>',
}

var q8 = {
	q: '"Narcos" documents the life of Pablo Escabar, what country is it set in?',
	a: 'Brazil',
	b: 'Colombia',
	c: 'Mexico',
	d: 'United States',
	answer: 'Colombia',
	triviaAnsw: 'b',
	correctImg: '<iframe src="https://giphy.com/embed/BlxPKxlNWsJJ6" width="480" height="264" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/BlxPKxlNWsJJ6">via GIPHY</a></p>',
	incorrectImg: '<iframe src="https://giphy.com/embed/xUA7b7J6JrhXLy9k64" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/netflix-narcos-pablo-xUA7b7J6JrhXLy9k64">via GIPHY</a></p>',
}

var q9 = {
	q: 'What is the most famous thing Dev has done as an actor on "Master of None"?', 
	a: 'A role as a doctor',
	b: 'A BBQ commerical',
	c: 'A role in "Halloween 13"',
	d: 'A Go-Gurt commercial',
	answer: 'A Go-Gurt commercial',
	triviaAnsw: 'd',
	correctImg: '<iframe src="https://giphy.com/embed/LICfobf0TBUn6" width="480" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/master-of-none-LICfobf0TBUn6">via GIPHY</a></p>',
	incorrectImg: '<iframe src="https://giphy.com/embed/l0Iy1kph1fdh8C2gE" width="480" height="268" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/vulture-l0Iy1kph1fdh8C2gE">via GIPHY</a></p>',
}

var q10 = {
	q: 'On this Netflix series, Jane Fonda and Lily Tomlin move in together when their husbands announce they\'re in love:',
	a: 'Carol and Helen',
	b: 'Jane and Joan',
	c: 'Grace and Frankie',
	d: 'Ruth and Gloria',
	answer: 'Grace and Frankie',
	triviaAnsw: 'c',
	correctImg: '<iframe src="https://giphy.com/embed/l0IyeJFLhI4WGlg08" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/graceandfrankie-netflix-lily-tomlin-l0IyeJFLhI4WGlg08">via GIPHY</a></p>',
	incorrectImg: '<iframe src="https://giphy.com/embed/3o6ZsUrOKJQO0kFjhu" width="480" height="269" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/netflix-lily-tomlin-jane-fonda-grace-and-frankie-3o6ZsUrOKJQO0kFjhu">via GIPHY</a></p>',
}

var triviaQs = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

var intervalId;
var timerRunning = false;
var timer = {
	seconds: 20,
	start: function() {
		if (!timerRunning) {
			$('#seconds').html('20');
			intervalId = setInterval(timer.count, 1000);
			timerRunning = true;
		}
	},
	count: function() {
		timer.seconds--;
		$('#seconds').html(timer.seconds);
		if (timer.seconds === 0) {
			timer.stop();
			timer.reset();
			console.log(userAnswer);
			console.log(count);
			showResults();
		}
	},
	stop: function() {
		clearInterval(intervalId);
		timerRunning = false;
	},
	reset: function () {
		timer.seconds = 20;
	}
}

function startGame() {
	$('#startButton').hide();
	$('.result').hide();
	$('.final').hide();
	$('.game').show();
	correctAnswers = 0;
	incorrectAnswers = 0;
	unanswered = 0;
	count = 0;
	displayQuestion();
}

function displayQuestion() {
	if (count === 10) {
		showFinal();
		clearTimeout(showQ);
	}
	else {
		timer.start();
		$('.game').show();
		$('.result').hide();
		$('.question').html(triviaQs[count].q);
		$('#a').html(triviaQs[count].a);
		$('#b').html(triviaQs[count].b);
		$('#c').html(triviaQs[count].c);
		$('#d').html(triviaQs[count].d);
		console.log(triviaQs[count].q);
		console.log('Correct Answer: ' + triviaQs[count].triviaAnsw);
		console.log('Count: ' + count);
	}

}

function showResults() {
	$('.game').hide();
	$('.result').show();
	if (userAnswer === triviaQs[count].triviaAnsw) {
		$('.result').html('<p>' + '<strong>' + 'You got it, dude!' + '<strong>' + '</p>');
		$('.result').append(triviaQs[count].correctImg);
		correctAnswers++;
	}
	else if (seconds === 0) {
		$('.result').html('<p>' + 'Out of time! The correct answer was ' + '<br />' + '<strong>' + triviaQs[count].answer + '</strong>' + '. </p>');
		$('.result').append(triviaQs[count].incorrectImg);
		unanswered++;
	}
	else if (userAnswer !== triviaQs[count].triviaAnsw) {
		$('.result').html('<p>' + 'Nope! The correct answer was ' + '<br />' + '<strong>' + triviaQs[count].answer + '</strong>' + '. </p>');
		$('.result').append(triviaQs[count].incorrectImg);
		incorrectAnswers++;
	}
	count++;
	if (count < 11) {
		showQ = setTimeout(displayQuestion, (1000 * 5));
	}
}

function showFinal() {
	$('#startButton').show();
	$('.game').hide();
	$('.result').hide();
	$('#correctAnswers').html(correctAnswers);
	$('#incorrectAnswers').html(incorrectAnswers);
	$('#unanswered').html(unanswered);
	$('.final').show();
}

window.onload = function() {
	$('.final').hide();
	$('.game').hide();
}

$('#startButton').click(startGame);

$('.userGuess').click(function() {
	userAnswer = $(this).attr('id');
	timer.stop();
	timer.reset();
	console.log(userAnswer);
	console.log(count);
	showResults();
})


