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

const AccountScreen = () => {
  return (
    <ScrollView className="flex-1 p-4">
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Account Information</CardTitle>
        </CardHeader>
        <CardContent>
          <View className="space-y-4">
            <View className="flex-row justify-between">
              <ThemedText className="text-muted-foreground">
                Account ID
              </ThemedText>
              <ThemedText>ACC-123456789</ThemedText>
            </View>
            <View className="flex-row justify-between">
              <ThemedText className="text-muted-foreground">
                Member Since
              </ThemedText>
              <ThemedText>January 2024</ThemedText>
            </View>
            <View className="flex-row justify-between">
              <ThemedText className="text-muted-foreground">
                Subscription
              </ThemedText>
              <ThemedText>Premium</ThemedText>
            </View>
            <View className="flex-row justify-between">
              <ThemedText className="text-muted-foreground">Status</ThemedText>
              <ThemedText className="text-green-600">Active</ThemedText>
            </View>
          </View>
        </CardContent>
      </Card>

      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Security</CardTitle>
        </CardHeader>
        <CardContent>
          <View className="space-y-4">
            <Button variant="outline" className="w-full">
              <ThemedText>Change Password</ThemedText>
            </Button>
            <Button variant="outline" className="w-full">
              <ThemedText>Two-Factor Authentication</ThemedText>
            </Button>
            <Button variant="outline" className="w-full">
              <ThemedText>Login History</ThemedText>
            </Button>
          </View>
        </CardContent>
      </Card>

      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Danger Zone</CardTitle>
        </CardHeader>
        <CardContent>
          <Button variant="destructive" className="w-full">
            <ThemedText>Delete Account</ThemedText>
          </Button>
        </CardContent>
      </Card>
    </ScrollView>
  );
};

export default AccountScreen;
