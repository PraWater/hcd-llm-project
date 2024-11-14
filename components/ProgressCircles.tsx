import { Text, View, StyleSheet } from "react-native";
import * as Prog from "react-native-progress";
import { useEffect, useState } from "react";
import { useFonts, Montserrat_600SemiBold, Montserrat_400Regular } from "@expo-google-fonts/montserrat";
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function ProgressCircles({
  Carbs,
  Fats,
  Proteins,
}: {
  Carbs: number;
  Fats: number;
  Proteins: number;
}) {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
  });
  const [carbsProg, setCarbsProg] = useState<number>(0);
  const [fatsProg, setFatsProg] = useState<number>(0);
  const [protsProg, setProtsProg] = useState<number>(0);

  useEffect(() => {
    setTimeout(() => {
      setCarbsProg(Carbs);
      setFatsProg(Fats);
      setProtsProg(Proteins);
    }, 500);
  }, [Carbs, Fats, Proteins]);
  if (!fontsLoaded) {
    SplashScreen.hideAsync();
  } else {
    return (
      <View style={styles.outerContainer}>
        <View style={styles.innerContainer}>
          <Prog.Circle
            progress={carbsProg}
            size={80}
            thickness={14}
            color="#4FA3C7"
            unfilledColor="#1A1A1A"
            borderWidth={0}
            strokeCap="round"
            showsText= {true}
            textStyle={{
              fontFamily: "Montserrat_600SemiBold",
              color: "#f3f3f3",
              fontSize: 14
            }}
          >
          </Prog.Circle>
          <Text style={styles.progText}>Carbs</Text>
        </View>
        <View style={styles.innerContainer}>
          <Prog.Circle
            progress={fatsProg}
            size={80}
            thickness={14}
            color="#72C87B"
            unfilledColor="#1A1A1A"
            borderWidth={0}
            strokeCap="round"
            showsText= {true}
            textStyle={{
              fontFamily: "Montserrat_600SemiBold",
              color: "#f3f3f3",
              fontSize: 14
            }}
          />
          <Text style={styles.progText}>Fats</Text>
        </View>
        <View style={styles.innerContainer}>
          <Prog.Circle
            progress={protsProg}
            size={80}
            thickness={14}
            color="#D9D07E"
            unfilledColor="#1A1A1A"
            borderWidth={0}
            strokeCap="round"
            showsText= {true}
            textStyle={{
              fontFamily: "Montserrat_600SemiBold",
              color: "#f3f3f3",
              fontSize: 14
            }}
          />
          <Text style={styles.progText}>Proteins</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  outerContainer: {
    marginTop: 12,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  innerContainer: {
    alignItems: "center",
    width: 100,
  },
  progText: {
    marginTop: 12,
    color: "#f3f3f3",
    fontFamily: "Montserrat_400Regular",
    fontSize: 20,
  },
  progPercent: {
    color: "#f3f3f3",
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 20,
  },
});
