import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useFonts, Montserrat_100Thin } from "@expo-google-fonts/montserrat";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function Navbar() {
  let [fontsLoaded] = useFonts({
    Montserrat_100Thin,
  });
  if (!fontsLoaded) {
    SplashScreen.hideAsync();
  } else {
    return (
      <View style={styles.container}>
        <Ionicons name="menu-outline" size={50} color="white" />
        <View style={styles.circle} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 4,
    paddingHorizontal: 20,
  },
  circle: {
    height: 40,
    width: 40,
    borderRadius: 100,
    backgroundColor: "white",
  },
});
