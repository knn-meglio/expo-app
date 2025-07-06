import { TextProps } from "react-native";
import { Text } from "./ui/text";

export function ThemedText({ ...props }: TextProps) {
  return <Text {...props} />;
}
