import { UseCallbackHook } from "./components/UseCallbackHook"
import { UseContextHook } from "./components/UseContextHook"
import { UseEffectHook } from "./components/UseEffectHook"
import { UseLayoutEffectHook } from "./components/UseLayoutEffectHook"
import { UseMemoHook } from "./components/UseMemoHook"
import { UseReducerHook } from "./components/UseReducerHook"
import { UseRefHook } from "./components/UseRefHook"
import { UseStateHook } from "./components/UseStateHook"

function App() {
  return (
    <div>
      <UseStateHook />

      <UseReducerHook />

      <UseEffectHook />

      <UseRefHook />

      <UseLayoutEffectHook />

      <UseContextHook />

      <UseMemoHook />

      <UseCallbackHook />

    </div>

  )
}
export default App
