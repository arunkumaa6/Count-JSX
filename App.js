 import React,{useState} from "react";


function App() {

  const [count,updateCount]=useState(0);

  return (
    <div>
      <h2>Click the button add count {count}</h2>
      <button onClick={()=>updateCount(count + 1)}>Click me</button>
    </div>
  );
}

export default App;
