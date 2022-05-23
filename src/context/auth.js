import { createContext } from "react/cjs/react.production.min";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};
