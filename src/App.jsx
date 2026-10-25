// import React, { useCallback, useState } from "react";
// import Child from "./Child";

// const App = () => {
//   const [count, setCount] = useState(0);
//   const [add, setAdd] = useState(0);

//    const learning = useCallback(()=>{
//    setAdd(add+1)
//     console.log("learning")
//   },[add]);

//   return (
//     <div>
//       <h1>Hello, World!</h1>
//       <div>{count}</div>
//       <div>
//         <button onClick={() => setCount(count+1)}>Click Me</button>
//       </div>
//       <Child  learning={learning} add={add}/>

//       <button onClick={learning}>Click here </button>

//       {add}
//     </div>
//   );
// };

// export default App;

import React, { useCallback, useState , useMemo } from "react";
import Child from "./Child";

const App = () => {
  const [count, setCount] = useState(100);
  const [add, setAdd] = useState(0);

  const multiply = () =>
    useMemo(() => {
      {
        console.log("multiply function called");
        return add * 10;
      }
    },[add]);

  return (
    <div>
      <h1>Hello, World!</h1>

      <div>{multiply()}</div>

      <div>{add}</div>
      <div>
        <button onClick={() => setAdd(add + 1)}>Add</button>
      </div>

      <div>{count} </div>
      <div>
        <button onClick={() => setCount(count - 1)}>Substract</button>
      </div>
    </div>
  );
};

export default App;
