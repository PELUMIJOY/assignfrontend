import { useLocation, Navigate } from "react-router-dom"


export const ProtectRoute = ({children}) => {
    const location = useLocation()
    const isAuthenticated = localStorage.getItem('signature')
   



    if(!isAuthenticated ){
        return (
            <Navigate to="/signup" state={{from:location}}/>
          )
    }
  return children;
}