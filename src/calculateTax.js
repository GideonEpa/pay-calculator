export function calculateTaxWithTaxThreshold(grossIncome) {
    if (grossIncome <= 361) {
        return 0;
    } else if (grossIncome <= 500) {
        return Math.round(grossIncome * 0.1600 - 57.8462);
    } else if (grossIncome <= 625) {
        return Math.round(grossIncome * 0.2600 - 107.8462);
    } else if (grossIncome <= 721) {
        return Math.round(grossIncome * 0.1800 - 57.8462);
    } else if (grossIncome <= 865) {
        return Math.round(grossIncome * 0.1890 - 64.3365);
    } else if (grossIncome <= 1282) {
        return Math.round(grossIncome * 0.3227 - 180.0385);
    } else if (grossIncome <= 2596) {
        return Math.round(grossIncome * 0.3200 - 176.5769);
    } else if (grossIncome <= 3653) {
        return Math.round(grossIncome * 0.3900 - 358.3077);
    } else if (grossIncome > 3653) {
        return Math.round(grossIncome * 0.4700 - 650.6154);
    } else {
        console.log("Unexpected: Reached end of else statement")
    }
}

export function calculateTaxWithoutTaxThreshold(grossIncome) {
    if (grossIncome <= 150) {
        return Math.round(grossIncome * 0.1600 - 0.1600);
    } else if (grossIncome <= 371) {
        return Math.round(grossIncome * 0.2117 - 7.7550);
    } else if (grossIncome <= 515) {
        return Math.round(grossIncome * 0.1890 - (-0.6702));
    } else if (grossIncome <= 932) {
        return Math.round(grossIncome * 0.3227 - 68.2367);
    } else if (grossIncome <= 2246) {
        return Math.round(grossIncome * 0.3200 - 65.7202);
    } else if (grossIncome <= 3303) {
        return Math.round(grossIncome * 0.3900 - 222.9510);
    } else if (grossIncome > 3303) {

        return Math.round(grossIncome * 0.4700 - 487.2857);
    } else {
        console.log("Unexpected: Reached end of else statement")
    }
}