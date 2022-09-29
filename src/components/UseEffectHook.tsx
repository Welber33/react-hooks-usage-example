import axios from "axios"
import { useEffect, useState } from "react"

type Props = {}

export function UseEffectHook({}: Props) {
  const [count, setCount] = useState<number>(0)
  const [data, setData] = useState<string>("")
  useEffect(() => {
    console.log("We are inside useEffect hook!")
    axios.get("https://jsonplaceholder.typicode.com/comments")
    .then(response => {
      setData(response.data[2].email)
    })
  }, [])
  
  return (
    <div>
      Hi, I am useEffectHook
      <h1>{data}</h1>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Add
      </button>
    </div>
  )
}