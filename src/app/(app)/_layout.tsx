import { useAuth } from "@/hooks/customs/useAuth";
import { Stack } from "expo-router";

export default function ProtectedLayout() {
  const { isLoggedIn } = useAuth();

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Protected guard={!isLoggedIn}>
        <Stack.Screen name="(tabs)" options={{ animation: "none" }} />
        <Stack.Screen name="modal" options={{ presentation: "modal" }} />
      </Stack.Protected>

      <Stack.Screen name="(auth)/signin" options={{ animation: "none" }} />
    </Stack>
  );
}
