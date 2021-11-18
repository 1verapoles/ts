import {useState} from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0);

  const resetCounter = () => {
    if (count === 0) {
      alert("Counter can`t be negative!");
      return;
    }
    setCount(prevCount => prevCount - 1);
  };

  const even = count % 2;

  return (
    <div className="wrapper" style={{backgroundColor: even ? "#ccc" : "blue"}}>
      <div className="counter">{count}</div>
      <div className="even">{even ? "Введено нечетное число" : "Введено четное число"}</div>
      <div className="btn-wrapper">
        <div className="btn" onClick={resetCounter}>-</div>
        <div className="btn" onClick={() => setCount(0)}>Reset</div>
        <div className="btn" onClick={() => setCount(prevCount => prevCount + 1)}>+</div>
      </div>
    </div>
  );
}

export default App;
