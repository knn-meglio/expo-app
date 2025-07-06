import { ThemedText } from "@/components/atoms/ThemedText";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import React, { useState } from "react";
import {
  Image,
  Platform,
  RefreshControl,
  ScrollView,
  View,
} from "react-native";

const HomeScreen = () => {
  const [isLoading, setIsLoading] = useState(false);

  const height = useBottomTabBarHeight();

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={handleLoadMore} />
      }
      contentContainerClassName="p-4"
      contentContainerStyle={Platform.select({
        ios: { paddingBottom: height },
        default: {},
      })}
    >
      {[...Array(20)].map((_, index) => (
        <View
          key={index}
          className="flex-row items-center justify-start gap-4 py-6"
        >
          <Image
            source={require("../../../assets/images/react-logo.png")}
            className="w-12 h-12 p-1 border border-foreground/10 rounded-full bg-gray-900"
          />
          <ThemedText className="text-lg font-bold">
            Dummy Text {index}
          </ThemedText>
        </View>
      ))}
    </ScrollView>
  );
};

export default HomeScreen;
