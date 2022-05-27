import { useState } from "react";
import Statistics from "./components/Statistics";
import Button from "./components/Button";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={() => setGood(good + 1)} text={'Good'}/>
      <Button onClick={() => setNeutral(neutral + 1)} text={'Neutral'}/>
      <Button onClick={() => setBad(bad + 1)} text={'Bad'}/>
      <h1>Statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  );
}

export default App;
