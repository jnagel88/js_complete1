/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

// initial Variable definitions, and game initialize
var scores, roundscore, activeplayer, gameplaying;

init();

var lastdice;

// Dice roller
document.querySelector('.btn-roll').addEventListener('click', function() {
	if (gameplaying) {
		// 1. random number
	var dice = Math.floor(Math.random() * 6 + 1);

	// 2. display the result
	var diceDOM = document.querySelector('.dice')
	diceDOM.style.display = 'block';
	diceDOM.src = 'dice-' + dice + '.png';

		//player loses dice score if they roll two 6's
		if (dice === 6 && lastdice === 6) {
			//player loses score
			scores[activeplayer] = 0;
			document.querySelector('#score-' + activeplayer).textContent = '0';
			nextPlayer();
		} else if (dice !== 1) {
			// add score
			roundscore += dice;
			document.querySelector('#current-'+ activeplayer).textContent = roundscore;
			} else {
			// next player, round score 0
			nextPlayer();
			}

		lastdice = dice;
	}

});

//add score on hold click
document.querySelector('.btn-hold').addEventListener('click', function(){
	if (gameplaying) {
	//add current score to global score
		scores[activeplayer] += roundscore;

		//update the UI
		document.querySelector('#score-' + activeplayer).textContent = scores[activeplayer];

		//check if player won the game
		if (scores[activeplayer] >= 20) {
			//flag for win
			document.querySelector('#name-' + activeplayer).textContent = 'WINNER!';
			document.querySelector('.dice').style.display = 'none';
			document.querySelector('.btn-roll').style.display = 'none';
			document.querySelector('.btn-hold').style.display = 'none';
			document.querySelector('.player-' + activeplayer + '-panel').classList.add('winner');
			document.querySelector('.player-' + activeplayer + '-panel').classList.remove('active');
			gameplaying = false;
		} else {
		//switch player
		nextPlayer();
		}

	}
	

});


function nextPlayer(){
	// next player, round score 0
		activeplayer === 0 ? activeplayer = 1 :activeplayer = 0;
		roundscore = 0;

		document.getElementById('current-0').textContent = '0';
		document.getElementById('current-1').textContent = '0';
		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');

		// document.querySelector('.player-0-panel').classList.remove('active');
		// document.querySelector('.player-1-panel').classList.add('active');

		document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
	scores = [0, 0];
	roundscore = 0;	
	activeplayer = 0;
	gameplaying = true;
	document.querySelector('.dice').style.display = 'none';

	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	document.getElementById('name-0').textContent = 'Player 1';
	document.getElementById('name-1').textContent = 'Player 2';
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.add('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.btn-roll').style.display = 'block';
	document.querySelector('.btn-hold').style.display = 'block';

}






///////////////////////////////////////////////////////////////////////
//updating rules challenge
///////////////////////////////////////////////////////////////////////










// document.querySelector('#current-'+ activePlayer).textContent = dice;
// alt method to utilize HTML elements in the output.
// document.querySelector('#current-'+ activePlayer).innerHTML = '<em>' + dice + '</em>';
// var x= document.querySelector('#score-0').textContent;