import { useReducer } from "react";

const initialState = {count:0}

function reducer(state,action){
  switch(action.type){
    case "increase":
      return {count:state.count+1};
    case "decrease":
      return {count:state.count-1}
    default:
      return state
  }

}




// counter app using useReducer
function App(){
  const [state,dispatch] =  useReducer(reducer,initialState)

  function handleIncrease(){
    dispatch({type:"increase"})
  }
  function handleDecrease(){
    dispatch({type:"decrease"})
  }
  return(
    <>
      <h1>Counter example using useReducer</h1>
      <h3>{state.count}</h3>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>decrease</button>
    </>
  )
}

export default App;