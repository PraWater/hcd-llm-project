import {View, StyleSheet, Text, Pressable} from "react-native";
import { useState } from "react";
import { TextInput } from "react-native-paper";
import {useFonts, Montserrat_600SemiBold,Montserrat_500Medium, Montserrat_400Regular, Montserrat_300Light} from '@expo-google-fonts/montserrat'
import AppLoading from 'expo-app-loading' 
export default function AddItemModal({closeModal} : {closeModal : any}) {
  const [itemName, setItemName] = useState<string>("")
  const [carbs, setCarbs] = useState<string>("")
  const [prots, setProts] = useState<string>("")
  const [fats, setFats] = useState<string>("")
  const handleCarbs = (text : string) => {
    const numericValue = text.replace(/[^0-9]/g, "")
    console.log(numericValue)
    setCarbs(numericValue)
  }
  const handleProts= (text : string) => {
    const numericValue = text.replace(/[^0-9]/g, "")
    setProts(numericValue)
  }
  const handleFats = (text : string) => {
    const numericValue = text.replace(/[^0-9]/g, "")
    setFats(numericValue)
  }
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
      <View style={styles.container}>
        <View style={styles.modal}>
          <Text style={{color:"white", fontSize:30, fontFamily:"Montserrat_500Medium", marginTop: 20}}>Add Food Item</Text>
          <View style={styles.form}>
                  <TextInput mode="outlined" theme={{roundness: 18}} label={"Item Name"} textColor="white" style={styles.inputField} activeOutlineColor="white" value={itemName} onChangeText={itemName => setItemName(itemName)}/>
                  <TextInput mode="outlined" keyboardType="numeric" autoComplete="cc-number" theme={{roundness: 18}} label={"Carbohydrates"} textColor="#4FA3C7" style={styles.inputField} outlineColor="#4FA3C7" activeOutlineColor="#4FA3C7" value={carbs} onChangeText={handleCarbs}/>
                  <TextInput mode="outlined" autoComplete="cc-number" theme={{roundness: 18}} label={"Protiens"} textColor="#72C87B" style={styles.inputField} activeOutlineColor="#72C87B" outlineColor="#72C87B" value={prots} onChangeText={handleProts}/>
                  <TextInput mode="outlined" autoComplete="cc-number" theme={{roundness: 18}} label={"Fats"} textColor="#D9D07E" style={styles.inputField} outlineColor="#D9D07E" activeOutlineColor="#D9D07E" value={fats} onChangeText={handleFats}/>
          </View>
          <Pressable onPress={closeModal}><View style={styles.submitButton}><Text style={{fontSize: 20, fontWeight: 600}}>Submit</Text></View></Pressable>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%", 
    borderRadius: 10,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    position: "absolute",
    zIndex: 2,
  },
  modal: {
    width: "90%",
    height: 500,
    borderRadius: 10,
    backgroundColor: "#1A1A1A",
    position: "absolute",
    left: "5%",
    top: "50%",
    transform: [{translateY: -250}],
    shadowColor: "white",
    shadowOpacity: 0.7,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 10,
    display: "flex",
    alignItems: "center",
  },
  form: {
    width: "80%",
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    marginTop: 10,
    gap: 10
  },
  inputField: {
    backgroundColor: "#1A1A1A",
    borderRadius: 20,
    fontFamily: "Montserrat_500Medium"
  },
  submitButton: {
    fontFamily: "Montserrat_500Medium",
    height: 50,
    width: 150,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#96BAC9",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    borderRadius: 20
  }
});
