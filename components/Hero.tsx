import {View, StyleSheet, Text} from "react-native";
import {useFonts,
  Montserrat_100Thin,
  Montserrat_200ExtraLight,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
  Montserrat_900Black,
  Montserrat_100Thin_Italic,
  Montserrat_200ExtraLight_Italic,
  Montserrat_300Light_Italic,
  Montserrat_400Regular_Italic,
  Montserrat_500Medium_Italic,
  Montserrat_600SemiBold_Italic,
  Montserrat_700Bold_Italic,
  Montserrat_800ExtraBold_Italic,
  Montserrat_900Black_Italic,} from '@expo-google-fonts/montserrat'
import AppLoading from 'expo-app-loading' 
import Progress from "@/components/Progress"
export default function Hero() {
  let [fontsLoaded] = useFonts({
    Montserrat_100Thin,
    Montserrat_200ExtraLight,
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
    Montserrat_900Black,
    Montserrat_100Thin_Italic,
    Montserrat_200ExtraLight_Italic,
    Montserrat_300Light_Italic,
    Montserrat_400Regular_Italic,
    Montserrat_500Medium_Italic,
    Montserrat_600SemiBold_Italic,
    Montserrat_700Bold_Italic,
    Montserrat_800ExtraBold_Italic,
    Montserrat_900Black_Italic,
  })
  if(!fontsLoaded){
    return <AppLoading/>;
  }else{
    return (
      <View style = {styles.container}>
      <View>
      <Text style = {styles.heading}>Calories left </Text>
      <Text style = {styles.calories}> 1230 <Text style = {styles.kcal}>kcal</Text> </Text>
      </View>
      <Progress/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width:"100%",
    height: 300,
    padding: 20
  },
  heading: {
    fontSize: 20,
    color: "white",
    fontFamily: "montserrat",
    fontWeight: "400"
  },
  calories: {
    fontSize: 65,
    fontWeight: "700",
    color: "white",
    fontFamily: "montserrat",
    textAlign: "left",
  },
  kcal: {
    fontSize: 30,
    fontWeight: "400",
    fontFamily: "montserrat",
  }
});
