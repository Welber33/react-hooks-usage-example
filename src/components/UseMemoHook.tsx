import { useMemo, useState } from "react"

interface User {
  name: string;
  login: string;
  avatar_url: string;
}

export function UseMemoHook(){
  const [users, setUsers] = useState<[User]>()

  const names = useMemo(() => users?.map(user => user.name).join(', '), [users])

  return(
    <div>
      Hi, I am useMemoHook
    </div>
  )
}