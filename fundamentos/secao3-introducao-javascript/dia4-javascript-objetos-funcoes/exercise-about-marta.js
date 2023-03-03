let player = {
    firstName: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3
    }
}

console.log('A jogadora', player.firstName, player.lastName, 'tem', player.age, 'anos de idade.');

player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

let wins = 0;
for (let index = 0; index < player['bestInTheWorld'].length; index += 1) {
    if (player['bestInTheWorld'].length > wins) {
        wins += 1;
    }
}

console.log('A jogadora', player.firstName, player.lastName, 'foi eleita a melhor do mundo', wins, 'vezes.');