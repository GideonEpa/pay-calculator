import { useState } from "react"
import Results from "../results/Results.jsx";

export default function Calculator() {
    const [showResults, setShowResults] = useState(false);

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

    const [weekdayRate, setWeekdayRate] = useState(0);
    const [saturdayRate, setSaturdayRate] = useState(0);
    const [sundayRate, setSundayRate] = useState(0);
    const [overtimeRate, setOvertimeRate] = useState(0);

    const rates = {
        weekday: weekdayRate,
        saturday: saturdayRate,
        sunday: sundayRate,
        overtime: overtimeRate,
    }


    function handleSubmit(e) {
        e.preventDefault()
        setShowResults(true)
    }

    return (
        <div>
            <form id="ratesForm">
                <label htmlFor="weekdayRate">Weekday Rate</label> <br />
                <input
                    id="weekdayRate"
                    type="number"
                    min={0}
                    value={weekdayRate}
                    onChange={e => setWeekdayRate(e.target.value)}
                /> <br />
                <label htmlFor="saturdayRate">Saturday Rate</label> <br />
                <input
                    id="saturdayRate"
                    type="number"
                    min={0}
                    value={saturdayRate}
                    onChange={e => setSaturdayRate(e.target.value)}
                /> <br />
                <label htmlFor="sundayRate">Sunday Rate</label> <br />
                <input
                    id="sundayRate"
                    type="number"
                    min={0}
                    value={sundayRate}
                    onChange={e => setSundayRate(e.target.value)}
                /> <br />
                <label htmlFor="overtimeRate">Overtime Rate</label> <br />
                <input
                    id="overtimeRate"
                    type="number"
                    min={0}
                    value={overtimeRate}
                    onChange={e => setOvertimeRate(e.target.value)}
                /> <br />
            </form>

            <form id="hoursForm" onSubmit={handleSubmit}>
                <label htmlFor="weekdayHours">Weekday Hours</label> <br/>
                <input
                    id="weekdayHours" 
                    value={weekdayHours}
                    onChange={e => setWeekdayHours(e.target.value)} 
                    type="number"
                    min={0}
                /> <br/>
                <label htmlFor="saturdayHours">Saturday Hours</label> <br/>
                <input
                    id="saturdayHours" 
                    value={saturdayHours}
                    onChange={e => setSaturdayHours(e.target.value)} 
                    type="number"
                    min={0}
                /> <br/>
                <label htmlFor="sundayHours">Sunday Hours</label> <br/>
                <input
                    id="sundayHours" 
                    value={sundayHours}
                    onChange={e => setSundayHours(e.target.value)} 
                    type="number"
                    min={0}
                /> <br/>
                <label htmlFor="overtimeHours">Overtime Hours</label> <br/>
                <input
                    id="overtimeHours" 
                    value={overtimeHours}
                    onChange={e => setOvertimeHours(e.target.value)} 
                    type="number"
                    min={0}
                /> <br/>
                <input
                    type="submit"
                />
            </form>
            {showResults && <Results hours={hours} rates={rates} />}
        </div>
    )
};