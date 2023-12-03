import { readFileSync } from 'fs';

function isSymbol(char: string): Boolean {
    if (char != "." && Number.isNaN(parseInt(char))) {
        return true;
    }
    return false;
}
// let lines: string[] = readFileSync('src/Day3/test.txt', 'utf8').split(/\n/);
let lines: string[] = readFileSync('src/Day3/Day3-GearRatios.input.txt', 'utf8').split(/\n/);
lines.pop();
let sum = 0;
for (let lineNum = 0; lineNum < lines.length; lineNum++) {
    const line = lines[lineNum];
    let matches = line.matchAll(/(\d+)/g);

    while (true) {
        let match = matches.next();
        if (match.done == true) {
            break;
        }
        const index = match.value.index || 0;
        let number = match.value[0];
        const leftX = index - 1;
        const rightX = index + number.length;
        let isValid = false;
        // console.log(number + " " + lineNum + " " + index)
        // curr line left
        if (index > 0) {
            let charLeft = line[leftX]
            if (isSymbol(charLeft)) {
                isValid = true;
            }
        }
        // curr line right
        if (rightX < line.length) {
            let charRight = line[rightX]
            if (isSymbol(charRight)) {
                // when there is symb on the right
                isValid = true;
            }
        }
        // prev line
        if (lineNum - 1 >= 0) {
            for (let x = leftX; x <= rightX; x++) {
                let lineUp = lines[lineNum - 1];
                if (x >= 0 && x < lineUp.length) {
                    let charUp = lineUp[x];
                    if (isSymbol(charUp)) {
                        isValid = true;
                    }
                }

            }
        }
        // next line
        if (lineNum + 1 < lines.length) {
            for (let x = leftX; x <= rightX; x++) {
                let lineDown = lines[lineNum + 1];
                if (x >= 0 && x < lineDown.length) {
                    let charDown = lineDown[x];
                    if (isSymbol(charDown)) {
                        isValid = true;
                    }
                }
            }
        }
        if (isValid == true) {
            sum += parseInt(number);
            console.log(number);
        }
    }
}
console.log(sum);
