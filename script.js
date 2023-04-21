const phrases = [
    'Oh viado',
    'Tenho que parar de te chamar de viado',
    'Essa mulher é L O U C A',
    '*sons incompreensíveis de gemido, choro, supiro* seguidos de um "vou mmt"', 
    'Sou muito engraçada',
    'Sou mais engraçada que tu',
    'Ai camila',
    'Me diz que vai dar tudo certo *-*',
    'Mamae',
    'Tem café?'
];
const btn = document.querySelector('.btn');

function randomPhrase() {
    let randomNumber = parseInt((Math.random() * 10));
    const random = document.getElementById('random');
    random.innerHTML = `" ${phrases[randomNumber]} "`;
}

btn.addEventListener('click', randomPhrase);
console.log(phrases);