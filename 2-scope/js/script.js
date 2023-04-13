/*
Giochiamo con lo scope
*/


let varA = 'A globale';

if (true) {
	let varA = 'A blocco';
	varA = 'ciao da blocco';
	console.log('Console.log da blocco - ' + varA);
}

console.log('Console.log da globale - ' + varA);
