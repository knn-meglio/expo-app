import { Skeleton } from "@/components/atoms/ui/skeleton";
import ParallaxScrollView from "@/components/molecules/ParallelScrollView";
import React from "react";
import { View } from "react-native";

const MediaSkeleton = () => {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Skeleton className="w-full h-full bg-gray-200 dark:bg-gray-700" />
      }
    >
      <View className="bg-white dark:bg-gray-800 px-6 pt-10 pb-6">
        <View className="w-full mb-8">
          <Skeleton className="w-full h-5" />
        </View>
        <View className="flex-row items-center justify-between w-full">
          <View className="flex-row items-center gap-2">
            <Skeleton className="w-10 h-4 rounded-full" />
            <Skeleton className="w-20 h-4 rounded-full" />
          </View>
          <Skeleton className="w-6 h-4 rounded-full" />
        </View>
      </View>
      <View>
        {[...Array(20)].map((_, index) => (
          <View
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg mx-3 flex-row overflow-hidden mb-3 items-start"
          >
            <Skeleton className="w-[170px] h-32 rounded-l-lg" />
            <View className="flex-row items-start justify-between flex-1 p-4 h-full">
              <View className="flex-1 space-y-2">
                <Skeleton className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 mb-2" />
                <Skeleton className="h-4 w-full bg-gray-200 dark:bg-gray-700 mb-2" />
                <Skeleton className="h-4 w-2/3 bg-gray-200 dark:bg-gray-700" />
              </View>
              <Skeleton className="w-5 h-5 rounded-full bg-gray-200 dark:bg-gray-700 absolute right-3 bottom-3" />
            </View>
          </View>
        ))}
      </View>
    </ParallaxScrollView>
  );
};

export default MediaSkeleton;
