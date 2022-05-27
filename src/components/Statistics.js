import StatisticLine from "./StatisticLine";

const Statistics = ({good, bad, neutral}) => {
    if(good + bad + neutral === 0){
        return (
            <p>No feedback given.</p>
        );
    }
    return (
        <div>
            <StatisticLine text={'Good'} value={good}/>
            <StatisticLine text={'Neutral'} value={neutral}/>
            <StatisticLine text={'Bad'} value={bad}/>
            <StatisticLine text={'All'} value={good + neutral + bad}/>
            <StatisticLine text={'Average'} value={(good - bad)/ (good + bad + neutral)}/>
            <StatisticLine text={'Positive'} value={good / (good + bad + neutral)}/>
        </div>
    );
}

export default Statistics;