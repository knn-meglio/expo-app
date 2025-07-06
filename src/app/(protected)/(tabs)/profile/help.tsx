import { ThemedText } from "@/components/atoms/ThemedText";
import { Button } from "@/components/atoms/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/atoms/ui/card";
import React from "react";
import { ScrollView, View } from "react-native";

const HelpScreen = () => {
  return (
    <ScrollView className="flex-1 p-4">
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
        </CardHeader>
        <CardContent>
          <View className="space-y-4">
            <View className="space-y-2">
              <ThemedText className="font-semibold">
                How do I change my password?
              </ThemedText>
              <ThemedText className="text-muted-foreground text-sm">
                Go to Account settings and select &quot;Change Password&quot; to
                update your password.
              </ThemedText>
            </View>
            <View className="space-y-2">
              <ThemedText className="font-semibold">
                How do I enable notifications?
              </ThemedText>
              <ThemedText className="text-muted-foreground text-sm">
                Navigate to Settings and toggle the notification switch to
                enable push notifications.
              </ThemedText>
            </View>
            <View className="space-y-2">
              <ThemedText className="font-semibold">
                How do I contact support?
              </ThemedText>
              <ThemedText className="text-muted-foreground text-sm">
                You can reach our support team through the contact form below or
                email us directly.
              </ThemedText>
            </View>
          </View>
        </CardContent>
      </Card>

      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Contact Support</CardTitle>
        </CardHeader>
        <CardContent>
          <View className="space-y-4">
            <Button className="w-full">
              <ThemedText>Send Email</ThemedText>
            </Button>
            <Button variant="outline" className="w-full">
              <ThemedText>Live Chat</ThemedText>
            </Button>
            <Button variant="outline" className="w-full">
              <ThemedText>Call Support</ThemedText>
            </Button>
          </View>
        </CardContent>
      </Card>

      <Card className="mb-4">
        <CardHeader>
          <CardTitle>App Information</CardTitle>
        </CardHeader>
        <CardContent>
          <View className="space-y-3">
            <View className="flex-row justify-between">
              <ThemedText className="text-muted-foreground">Version</ThemedText>
              <ThemedText>1.0.0</ThemedText>
            </View>
            <View className="flex-row justify-between">
              <ThemedText className="text-muted-foreground">Build</ThemedText>
              <ThemedText>2024.1.1</ThemedText>
            </View>
            <View className="flex-row justify-between">
              <ThemedText className="text-muted-foreground">
                Platform
              </ThemedText>
              <ThemedText>React Native</ThemedText>
            </View>
          </View>
        </CardContent>
      </Card>
    </ScrollView>
  );
};

export default HelpScreen;
