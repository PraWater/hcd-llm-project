import { View, StyleSheet, Text } from "react-native";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat'
import * as SplashScreen from 'expo-splash-screen';
import Progress from "@/components/Progress"

SplashScreen.preventAutoHideAsync();

export default function Hero() {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  })
  if (!fontsLoaded) {
    SplashScreen.hideAsync();
  } else {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.heading} >Calories left</Text>
          <Text style={styles.calories}>1230<Text style={styles.kcal}> kcal</Text> </Text>
        </View>
        <Progress />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 20
  },
  heading: {
    fontSize: 20,
    color: "#f3f3f3",
    fontFamily: "Montserrat_400Regular",
  },
  calories: {
    fontSize: 65,
    color: "#f3f3f3",
    includeFontPadding: false,
    fontFamily: "Montserrat_700Bold",
    left: 0,
  },
  kcal: {
    fontSize: 30,
    includeFontPadding: false,
    fontFamily: "Montserrat_400Regular",
  }
});
