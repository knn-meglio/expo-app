import { PlatformPressable } from "@react-navigation/elements";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>
      <PlatformPressable className="bg-blue-500 p-4 rounded-md">
        <Text className="text-white">Click me</Text>
      </PlatformPressable>
    </View>
  );
}
