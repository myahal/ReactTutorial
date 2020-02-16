import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Display = ({counter}) => {
    return(
        <p>{counter}</p>
    )
}

const Button = ({onClick, text}) => {
    return(
        <button onClick={() => onClick()}>{text}</button>
    )
}

const History = (props) => {
    if (props.allClicks.length === 0) {
      return (
        <div>
          the app is used by pressing the buttons
        </div>
      )
    }
  
    return (
      <div>
        button press history: {props.allClicks.join(' ')}
      </div>
    )
  }
  

const App = () => {
    const [clicks, setClicks] = useState({
        left: 0, right: 0
      })
    const [allClicks, setAll] = useState([])
    
    const handleLeftClick = () => {
        setAll(allClicks.concat('L'))
        setClicks({ 
            ...clicks,
          left: clicks.left + 1, 
        })
      }

    const handleRightClick = () => {
        setAll(allClicks.concat('R'))
        setClicks({ 
            ...clicks,
            right: clicks.right + 1 
        })
      }
  
    return (
      <div>
        <div>
          <Display counter={clicks.left} />
          <Button onClick={() => handleLeftClick()} text='left'/>
          <Button onClick={() => handleRightClick()} text='right'/>
          <Display counter={clicks.right} />
          <History allClicks={allClicks} />
        </div>
      </div>
    )
  }
  
  let counter = 1

ReactDOM.render(<App />, document.getElementById('root'));

