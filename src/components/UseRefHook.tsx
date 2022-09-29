import { useRef } from "react"

type Props = {}

export function UseRefHook({}: Props){
  const inputRef = useRef<HTMLInputElement>(null)

  function onCLick(){
    if(inputRef.current) console.log(inputRef.current.value)
  }

  return (
    <div>
      Hello I am useRefHook
      <input type="text" placeholder="Type a name..." ref={inputRef} />
      <button onClick={onCLick}>Change the name</button>
      <h1>{inputRef.current?.value}</h1>
    </div>
  )
}