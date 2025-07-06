import { useAuth } from "@/hooks/customs/useAuth";
import { SplashScreen } from "expo-router";
import { PropsWithChildren, useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function SplashScreenHandler({ children }: PropsWithChildren) {
  const { loading } = useAuth();

  useEffect(() => {
    if (loading) {
      return;
    }

    SplashScreen.hideAsync();
  }, [loading]);

  return children;
}
