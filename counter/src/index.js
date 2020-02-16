import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Display = ({counter}) => {
    return(
        <div>{counter}</div>
    )
}

const Button = ({onClick, text}) => {
    return(
        <button onClick={() => onClick(counter + 1)}>{text}</button>
    )
}

const App = (props) => {
    const [counter, setCounter] = useState(0)
    const setToValue = (value) => setCounter(value)

    const handleClick = () => {
        setCounter(counter + 1)
    }

    return (
      <div>
          <Display counter={counter} />
          <Button onClick={() => setToValue(counter + 1)} text='plus' />
          <Button onClick={() => setToValue(0)} text='zero' />
      </div>
    )
  }
  
  let counter = 1

ReactDOM.render(<App />, document.getElementById('root'));

