import { Star, Tags } from "@/assets/icons";
import StyledImage from "@/components/atoms/Image";
import { ThemedText } from "@/components/atoms/ThemedText";
import { ThemedView } from "@/components/atoms/ThemedView";
import { Skeleton } from "@/components/atoms/ui/skeleton";
import ParallaxScrollView from "@/components/molecules/ParallelScrollView";
import MediaCard from "@/components/organisms/media/Card";
import MediaSkeleton from "@/components/organisms/skeleton/MediaSkeleton";
import { cn } from "@/utils/cn";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";

const HomeScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const height = useBottomTabBarHeight();

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const handleLoadMore = () => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  if (refreshing) {
    return <MediaSkeleton />;
  }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        refreshing ? (
          <Skeleton className="w-full h-full bg-gray-200 dark:bg-gray-700" />
        ) : (
          <StyledImage
            source={require("@/assets/images/demo/img-2.jpg")}
            className="w-full h-full bottom-0 left-0 absolute"
          />
        )
      }
      refreshing={refreshing}
      onRefresh={handleLoadMore}
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
          <TouchableOpacity onPress={toggleFavorite}>
            <Star
              size={20}
              className={cn("text-gray-400", isFavorite && "text-yellow-400")}
              {...(isFavorite && { fill: "#facc15" })}
            />
          </TouchableOpacity>
        </View>
      </ThemedView>
      <View>
        {[...Array(20)].map((_, index) => (
          <MediaCard key={index} />
        ))}
      </View>
    </ParallaxScrollView>
  );
};

export default HomeScreen;
