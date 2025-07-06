import { useRouter } from "expo-router";
import { PropsWithChildren, useState } from "react";
import AuthContext from "../contexts/AuthContext";

const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);

  const login = (): void => {
    setIsLoggedIn(true);
    router.replace("/");
  };

  const logout: () => void = () => {
    setIsLoggedIn(false);
    router.replace("/signin");
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
