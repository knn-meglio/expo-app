import { BellRing, Home, MessageCircle, User } from "@/assets/icons";
import HapticTab from "@/components/atoms/HapticTab";
import BlurTabbarBackground from "@/components/atoms/TabbarBackground";
import { ThemeToggle } from "@/components/atoms/ThemeToggle";
import { ThemedText } from "@/components/atoms/ThemedText";
import { useColorScheme } from "@/hooks/customs/useColorScheme";
import { cn } from "@/utils/cn";
import { Tabs } from "expo-router";
import { Platform } from "react-native";

export default function Layout() {
  const { isDarkColorScheme } = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerRight: () => <ThemeToggle />,
        animation: "fade",
        tabBarButton: HapticTab,
        tabBarBackground: Platform.select({
          ios: BlurTabbarBackground,
          default: undefined,
        }),
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
          },
          default: {},
        }),
        ...(Platform.OS === "web" && {
          tabBarPosition: "left",
          tabBarVariant: "material",
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: () => (
            <ThemedText className="text-2xl font-bold">LENZ</ThemedText>
          ),
          tabBarLabel: ({ focused }) => (
            <ThemedText
              className={cn("text-gray-500 text-xs", {
                "text-gray-900": focused,
                "text-gray-400": isDarkColorScheme,
                "text-white": focused && isDarkColorScheme,
              })}
            >
              Home
            </ThemedText>
          ),
          tabBarIcon: ({ size, focused }) => {
            return (
              <Home
                className={cn("text-gray-500", {
                  "text-gray-900": focused,
                  "text-gray-400": isDarkColorScheme,
                  "text-white": focused && isDarkColorScheme,
                })}
                size={size}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          tabBarLabel: ({ focused }) => (
            <ThemedText
              className={cn("text-gray-500 text-xs", {
                "text-gray-900": focused,
                "text-gray-400": isDarkColorScheme,
                "text-white": focused && isDarkColorScheme,
              })}
            >
              Chat
            </ThemedText>
          ),
          tabBarIcon: ({ size, focused }) => {
            return (
              <MessageCircle
                className={cn("text-gray-500", {
                  "text-gray-900": focused,
                  "text-gray-400": isDarkColorScheme,
                  "text-white": focused && isDarkColorScheme,
                })}
                size={size}
              />
            );
          },
          tabBarBadge: 4,
        }}
      />
      <Tabs.Screen
        name="notification"
        options={{
          tabBarLabel: ({ focused }) => (
            <ThemedText
              className={cn("text-gray-500 text-xs", {
                "text-gray-900": focused,
                "text-gray-400": isDarkColorScheme,
                "text-white": focused && isDarkColorScheme,
              })}
            >
              Notifications
            </ThemedText>
          ),
          tabBarIcon: ({ size, focused }) => {
            return (
              <BellRing
                className={cn("text-gray-500", {
                  "text-gray-900": focused,
                  "text-gray-400": isDarkColorScheme,
                  "text-white": focused && isDarkColorScheme,
                })}
                size={size}
              />
            );
          },
          tabBarBadge: 4,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) => (
            <ThemedText
              className={cn("text-gray-500 text-xs", {
                "text-gray-900": focused,
                "text-gray-400": isDarkColorScheme,
                "text-white": focused && isDarkColorScheme,
              })}
            >
              Profile
            </ThemedText>
          ),
          tabBarIcon: ({ size, focused }) => {
            return (
              <User
                className={cn("text-gray-500", {
                  "text-gray-900": focused,
                  "text-gray-400": isDarkColorScheme,
                  "text-white": focused && isDarkColorScheme,
                })}
                size={size}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="camera"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
