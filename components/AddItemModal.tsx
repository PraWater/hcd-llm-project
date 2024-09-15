import {View, StyleSheet, Text} from "react-native";
import {useFonts, Montserrat_600SemiBold,Montserrat_500Medium, Montserrat_400Regular, Montserrat_300Light} from '@expo-google-fonts/montserrat'
import AppLoading from 'expo-app-loading' 
export default function AddItemModal({closeModal} : {closeModal : any}) {
  let [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
    Montserrat_400Regular,
    Montserrat_300Light,
    Montserrat_500Medium
  })
  if(!fontsLoaded){
    return <AppLoading/>;
  }else{
    return (
      <View style = {styles.container}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: 400, 
    borderRadius: 10,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    top: "50%",
    transform: [{translateY: -200}],
    left: "5%",
    position: "absolute",
    zIndex: 3
  },
});
