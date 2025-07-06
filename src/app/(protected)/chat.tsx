import { ThemedText } from "@/components/atoms/ThemedText";
import { ThemedView } from "@/components/atoms/ThemedView";
import React from "react";
import { ScrollView } from "react-native";

const ChatScreen = () => {
  return (
    <ThemedView>
      <ScrollView contentContainerClassName="flex-1 items-center justify-center">
        <ThemedText className="text-2xl font-bold">Chat Screen</ThemedText>
      </ScrollView>
    </ThemedView>
  );
};

export default ChatScreen;
