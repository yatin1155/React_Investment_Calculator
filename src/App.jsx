import { useState } from "react"
import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results"

const DEFAULT_USER_INPUT = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10
}

function App() {
  const [userInput, setUserInput] = useState(DEFAULT_USER_INPUT)

  const inputIsValid = userInput.duration >= 1
  const handleChange = (inputIdentifier, newValue) => {
    setUserInput(prevUserState => {
      return {
        ...prevUserState,
        [inputIdentifier]: +newValue
      }
    })

  }
  return (
    <>
      <Header></Header>
      <UserInput inputValues={userInput} onUpdate={handleChange}></UserInput>
      {!inputIsValid && (<p className="center">Please enter duration greater than Zero.</p>)}
      {inputIsValid && <Results inputValues={userInput}></Results>}
    </>
  )
}

export default App
