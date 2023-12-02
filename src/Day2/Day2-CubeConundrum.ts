import {readFileSync} from 'fs';

function gameValid(rounds: String[]) {
    let result = true;
    rounds.forEach(round => {
        let balls = round.split(",")
        balls.forEach(ball => {
            let count = parseInt(ball.trim().split(' ')[0]);
            let color = ball.trim().split(' ')[1];
            if (color == "blue" && count > 14 || color == "red" && count > 12 || color == "green" && count > 13) {
                result = false;
            }
        })
    })
    return result;
}

let input: string[] = readFileSync('src/Day2/Day2-CubeConundrum.input.txt', 'utf8').split(/\n/);
input.pop();
console.log(input);
let sum = 0;
input.forEach(line => {
    let game = line.split(":")[0].split(' ')[1];
    let rounds = line.split(':')[1].split('; ');
    if (gameValid(rounds)) {
        sum += parseInt(game) 
    }
})
console.log(sum)


