
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({ user, children, adminOnly }) {
  if (!user) {
    return <Navigate to="/" />
  } else if (adminOnly && user.role !== 'admin') {
    return <h2>Access Denied - Nuk ke leje!</h2>
  }
  return children
}