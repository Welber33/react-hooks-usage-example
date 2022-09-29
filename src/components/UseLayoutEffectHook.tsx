import { useEffect, useLayoutEffect, useRef } from "react"

type Props = {}

export function UseLayoutEffectHook({}: Props){
  const inputRef = useRef<HTMLInputElement>(null)

  useLayoutEffect(() => {
    console.log(inputRef.current?.value)
  }, [])


  return (
    <div>
      Hello I am useLayoutEffectHook
      <input type="text" value="João" style={{ marginLeft: 10, width: 400, height: 50 }}/>
    </div>
  )
}