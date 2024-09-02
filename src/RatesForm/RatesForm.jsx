export default function RatesForm({
    setWeekdayRate,
    setSaturdayRate,
    setSundayRate,
    setOvertimeRate,
    weekdayRate,
    saturdayRate,
    sundayRate,
    overtimeRate,
}){
    
    return (
        <form id="ratesForm" className="ratesForm">
            <p>Enter your payrate for each category
            (currently set to Ambient-Afternoon rates):  (/hr)</p>
            <label htmlFor="weekdayRate">Weekday Rate</label>
            <input
                id="weekdayRate"
                name="weekdayRate"
                type="number"
                min={0}
                value={weekdayRate}
                onChange={e => setWeekdayRate(e.target.value)}
            />
            <label htmlFor="saturdayRate">Saturday Rate</label>
            <input
                id="saturdayRate"
                type="number"
                min={0}
                value={saturdayRate}
                onChange={e => setSaturdayRate(e.target.value)}
            />
            <label htmlFor="sundayRate">Sunday Rate</label>
            <input
                id="sundayRate"
                name="sundayRate"
                type="number"
                min={0}
                value={sundayRate}
                onChange={e => setSundayRate(e.target.value)}
            />
            <label htmlFor="overtimeRate">Overtime Rate</label>
            <input
                id="overtimeRate"
                name="overtimeRate"
                type="number"
                min={0}
                value={overtimeRate}
                onChange={e => setOvertimeRate(e.target.value)}
            />
        </form>
    )
}