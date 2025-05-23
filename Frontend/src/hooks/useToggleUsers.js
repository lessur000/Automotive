import { useState } from "react"


const useToggleUsers = () => {
  const [usersToggle, setUsersToggle] = useState(false);

  const handleToggle = () => {
    setUsersToggle(!usersToggle)
  }
  return {handleToggle, usersToggle}
}

export default useToggleUsers