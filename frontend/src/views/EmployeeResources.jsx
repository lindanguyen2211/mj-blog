import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import EmployeeDashboard from "../components/EmployeeDashboard";

const EmployeeResources = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  return (
    <div>
      {isLoggedIn ? (
        <EmployeeDashboard onLogout={setIsLoggedIn} />
      ) : (
        <LoginForm onLogin={setIsLoggedIn} />
      )}
    </div>
  );
};

export default EmployeeResources;
