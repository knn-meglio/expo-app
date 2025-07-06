import { Redirect, Stack } from "expo-router";

const isAuthenticated = false;

export default function ProtectedLayout() {
  if (!isAuthenticated) {
    return <Redirect href="/login" />;
  }
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="modal" options={{ presentation: "modal" }} />
    </Stack>
  );
}
