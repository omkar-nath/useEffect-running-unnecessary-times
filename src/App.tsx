import { FC, useEffect, useState } from 'react';

import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  const [count1, setCount1] = useState<number>(0);
  const [count2, setCount2] = useState<number>(0);

  //useEffect(()=>{

  //console.log("[useEffect 1]I am running again and again creating multiple timers and deleting them")
  //const timer = setInterval(()=>{
  //    setCount1(count1+1);
  //  },1000)

  //   return ()=>{
  //   console.log("Unmounting and deleting the timer", {timer});

  // clearInterval(timer);
  // }
  //},[count1])

  useEffect(() => {
    console.log('I will run just once');

    const timer = setInterval(() => {
      setCount2((prev) => prev + 1);
    }, 1000);

    return () => {
      console.log('Unmounting and deleting the timer', { timer });

      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <h1>Hello {name}!</h1>
      <p>Count 1: {count1}</p>
      <p> Count 2: {count2}</p>
    </div>
  );
};
