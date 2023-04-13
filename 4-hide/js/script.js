/*
Al click di un pulsante, deve apparire un alert con un numero random
*/

/*
// const eleContainer = document.querySelector('.container');

// // eleContainer.innerHTML = '<h1>Ciao a tutti</h1><p>un paragrafo qui</p>';
// // eleContainer.innerHTML = 'ciao';

// // eleContainer.prepend('ciao');
// // eleContainer.append(' a ');
// // eleContainer.prepend('tutti');

// const eleTitle = document.createElement('h1');
// eleTitle.innerHTML = 'Sono il titolo da js';
// const eleParagraph = document.createElement('p');
// eleParagraph.innerHTML = 'un paragrafo qui';
// eleContainer.append(eleTitle);
// eleContainer.append('eleParagraph');
*/


const eleBtnRandom = document.querySelector('#btn-random');

eleBtnRandom.addEventListener('click', function() {
	console.log('mi hai cliccato');
	const randomNumber = Math.random();
	alert(randomNumber);
});