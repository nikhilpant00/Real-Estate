import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = ({isLogin}) => {
//   let auth = { token: true };
  return isLogin ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
