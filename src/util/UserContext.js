import { useState,createContext} from "react"

export const AppContext=createContext(null);

const UserContext = ({children}) => {
const[signup,setSignup]=useState(false);

  return (
<AppContext.Provider value={{signup,setSignup}}>
{children}
</AppContext.Provider>
  )
}
export default UserContext;
<UserContext>
    <signup/>
</UserContext>