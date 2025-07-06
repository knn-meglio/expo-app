import { Info } from "@/assets/icons";
import { ThemedText } from "@/components/atoms/ThemedText";
import { ThemedView } from "@/components/atoms/ThemedView";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/atoms/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/atoms/ui/tooltip";
import { router, useLocalSearchParams } from "expo-router";
import { View } from "react-native";

export default function Modal() {
  const isPresented = router.canGoBack();
  const params = useLocalSearchParams<{
    title?: string;
    message?: string;
    action?: string;
  }>();

  const dismissModal = () => {
    if (isPresented) {
      router.back();
    }
  };

  const handleAction = () => {
    if (params.action === "save") {
      // Handle save action
      console.log("Saving data...");
    }
    dismissModal();
  };

  return (
    <ThemedView className="flex-1 bg-background/80">
      <Card className="w-full max-w-sm p-6 rounded-2xl">
        <CardHeader className="items-center">
          <View className="p-3" />
          <CardTitle className="pb-2 text-center">Rick Sanchez</CardTitle>
          <View className="flex-row">
            <CardDescription className="text-base font-semibold">
              Scientist
            </CardDescription>
            <Tooltip delayDuration={150}>
              <TooltipTrigger className="px-2 pb-0.5 active:opacity-50">
                <Info
                  size={14}
                  strokeWidth={2.5}
                  className="w-4 h-4 text-foreground/70"
                />
              </TooltipTrigger>
              <TooltipContent className="py-2 px-4 shadow">
                <ThemedText className="native:text-lg">Freelance</ThemedText>
              </TooltipContent>
            </Tooltip>
          </View>
        </CardHeader>
        <CardContent>
          <View className="flex-row justify-around gap-3">
            <View className="items-center">
              <ThemedText className="text-sm text-muted-foreground">
                Dimension
              </ThemedText>
              <ThemedText className="text-xl font-semibold">C-137</ThemedText>
            </View>
            <View className="items-center">
              <ThemedText className="text-sm text-muted-foreground">
                Age
              </ThemedText>
              <ThemedText className="text-xl font-semibold">70</ThemedText>
            </View>
            <View className="items-center">
              <ThemedText className="text-sm text-muted-foreground">
                Species
              </ThemedText>
              <ThemedText className="text-xl font-semibold">Human</ThemedText>
            </View>
          </View>
        </CardContent>
      </Card>
    </ThemedView>
  );
}
