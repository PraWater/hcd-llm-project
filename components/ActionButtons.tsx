import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import Gradient from "@/assets/Gradient";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
export default function ActionButtons({ openModal }: { openModal: any }) {
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      console.log("User didn't select image");
    }
  };

  return (
    <View style={styles.container}>
      <Gradient style={styles.gradient} />
      <View style={styles.innerContainer}>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={openModal}>
            <Ionicons name="pencil" size={30} color="#F3F3F3" />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5} onPress={pickImageAsync}>
            <Ionicons name="image" size={30} color="#F3F3F3" />
          </TouchableOpacity>
        </View>
        <Link push href="/camera">
          <View style={styles.cameraContainer}>
            <Ionicons name="camera" size={50} color="#090909" />
          </View>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    alignItems: "center",
    width: "100%",
    height: 124,
    zIndex: 1,
  },
  gradient: {
    position: "absolute",
    width: "100%",
    height: "100%",
    bottom: 0,
    zIndex: 1,
  },
  innerContainer: {
    bottom: 40,
    position: "absolute",
    width: 210,
    height: 84,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
  },
  buttonsContainer: {
    backgroundColor: "#090909",
    width: 210,
    height: 60,
    borderRadius: 12,
    borderColor: "#96BAC9",
    borderWidth: 2,
    borderStyle: "solid",
    position: "absolute",
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 14,
    paddingRight: 14,
  },
  cameraContainer: {
    backgroundColor: "#96BAC9",
    height: 84,
    width: 84,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});
