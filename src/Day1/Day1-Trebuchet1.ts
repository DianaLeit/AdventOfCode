import {readFileSync} from 'fs';

let input: string[] = readFileSync('src/Day1/Day1-Trebuchet.input.txt', 'utf8').split(/\n/);
let sum: number = 0;
input.forEach(element => {
    let matches = element.match(/(\d+)/g);
    let joinedMatches;
    if (matches !== null) {
       joinedMatches = matches.join('').split('');
        sum+= parseInt(joinedMatches[0]+ joinedMatches[joinedMatches.length - 1]);
    }    
});
console.log(sum);

