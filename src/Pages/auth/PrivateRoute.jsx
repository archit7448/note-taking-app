import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const token = localStorage.getItem("token");
  return <>{token !== null ? <Outlet /> : <Navigate to="/signIn" replace />}</>;
};

export { PrivateRoute };
