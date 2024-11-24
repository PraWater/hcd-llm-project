import { View, StyleSheet, Text } from "react-native";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function CaloriesResult({ data }) {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });
  if (!fontsLoaded) {
    SplashScreen.hideAsync();
  } else {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.name}>{data.name}</Text>
          <View style={styles.nutrient}>
            <Text style={styles.nutrientName}>Calories</Text>
            <Text style={styles.nutrientValue}>{data.calories}</Text>
          </View>
          <Text style={styles.nutrientLabel}>Macro Nutrients</Text>
          <View style={styles.nutrient}>
            <Text style={styles.nutrientName}>Carbohydrates</Text>
            <Text style={styles.nutrientValue}>{data.carbohydrates}</Text>
          </View>
          <View style={styles.nutrient}>
            <Text style={styles.nutrientName}>Proteins</Text>
            <Text style={styles.nutrientValue}>{data.proteins}</Text>
          </View>
          <View style={styles.nutrient}>
            <Text style={styles.nutrientName}>Fats</Text>
            <Text style={styles.nutrientValue}>{data.fats}</Text>
          </View>
          <Text style={styles.nutrientLabel}>Micro Nutrients</Text>
          <View style={styles.nutrient}>
            <Text style={styles.nutrientName}>Fibers</Text>
            <Text style={styles.nutrientValue}>{data.dietary_fiber}</Text>
          </View>
          <View style={styles.nutrient}>
            <Text style={styles.nutrientName}>Cholesterol</Text>
            <Text style={styles.nutrientValue}>{data.cholesterol}</Text>
          </View>
          <View style={styles.nutrient}>
            <Text style={styles.nutrientName}>Sugars</Text>
            <Text style={styles.nutrientValue}>{data.sugars}</Text>
          </View>
          <View style={styles.nutrient}>
            <Text style={styles.nutrientName}>Sodium</Text>
            <Text style={styles.nutrientValue}>{data.sodium}</Text>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 20,
  },
  name: {
    fontSize: 40,
    color: "#f3f3f3",
    fontFamily: "Montserrat_700Bold",
    marginBottom: 8,
  },
  nutrient: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 6,
  },
  nutrientName: {
    flex: 1,
    fontSize: 22,
    includeFontPadding: false,
    color: "#f3f3f3",
    fontFamily: "Montserrat_400Regular",
  },
  nutrientValue: {
    flex: 1,
    fontSize: 24,
    includeFontPadding: false,
    color: "#f3f3f3",
    fontFamily: "Montserrat_600SemiBold",
    textAlign: "right",
  },
  nutrientLabel: {
    fontSize: 22,
    includeFontPadding: false,
    color: "#f3f3f3",
    fontFamily: "Montserrat_600SemiBold",
    marginTop: 20,
  },
});
