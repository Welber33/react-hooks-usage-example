import { useReducer } from "react"

type ACTIONTYPE = 
| { type: "increment"; payload: number }
| { type: "decrement"; payload: number}

function reducer(state: {count: number }, action: ACTIONTYPE){
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload }
    case "decrement":
      return { count: state.count - action.payload }
    default:
      throw new Error()
  }
}

export function UseReducerHook() {
  const [state, dispatch] = useReducer(reducer, { 
    count: 0, 
  })

  return (
    <div>
      Hi, I am useReducerHook

      <button onClick={() => dispatch({type: "increment", payload: 1 })}>
        Add
      </button>
      <button onClick={() => dispatch({type: "decrement", payload: 1 })}>
        Minus
      </button>
      {state.count}
    </div>
  )
}