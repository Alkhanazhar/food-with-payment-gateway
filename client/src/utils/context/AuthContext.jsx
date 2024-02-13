import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token && user == null) {
      axios
        .post("/profile", { token })
        .then((response) => setUser(response.data));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
const useAuthContext = () => {
  return useContext(AuthContext);
};
export { useAuthContext, AuthContextProvider };
