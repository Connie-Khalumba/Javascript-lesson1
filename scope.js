let globalVar = "I'm a global variable";

function demoScope() {
    let localVar = "Im a local variable"
    console.log(globalVar);
    console.log(localVar);
}

demoScope();
console.log(globalVar);

