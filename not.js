let score = 55;

if (score != 60){
    console.log("invalid");
}
else{
    console.log("valid");
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the score: ', (input) => {
    let score = parseInt(input);

    if (isNaN(score) || score > 100 || score < 0) {
        console.log("Error: Invalid Score!");
    } else if (score >= 85) {
        console.log("You got an A");
    } else if (score >= 75) {
        console.log("You got a B");
    } else if (score >= 65) {
        console.log("You got a C");
    } else if (score >= 55) {
        console.log("You got a C-");
    } else if (score >= 45) {
        console.log("You got a D");
    } else if (score >= 35) {
        console.log("You got an E");
    } else {
        console.log("You got an F");
    }

    rl.close();
});
