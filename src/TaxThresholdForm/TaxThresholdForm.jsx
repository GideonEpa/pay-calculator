export default function TaxThresholdForm({setTaxThreshold}) {
    return (
        <form>
            <div id="taxThresholdChoice" onChange={e => setTaxThreshold(e.target.value)}>
                <p>Are you claiming the Tax-Free Threshold?</p>
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
    )
}