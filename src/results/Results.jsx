import { calculateTax } from "../calculateTax";

export default function Results({hours, rates}) {
    const weekdayGross = hours.weekday * rates.weekday;
    const saturdayGross = hours.saturday * rates.saturday;
    const sundayGross = hours.sunday * rates.sunday;
    const overtimeGross = hours.overtime * rates.overtime;

    const grossIncome = Math.round(weekdayGross + saturdayGross + sundayGross + overtimeGross);
    const tax = calculateTax(grossIncome);


    return (
        <>
            <h2>{grossIncome}</h2>
            <h3>{tax}</h3>
        </>
    )
}