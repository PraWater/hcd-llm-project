import { View, StyleSheet, Text } from "react-native";
import {
  useFonts,
  Montserrat_600SemiBold,
} from "@expo-google-fonts/montserrat";
import AppLoading from "expo-app-loading";
import { ScrollView } from "react-native-gesture-handler";

export default function History({ children }: { children: any }) {
  let [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.history}>History</Text>
        <ScrollView fadingEdgeLength={60}>{children}</ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    paddingHorizontal: 20,
    paddingTop: 14,
    zIndex: 0 
  },
  history: {
    fontSize: 35,
    color: "white",
    fontFamily: "Montserrat_600SemiBold",
    marginBottom: 20,
  },
});
