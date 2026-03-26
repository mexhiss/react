import {Navigate} from 'react-router-dom'

export default function ProtectedRoute({user,children,adminOnly}){
  if(!user){
    return <Navigate to = '/' />
  }if(adminOnly && user.role !=='admin'){
    return <h2>access denied</h2>
  }
  return children
}