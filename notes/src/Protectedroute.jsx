import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({ login, user, children }) {
  if (!login || !user) {
    return <Navigate to='/' />
  }

  return children
}
