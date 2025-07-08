import { useNetworkState } from "expo-network";
import { Link } from "expo-router";
import React from "react";
import { SafeAreaView, Text, View } from "react-native";

const MediaDetail = () => {
  const networkState = useNetworkState();

  console.log(networkState);

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 justify-center items-center">
        <Text>MediaDetail</Text>
        <Link href="/notification" asChild>
          <Text>Favorite</Text>
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default MediaDetail;
