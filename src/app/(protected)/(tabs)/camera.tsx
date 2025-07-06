import { ThemedText } from "@/components/atoms/ThemedText";
import { CameraType, CameraView, useCameraPermissions } from "expo-camera";
import { useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  const [facing, setFacing] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View className="flex-1 justify-center">
        <Text className="text-center pb-10">
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  return (
    <View className="flex-1 justify-center">
      <CameraView style={styles.camera} facing={facing}>
        <View className="flex-1 flex-row bg-transparent m-[100px]">
          <TouchableOpacity
            className="flex-1 self-end items-center"
            onPress={toggleCameraFacing}
          >
            <ThemedText className="text-2xl font-bold">Flip Camera</ThemedText>
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  camera: {
    flex: 1,
  },
});
