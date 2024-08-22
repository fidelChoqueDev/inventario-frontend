import { Navigate, Outlet } from "react-router-dom";

interface Props {
  isAuthenticated: boolean;
  children?: React.ReactNode;
  redirectTo?: string;
}

export default function ProtectedRoute({
  isAuthenticated,
  children,
  redirectTo = "/",
}: Props) {
  if (!isAuthenticated) {
    return <Navigate to={redirectTo} />;
  }

  return children ? children : <Outlet />;
}
