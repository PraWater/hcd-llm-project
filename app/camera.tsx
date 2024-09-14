import { CameraView, useCameraPermissions } from "expo-camera";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, Button, StyleSheet, Text, View } from "react-native";
import { useRef } from "react";
 
export default function App() {
  const cameraRef = useRef(null);
  const [permission, requestPermission] = useCameraPermissions();

  const onCameraClick = async () => {
    if (cameraRef.current) {
      //await cameraRef.current.onCameraReady();
      const picture = await cameraRef.current.takePictureAsync();
      console.log(picture.uri)
    }
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
    alignItems: "center"
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
});
