import { Navigate } from "react-router-dom";

export const PrivateRouter = ({
  Component,
  fallBackPath,
  isAllowed,
  redirectPath,
}) => {
  if (!!isAllowed) {
    return <Navigate to={redirectPath || fallBackPath} />;
  }
  return Component;
};
