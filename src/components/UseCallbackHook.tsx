import { useCallback, useMemo, useState } from "react";

interface User {
  name: string;
  login: string;
  avatar_url: string;
}

export function UseCallbackHook(){
  const [users, setUsers] = useState<[User]>()

  const names = useMemo(() => users?.map(user => user.name).join(', '), [users])

  const greeting = useCallback(
    (user: User) => alert(`Hello ${user.name}`), []
  )
  
  return(
    <div>Hi, I am useCallbackHook</div>
  )
}