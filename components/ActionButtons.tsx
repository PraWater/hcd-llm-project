import { StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import Gradient from "@/assets/Gradient";

export default function ActionButtons() {
  return (
    <View style={styles.container}>
      <Gradient style={styles.gradient}/>
      <View style={styles.innerContainer}>
        <View style={styles.buttonsContainer}>
          <Ionicons name="pencil" size={30} color="#F3F3F3" />
          <Ionicons name="image" size={30} color="#F3F3F3" />
        </View>
        <Link href="/camera">
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
    height: 124
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
    zIndex: 1,
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
