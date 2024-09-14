import {View, StyleSheet, Text} from "react-native";
import {useFonts, Montserrat_600SemiBold} from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading'; 
import HistoryCard from "./HistoryCard";
import Gradient from "../assets/Gradient"
export default function History() {
  let [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
  })
  if(!fontsLoaded){
    return <AppLoading/>;
  }else{
    return (
      <View>
      <View style={{zIndex: 2, bottom: -260}}><Gradient/></View>
      <View style = {styles.container}>
      <Text style = {styles.history}>History</Text>
      <HistoryCard/>
      <HistoryCard/>
      <HistoryCard/>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width:"100%",
    height: "100%",
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    padding: 20,
  },
  history: {
    fontSize: 35,
    color: "white",
    fontFamily: "Montserrat_600SemiBold"
  }
});
