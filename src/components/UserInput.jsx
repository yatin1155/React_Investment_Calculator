
export default function UserInput({ inputValues, onUpdate }) {


    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input onChange={(event) => onUpdate('initialInvestment', event.target.value)} value={inputValues.initialInvestment} type="number" required />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input onChange={(event) => onUpdate('annualInvestment', event.target.value)} value={inputValues.annualInvestment} type="number" required />
                </p>

            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input onChange={(event) => onUpdate('expectedReturn', event.target.value)} value={inputValues.expectedReturn} type="number" required />
                </p>
                <p>
                    <label>Duration</label>
                    <input onChange={(event) => onUpdate('duration', event.target.value)} value={inputValues.duration} type="number" required />
                </p>

            </div>
        </section>
    )
}