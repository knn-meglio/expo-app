import { Star, Tags } from "@/assets/icons";
import { ThemedText } from "@/components/atoms/ThemedText";
import { ThemedView } from "@/components/atoms/ThemedView";
import ParallaxScrollView from "@/components/molecules/ParallelScrollView";
import MediaCard from "@/components/organisms/Media/Card";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { Link } from "expo-router";
import React, { useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";

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
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/demo/img-2.jpg")}
          className="w-full h-full bottom-0 left-0 absolute"
        />
      }
    >
      <ThemedView className="bg-white dark:bg-gray-800 px-6 pt-10 pb-6">
        <ThemedText className="text-xl font-bold mb-8">
          Today Business Media 030225
        </ThemedText>
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center gap-2">
            <Tags size={20} className="text-gray-400" />
            <ThemedText className="text-gray-500 font-medium">
              Business
            </ThemedText>
          </View>
          <TouchableOpacity>
            <Star size={20} className="text-gray-400" />
          </TouchableOpacity>
        </View>
      </ThemedView>
      <View>
        {[...Array(20)].map((_, index) => (
          <Link href="/media/1" key={index} asChild>
            <TouchableOpacity>
              <MediaCard />
            </TouchableOpacity>
          </Link>
        ))}
      </View>
    </ParallaxScrollView>
  );
};

export default HomeScreen;
