import React from "react";
import useAuth from "../../Hooks/useAuth";

const Dashboardhome = () => {
  const { user } = useAuth();
  return (
    <div className="lg:flex justify-center">
      <p className="text-3xl text-left font-bold text-gray-700">
        <span className="text-red-500">WELCOME</span> <br />{" "}
        <span className="text-5xl">{user?.displayName}</span>
      </p>
    </div>
  );
};

export default Dashboardhome;
