import { useState } from "react";

type Props = {}

export function UseStateHook({}: Props) {
  const [counter, setCounter] = useState<number>(0)
  const [input, setInput] = useState<string>("")

  return (
    <div>
      <h3>Hi, I am useStateHook </h3>
      {counter} <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <input 
        type="text" 
        placeholder="Type something..." 
        value={input}
        onChange={event => setInput(event.target.value)}
      />
      {input}
    </div>
    
  )
}