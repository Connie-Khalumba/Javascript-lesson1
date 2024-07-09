function calculateBMi (weight, height){
    let bmi = weight / (height * height)
    return bmi;
}

function interpretBMI(bmi) {
    if (bmi < 18.5) {
        return "Underweight"
    }
    else if (bmi < 25){
        return "Overweight"
    }
    else if (bmi < 30){
        return "Overweight"
    }
    else {
        return "Obes"
    }
}

let weight = 70; //in Kg
let height = 1.75;  // in meters

let bmi = calculateBMi(weight, height)
console.log("BMI:", bmi);
console.log("Interpretation", interpretBMI(bmi));
