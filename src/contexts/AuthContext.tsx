import { createContext } from "react";
type AuthContextType = {
  isLoggedIn: boolean;
  loading: boolean;
  login: (token: string) => void;
  logout: () => void;
};
const AuthContext = createContext<AuthContextType | undefined>(undefined);
export default AuthContext;
