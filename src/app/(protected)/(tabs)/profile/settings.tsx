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

const SettingsScreen = () => {
  return (
    <ScrollView className="flex-1 p-4">
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>App Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <View className="space-y-4">
            <View className="flex-row justify-between items-center">
              <ThemedText>Dark Mode</ThemedText>
              <Button variant="outline" size="sm">
                <ThemedText>Toggle</ThemedText>
              </Button>
            </View>
            <View className="flex-row justify-between items-center">
              <ThemedText>Notifications</ThemedText>
              <Button variant="outline" size="sm">
                <ThemedText>Enable</ThemedText>
              </Button>
            </View>
            <View className="flex-row justify-between items-center">
              <ThemedText>Language</ThemedText>
              <Button variant="outline" size="sm">
                <ThemedText>English</ThemedText>
              </Button>
            </View>
          </View>
        </CardContent>
      </Card>

      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Privacy</CardTitle>
        </CardHeader>
        <CardContent>
          <View className="space-y-4">
            <View className="flex-row justify-between items-center">
              <ThemedText>Location Services</ThemedText>
              <Button variant="outline" size="sm">
                <ThemedText>On</ThemedText>
              </Button>
            </View>
            <View className="flex-row justify-between items-center">
              <ThemedText>Data Collection</ThemedText>
              <Button variant="outline" size="sm">
                <ThemedText>Limited</ThemedText>
              </Button>
            </View>
          </View>
        </CardContent>
      </Card>
    </ScrollView>
  );
};

export default SettingsScreen;
