import { ThemedText } from "@/components/atoms/ThemedText";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/atoms/ui/card";
import React from "react";
import { ScrollView, View } from "react-native";

const ProfileScreen = () => {
  return (
    <ScrollView className="flex-1 p-4">
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <View className="items-center space-y-4">
            <View className="w-24 h-24 rounded-full bg-gray-300 items-center justify-center">
              <ThemedText className="text-2xl font-bold text-gray-600">
                JD
              </ThemedText>
            </View>
            <View className="items-center">
              <ThemedText className="text-xl font-bold">John Doe</ThemedText>
              <ThemedText className="text-muted-foreground">
                john.doe@example.com
              </ThemedText>
            </View>
          </View>
        </CardContent>
      </Card>

      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
        </CardHeader>
        <CardContent>
          <View className="space-y-3">
            <View className="flex-row justify-between">
              <ThemedText className="text-muted-foreground">
                Full Name
              </ThemedText>
              <ThemedText>John Doe</ThemedText>
            </View>
            <View className="flex-row justify-between">
              <ThemedText className="text-muted-foreground">Email</ThemedText>
              <ThemedText>john.doe@example.com</ThemedText>
            </View>
            <View className="flex-row justify-between">
              <ThemedText className="text-muted-foreground">Phone</ThemedText>
              <ThemedText>+1 (555) 123-4567</ThemedText>
            </View>
            <View className="flex-row justify-between">
              <ThemedText className="text-muted-foreground">
                Location
              </ThemedText>
              <ThemedText>New York, NY</ThemedText>
            </View>
          </View>
        </CardContent>
      </Card>
    </ScrollView>
  );
};

export default ProfileScreen;
