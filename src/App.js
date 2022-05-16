import { useEffect, useState } from 'react';
import Button from './components/Button/Button';
import FormattedTime from './components/FormattedTime/FormattedTime';

const App = () => {
  
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(null);

  useEffect (() => {
    let stopwatch = null;

    if(start) {
      stopwatch = setInterval(() => {
        setTime(prevTime => prevTime + 1)
      }, 1)
    }

    return() => {
      if(stopwatch) clearInterval(stopwatch)
    };
  }, [start]);

  return (
    <div>
        <FormattedTime time={time} />
        <Button setTime={setTime} setStart={setStart}></Button>
    </div>
  );
}

export default App;


