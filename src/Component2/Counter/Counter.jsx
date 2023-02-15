import React, { useState } from "react";
import { Counterdecrese } from "./Counterdecrese";
import { CounterIncrese } from "./CounterIncrese";

export const Counter = () => {
  let [count, setCount] = useState(0);
 
  const counterAdjust=(value)=>{
    
     setCount(count+value )
    
  }


  return (
    <div>
      <CounterIncrese counterAdjust={counterAdjust} />
      <h1>{count}</h1>
      
      <Counterdecrese counterAdjust={counterAdjust} />
    </div>
  );
};
