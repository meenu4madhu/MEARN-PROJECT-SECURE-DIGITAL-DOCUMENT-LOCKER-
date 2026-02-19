import { createContext, useEffect, useState } from "react";

export const routeGuardContext = createContext();

export const GuardProvider = ({ children }) => {
  const [authorised, setAuthorised] = useState(false);
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    const user = sessionStorage.getItem("user");

    if (token && user) {
      const parsedUser = JSON.parse(user);
      setAuthorised(true);
      setRole(parsedUser.role);
    }

    setLoading(false); 
  }, []);

  return (
    <routeGuardContext.Provider
      value={{ authorised, role, loading }}
    >
      {children}
    </routeGuardContext.Provider>
  );
};
