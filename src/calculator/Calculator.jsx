import { useState } from "react"
import Results from "../results/Results.jsx";
import RatesForm from "../RatesForm/RatesForm.jsx";
import HoursForm from "../HoursForm/HoursForm.jsx";
import TaxThresholdForm from "../TaxThresholdForm/TaxThresholdForm.jsx";

export default function Calculator() {
    const [weekdayHours, setWeekdayHours] = useState(0);
    const [saturdayHours, setSaturdayHours] = useState(0);
    const [sundayHours, setSundayHours] = useState(0);
    const [overtimeHours, setOvertimeHours] = useState(0);

    const hours = {
        weekday: weekdayHours,
        saturday: saturdayHours,
        sunday: sundayHours,
        overtime: overtimeHours,
    };

    const [weekdayRate, setWeekdayRate] = useState(55.93);
    const [saturdayRate, setSaturdayRate] = useState(59.58);
    const [sundayRate, setSundayRate] = useState(0);
    const [overtimeRate, setOvertimeRate] = useState(0);

    const rates = {
        weekday: weekdayRate,
        saturday: saturdayRate,
        sunday: sundayRate,
        overtime: overtimeRate,
    }

    const [taxThreshold, setTaxThreshold] = useState();

    return (
        <div className="hero">
            <div className="calculator">
                <RatesForm 
                    setWeekdayRate={setWeekdayRate}
                    setSaturdayRate={setSaturdayRate}
                    setSundayRate={setSundayRate}
                    setOvertimeRate={setOvertimeHours}
                    weekdayRate={weekdayRate}
                    saturdayRate={saturdayRate}
                    sundayRate={sundayRate}
                    overtimeRate={overtimeRate}
                />
            
                <HoursForm 
                    setWeekdayHours={setWeekdayHours}
                    setSaturdayHours={setSaturdayHours}
                    setOvertimeHours={setOvertimeHours}
                    setSundayHours={setSundayHours}
                    weekdayHours={weekdayHours}
                    saturdayHours={saturdayHours}
                    sundayHours={sundayHours}
                    overtimeHours={overtimeHours}
                />
                
                <TaxThresholdForm 
                    setTaxThreshold={setTaxThreshold}
                />

                <Results
                    hours={hours}
                    rates={rates}
                    taxThreshold={taxThreshold}
                />
            </div>
        </div>
    )
};