import { View, type ViewProps } from "react-native";

import { useColorScheme } from "@/hooks/customs/useColorScheme";
import { cn } from "@/utils/cn";

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({
  lightColor,
  darkColor,
  className,
  ...rest
}: ThemedViewProps) {
  const { isDarkColorScheme } = useColorScheme();

  return (
    <View
      className={cn("flex-1", className, {
        "bg-gray-900": isDarkColorScheme,
        "bg-gray-200": !isDarkColorScheme,
      })}
      {...rest}
    />
  );
}
