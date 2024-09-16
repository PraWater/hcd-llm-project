import { CameraView, useCameraPermissions } from "expo-camera";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, Button, StyleSheet, Text, View, Image } from "react-native";
import { useRef, useState } from "react";

export default function App() {
  const [picture, setPicture] = useState<any>(null);
  const cameraRef = useRef(null);
  const [permission, requestPermission] = useCameraPermissions();

  const onCameraClick = async () => {
    if (cameraRef.current) {
      //await cameraRef.current.onCameraReady();
      const capturedPicture = await cameraRef.current.takePictureAsync();
      setPicture(capturedPicture);
    }
  };

  if (picture !== null) {
    return (
      <View style={styles.imageContainer}>
        <Image source={picture} style={styles.image} />
        <View style={styles.buttonContainer}>
          <Pressable style={styles.imageButton}>
            <Text>Retake</Text>
          </Pressable>
          <Pressable style={[styles.imageButton, {
            backgroundColor: "#96BAC9"
          }]}>
            <Text>Use</Text>
          </Pressable>
        </View>
      </View>
    );
  }

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing="back" ref={cameraRef}>
        <Pressable style={styles.cameraContainer} onPress={onCameraClick}>
          <Ionicons name="camera" size={50} color="#090909" />
        </Pressable>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#090909",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
    color: "white",
  },
  camera: {
    flex: 1,
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  cameraContainer: {
    backgroundColor: "#96BAC9",
    height: 84,
    width: 84,
    position: "absolute",
    bottom: 40,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
    alignItems: "center",
    paddingTop: 120,
    paddingBottom: 60,
    backgroundColor: "#090909",
    justifyContent: "space-between",
  },
  image: {
    width: 360,
    height: 480,
    borderRadius: 18,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    marginHorizontal: 20,
    gap: 12,
  },
  imageButton: {
    backgroundColor: "#ffffff",
    height: 52,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
  },
});
