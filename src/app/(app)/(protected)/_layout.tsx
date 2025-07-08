import { Stack } from "expo-router";

export default function ProtectedLayout() {
  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen name="media/[id]/index" />
      <Stack.Screen
        name="media/favorite/index"
        options={{ headerShown: true }}
      />
    </Stack>
  );
}
