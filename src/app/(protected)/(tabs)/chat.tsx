import { ExternalLink } from "@/components/atoms/ExternalLink";
import { ThemedText } from "@/components/atoms/ThemedText";
import { ThemedView } from "@/components/atoms/ThemedView";
import { Button } from "@/components/atoms/ui/button";
import { Link } from "expo-router";
import React from "react";
import { ScrollView } from "react-native";

const ChatScreen = () => {
  return (
    <ThemedView>
      <ScrollView contentContainerClassName="flex-1 items-center justify-center">
        <ThemedText className="text-2xl font-bold">Chat Screen</ThemedText>

        <ExternalLink href="https://www.google.com" asChild>
          <Button variant="link">
            <ThemedText>Google</ThemedText>
          </Button>
        </ExternalLink>

        <Link href="/modal" asChild>
          <Button>Open modal</Button>
        </Link>
      </ScrollView>
    </ThemedView>
  );
};

export default ChatScreen;
