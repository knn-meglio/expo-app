import { useColorScheme } from "@/hooks/customs/useColorScheme";
import { Drawer } from "expo-router/drawer";
import { Platform } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function ProfileDrawerLayout() {
  const { isDarkColorScheme } = useColorScheme();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerShown: true,
          drawerStyle: {
            backgroundColor: isDarkColorScheme ? "#171717" : "#ffffff",
          },
          drawerActiveTintColor: isDarkColorScheme ? "#ffffff" : "#171717",
          drawerInactiveTintColor: isDarkColorScheme ? "#737373" : "#737373",
          headerTintColor: isDarkColorScheme ? "#ffffff" : "#171717",
          headerStyle: {
            backgroundColor: isDarkColorScheme ? "#171717" : "#ffffff",
          },
          ...(Platform.OS === "web" && {
            drawerType: "permanent",
          }),
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            title: "Profile",
            drawerLabel: "Profile",
          }}
        />
        <Drawer.Screen
          name="settings"
          options={{
            title: "Settings",
            drawerLabel: "Settings",
          }}
        />
        <Drawer.Screen
          name="account"
          options={{
            title: "Account",
            drawerLabel: "Account",
          }}
        />
        <Drawer.Screen
          name="help"
          options={{
            title: "Help & Support",
            drawerLabel: "Help & Support",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
