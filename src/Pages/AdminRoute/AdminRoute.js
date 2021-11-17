import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../../Hooks/useAuth";

const AdminRoute = ({ children, ...rest }) => {
  const { user, admin } = useAuth();
  if (!admin) {
    return (
      <div className="flex justify-center">
        <div className="flex items-center justify-center ">
          <div className="w-20 h-20 border-3 border-gray-900 rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email && admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/dashboard",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default AdminRoute;
