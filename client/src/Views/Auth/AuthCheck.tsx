import React, { ReactNode } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../features/store/store";
import { Navigate } from "react-router-dom";

const AuthCheck = ({ children }: { children: ReactNode }) => {
  const { isLoggedIn, loadingState } = useSelector(
    (state: RootState) => state.user
  );

  const token = localStorage.getItem("auth_token");
  return !token || (!isLoggedIn && loadingState === "failed") ? (
    <Navigate to="/login" />
  ) : (
    children
  );
};

export default AuthCheck;
