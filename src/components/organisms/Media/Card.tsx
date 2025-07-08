import { Star } from "@/assets/icons";
import StyledImage from "@/components/atoms/Image";
import { ThemedText } from "@/components/atoms/ThemedText";
import { ThemedView } from "@/components/atoms/ThemedView";
import { Skeleton } from "@/components/atoms/ui/skeleton";
import React from "react";
import { TouchableOpacity, View } from "react-native";

interface MediaCardProps {
  title?: string;
  description?: string;
  image?: string;
  loading?: boolean;
}

const MediaCard: React.FC<MediaCardProps> = ({
  title,
  description,
  image,
  loading,
}) => {
  if (loading) {
    return (
      <ThemedView className="bg-white dark:bg-gray-800 rounded-lg mx-3 flex-row overflow-hidden mb-3 items-start">
        <Skeleton className="w-[170px] h-32 rounded-l-lg" />
        <View className="flex-row items-start justify-between flex-1 p-4 h-full">
          <View className="flex-1 space-y-2">
            <Skeleton className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 mb-2" />
            <Skeleton className="h-4 w-full bg-gray-200 dark:bg-gray-700 mb-2" />
            <Skeleton className="h-4 w-2/3 bg-gray-200 dark:bg-gray-700" />
          </View>
          <Skeleton className="w-5 h-5 rounded-full bg-gray-200 dark:bg-gray-700 absolute right-3 bottom-3" />
        </View>
      </ThemedView>
    );
  }

  return (
    <ThemedView className="bg-white dark:bg-gray-800 rounded-lg mx-3 flex-row overflow-hidden mb-3 items-start">
      <StyledImage
        className="w-[170px] h-32"
        source={require("@/assets/images/demo/img-1.jpg")}
        cachePolicy="memory-disk"
        placeholder={{ blurhash: "LGF7~q]aM[M{00000000000000000000" }}
        contentFit="cover"
        transition={500}
      />
      <View className="flex-row items-start justify-between flex-1 p-4 h-full">
        <ThemedText numberOfLines={2}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </ThemedText>
        <TouchableOpacity className="absolute right-3 bottom-3">
          <Star size={20} className="text-gray-400" />
        </TouchableOpacity>
      </View>
    </ThemedView>
  );
};

export default MediaCard;
