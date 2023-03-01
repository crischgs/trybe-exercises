let word = 'tryber';
let inverse = '';

for (let index = word.length -1; index >= 0; index -= 1) {
    inverse = inverse + (word[index]);
}

console.log(inverse);