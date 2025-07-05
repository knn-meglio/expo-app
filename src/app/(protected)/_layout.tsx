import { Home, User } from "@/assets/icons";
import { ThemeToggle } from "@/components/atoms/ThemeToggle";
import { cn } from "@/utils/cn";
import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerRight: () => <ThemeToggle />,
        // tabBarActiveTintColor: "",
        // tabBarInactiveTintColor: "gray.500",
        // tabBarStyle: {
        //   backgroundColor: "gray.900",
        //   borderTopWidth: 1,
        //   borderTopColor: "gray.200",
        // },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ size, focused }) => {
            return (
              <Home className={cn(focused && "text-foreground")} size={size} />
            );
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ size, focused }) => {
            return (
              <User className={cn(focused && "text-foreground")} size={size} />
            );
          },
        }}
      />
    </Tabs>
  );
}
