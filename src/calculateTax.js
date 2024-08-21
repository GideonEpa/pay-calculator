export function calculateTax(grossIncome) {
    let taxWitheld = 0;
    if (grossIncome <= 500) {
        taxWitheld = grossIncome * 0.1600 - 57.8462;
    } else if (grossIncome <= 625) {
        taxWitheld = grossIncome * 0.2600 - 107.8462;
    } else if (grossIncome <= 721) {
        taxWitheld = grossIncome * 0.1800 - 57.8462;
    } else if (grossIncome <= 865) {
        taxWitheld = grossIncome * 0.1890 - 64.3365;
    } else if (grossIncome <= 1282) {
        taxWitheld = grossIncome * 0.3227 - 180.0385;
    } else if (grossIncome <= 2596) {
        taxWitheld = grossIncome * 0.3200 - 176.5769;
    } else if (grossIncome <= 3653) {
        taxWitheld = grossIncome * 0.3900 - 358.3077;
    } else if (grossIncome > 3653) {
        taxWitheld = grossIncome * 0.4700 - 650.6154;
    }

    return Math.round(taxWitheld);
}