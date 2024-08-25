import { useState } from "react"
import Results from "../results/Results.jsx";

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
                <form id="ratesForm" className="ratesForm">
                    <h3>Payrates (/hr)</h3>
                    <label htmlFor="weekdayRate">Weekday</label>
                    <input
                        id="weekdayRate"
                        name="weekdayRate"
                        type="number"
                        min={0}
                        value={weekdayRate}
                        onChange={e => setWeekdayRate(e.target.value)}
                    />
                    <label htmlFor="saturdayRate">Saturday</label>
                    <input
                        id="saturdayRate"
                        type="number"
                        min={0}
                        value={saturdayRate}
                        onChange={e => setSaturdayRate(e.target.value)}
                    />
                    <label htmlFor="sundayRate">Sunday</label>
                    <input
                        id="sundayRate"
                        name="sundayRate"
                        type="number"
                        min={0}
                        value={sundayRate}
                        onChange={e => setSundayRate(e.target.value)}
                    />
                    <label htmlFor="overtimeRate">Overtime</label>
                    <input
                        id="overtimeRate"
                        name="overtimeRate"
                        type="number"
                        min={0}
                        value={overtimeRate}
                        onChange={e => setOvertimeRate(e.target.value)}
                    />
                </form>
            
                <form id="hoursForm">
                    <h3>Hours worked</h3>
                    <label htmlFor="weekdayHours">Weekday</label>
                    <input
                        id="weekdayHours"
                        name="weekdayHours"
                        value={weekdayHours}
                        onChange={e => setWeekdayHours(e.target.value)}
                        type="number"
                        min={0}
                    />
                    <label htmlFor="saturdayHours">Saturday</label>
                    <input
                        id="saturdayHours"
                        name="saturdayHours"
                        value={saturdayHours}
                        onChange={e => setSaturdayHours(e.target.value)}
                        type="number"
                        min={0}
                    />
                    <label htmlFor="sundayHours">Sunday</label>
                    <input
                        id="sundayHours"
                        name="sundayHours"
                        value={sundayHours}
                        onChange={e => setSundayHours(e.target.value)}
                        type="number"
                        min={0}
                    />
                    <label htmlFor="overtimeHours">Overtime</label>
                    <input
                        id="overtimeHours"
                        name="overtimeHours"
                        value={overtimeHours}
                        onChange={e => setOvertimeHours(e.target.value)}
                        type="number"
                        min={0}
                    />
                </form>
                <form>
                    <div id="taxThresholdChoice" onChange={e => setTaxThreshold(e.target.value)}>
                        <h3>Tax-Free Threshold</h3>
                        <div className="yes">
                            <label htmlFor="yes">Yes</label>
                            <input
                                type="radio"
                                value={true}
                                name="taxThreshold"
                                id="yes"
                            />
                        </div>
                        <div className="no">
                            <label htmlFor="no">No</label>
                            <input
                                type="radio"
                                value={false}
                                name="taxThreshold"
                                id="no"
                            />
                        </div>
                    </div>
                </form>
                <Results
                    hours={hours}
                    rates={rates}
                    taxThreshold={taxThreshold}
                />
            </div>
        </div>
    )
};