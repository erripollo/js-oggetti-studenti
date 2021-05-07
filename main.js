/* 
Istruzioni:
Creare un oggetto che descriva uno studente, con le seguenti proprietà:
nome,
cognome
età.
Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
Creare un array di oggetti di studenti.
Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età. 
*/


var studente = {
    nome: 'enrico',
    cognome: 'pollone',
    età: 33
}
//console.log(studente);

//Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
for (var key in studente) {
    console.log(studente[key]);
    var el = document.querySelector('.studente');
    el.insertAdjacentHTML('beforeend', 
    `
    <p>${key}: ${studente[key]}</p>
    `
    );
}


//Creare un array di oggetti di studenti.
var studenti = [
    {
        nome: 'enrico',
        cognome: 'pollone',
        età: 33
    },
    {
        nome: 'michael',
        cognome: 'jordan',
        età: 58
    },
    {
        nome: 'lebron',
        cognome: 'james',
        età: 36
    }
]

//Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
console.log('');

var i = 0;
while (i < studenti.length) {
    console.log(studenti[i].nome, studenti[i].cognome);
    var elencoEl = document.querySelector('.elenco > ul');
    elencoEl.insertAdjacentHTML('beforeend', 
    `
    <li>${studenti[i].nome} ${studenti[i].cognome}</li>
    `
    );

    i++
}

//Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età. 
console.log('');

var nuovoStudente = {
    nome: '',
    cognome: '',
    età: 0    
}

setTimeout(function(){
    for (var key in nuovoStudente) {
        var datoStudente = prompt('Insrisci ' + key + ' studente').toLocaleLowerCase()
        nuovoStudente[key] = datoStudente

        var nuovoStudenteEl = document.querySelector('.nuovo_studente');
        nuovoStudenteEl.insertAdjacentHTML('beforeend', 
        `
        <p>${key}: ${nuovoStudente[key]}</p>
        `
        );

    }
    console.log(nuovoStudente);
    
}, 3000);



/* var nuovoStudente = {};

var nomeStudente = prompt('Inserisci nome studente').toLocaleLowerCase();
var cognomeStudente = prompt('Inserisci cognome studente').toLocaleLowerCase();
var etàStudente = Number(prompt('Inserisci età studente'));

nuovoStudente.nome = nomeStudente;
nuovoStudente.cognome = cognomeStudente;
nuovoStudente.età = etàStudente;

console.log(nuovoStudente); */


