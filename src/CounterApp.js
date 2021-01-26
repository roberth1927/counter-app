import React, {useState} from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({value = 10}) => {

  const [counter, setCounter] = useState(value);


  //handleADD
  const handleAdd = () => {
    setCounter(counter + 1)
    //setCounter( (c) => c+1 )

  }

  const handleMenos = () => {
    setCounter(counter - 1)
  }

  const handleReset = () => {
    setCounter(value)
  }


  return (
    <>
      <h1>CounterApp</h1>
      <h2> {counter} </h2>

      <button onClick={handleAdd}>+1</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleMenos}>-1</button>


    </>
  )
}
CounterApp.defaultProps = {
  value: PropTypes.number
}

export default CounterApp; 
