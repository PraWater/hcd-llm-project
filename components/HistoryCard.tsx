import { View, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  useFonts,
  Montserrat_600SemiBold,
  Montserrat_500Medium,
  Montserrat_400Regular,
  Montserrat_300Light,
} from "@expo-google-fonts/montserrat";
import AppLoading from "expo-app-loading";
export default function HistoryCard() {
  let [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
    Montserrat_400Regular,
    Montserrat_300Light,
    Montserrat_500Medium,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <View style={styles.foodImg} />
          <View style={styles.foodText}>
            <Text
              style={{
                color: "#F3F3F3",
                fontSize: 20,
                fontFamily: "Montserrat_400Regular",
              }}
            >
              Dosa
            </Text>
            <Text
              style={{
                color: "#F3F3F3",
                fontSize: 16,
                fontFamily: "Montserrat_300Light",
              }}
            >
              15:06
            </Text>
          </View>
        </View>
        <View style={styles.rightContainer}>
          <View>
            <Text
              style={{
                color: "#F3F3F3",
                fontSize: 30,
                fontFamily: "Montserrat_500Medium",
              }}
            >
              130
            </Text>
            <Text
              style={{
                color: "#F3F3F3",
                fontSize: 12,
                fontFamily: "Montserrat_300Light",
                textAlign: "right",
              }}
            >
              kcal
            </Text>
          </View>
          <Ionicons name="pencil" color="white" size={20} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 80,
    marginTop: 20,
    backgroundColor: "#161616",
    borderRadius: 10,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    marginRight: 10,
    paddingHorizontal: 12
  },
  leftContainer: {
    height: "100%",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  rightContainer: {
    height: "100%",
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  foodImg: {
    height: 45,
    width: 80,
    borderRadius: 6,
    backgroundColor: "#D9D9D9",
  },
  foodText: {
    display: "flex",
    marginLeft: 10,
    alignItems: "center",
  },
});
