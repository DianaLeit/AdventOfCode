import { readFileSync } from 'fs';

let lines: string[] = readFileSync('src/Day4/main.input.txt', 'utf8').split(/\n/);
lines.pop();

function contains(arr: String[], el: String): Boolean {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (el === element) {
            return true;
        }
    }
    return false;
}

function intersection(arr1: String[], arr2: String[]): number {
    let result = 0;
    for (let index = 0; index < arr1.length; index++) {
        const el = arr1[index];
        if (contains(arr2, el)) {
            result += 1;
        }
    }
    return result;
}
function convertor(num: number): number {
    if (num == 0) {
        return 0
    }
    return Math.pow(2, num - 1);
}
let sum = 0;
lines.forEach(line => {
    let numbers = line.split(":")[1];
    let winningNumbers = numbers.split("|")[0];
    let myNumbers = numbers.split("|")[1];
    let winningNumberArray = winningNumbers.trim().split(" ");
    let myNumberArray = myNumbers.trim().split(" ").filter(Number);
    let intersectionAmount = intersection(winningNumberArray, myNumberArray);
    let result = convertor(intersectionAmount);
    sum +=result;
})
    console.log(sum);
