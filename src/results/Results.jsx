import { 
    calculateTaxWithoutTaxThreshold, 
    calculateTaxWithTaxThreshold } from "../calculateTax.js";

export default function Results({
    hours,
    rates,
    taxThreshold
}) {
    const weekdayGross = hours.weekday * rates.weekday;
    const saturdayGross = hours.saturday * rates.saturday;
    const sundayGross = hours.sunday * rates.sunday;
    const overtimeGross = hours.overtime * rates.overtime;

    const grossIncome = Math.round(weekdayGross + saturdayGross + sundayGross + overtimeGross);
    let taxWithheld = 0;
    let netIncome = 0;

    if (taxThreshold) {
        taxThreshold === "true" ? taxWithheld = calculateTaxWithTaxThreshold(grossIncome) : taxWithheld = calculateTaxWithoutTaxThreshold(grossIncome)
        netIncome = grossIncome - taxWithheld;
    } 
    
    return (
        <div className="results">
            <h4>Gross Income: ${grossIncome}</h4>
            <h4>Tax Witheld: ${taxWithheld}</h4>
            <h4>Net Income: ${netIncome}</h4>
            <p>*This calculator does not account for any 
            student loans, MediCare levy 
            or Union contributions</p>
        </div>
    )
}