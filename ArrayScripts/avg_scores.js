
let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];
function getAverage(scores) {
    if (scores.length == 0) {
        return 0;
    }
    if (scores.length == 1) {
        return scores[0];
    }
    let total = 0;
    for (let i = 0; i < scores.length; i++) {
        total += scores[i];
    }
    let average = total / scores.length;
    return average;
}
let myAverage = getAverage(myScores);
console.log("My average score is: " + myAverage);
let yourAverage = getAverage(yourScores);
console.log("Your average score is: " + yourAverage);

let num = 1;

for (let i = 0; i <= 3; i++) {
    num = num * 2;

}
console.log(num);