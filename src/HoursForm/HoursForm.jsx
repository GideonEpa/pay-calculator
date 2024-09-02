export default function HoursForm({
    setWeekdayHours,
    setSaturdayHours,
    setSundayHours,
    setOvertimeHours,
    weekdayHours,
    saturdayHours,
    sundayHours,
    overtimeHours
}) {
    return (
        <form id="hoursForm">
            <p>Enter your hours worked for each category:</p>
            <label htmlFor="weekdayHours">Weekday Hours</label>
            <input
                id="weekdayHours"
                name="weekdayHours"
                value={weekdayHours}
                onChange={e => setWeekdayHours(e.target.value)}
                type="number"
                min={0}
            />
            <label htmlFor="saturdayHours">Saturday Hours</label>
            <input
                id="saturdayHours"
                name="saturdayHours"
                value={saturdayHours}
                onChange={e => setSaturdayHours(e.target.value)}
                type="number"
                min={0}
            />
            <label htmlFor="sundayHours">Sunday Hours</label>
            <input
                id="sundayHours"
                name="sundayHours"
                value={sundayHours}
                onChange={e => setSundayHours(e.target.value)}
                type="number"
                min={0}
            />
            <label htmlFor="overtimeHours">Overtime Hours</label>
            <input
                id="overtimeHours"
                name="overtimeHours"
                value={overtimeHours}
                onChange={e => setOvertimeHours(e.target.value)}
                type="number"
                min={0}
            />
        </form>
    )
}