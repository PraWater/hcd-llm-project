import {View, StyleSheet, Text, Pressable} from "react-native";
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
      <View style={styles.container}>
        <View style={styles.modal}>
          <Text style={{color:"white", fontSize:30, fontFamily:"Montserrat_500Medium", marginTop: 20}}>Add Food Item</Text>
          <View style={styles.form}>
            <View style={styles.formElement}>
              <Text style={{color: "white", fontSize:18, fontFamily: "Montserrat_400Regular"}}>Item Name</Text> 
            </View>
            <View style={styles.formElement}>
              <Text style={{color: "white", fontSize:18, fontFamily: "Montserrat_400Regular"}}>Carbohydrates</Text> 
            </View>
            <View style={styles.formElement}>
              <Text style={{color: "white", fontSize:18, fontFamily: "Montserrat_400Regular"}}>Proteins</Text> 
            </View>
            <View style={styles.formElement}>
              <Text style={{color: "white", fontSize:18, fontFamily: "Montserrat_400Regular"}}>Fats</Text> 
            </View>
          </View>
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
  formElement: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    gap:5
  },
  input: {
    backgroundColor: "#BDC3C7",
    borderRadius: 15,
    color: "black",
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontFamily: "Montserrat_400Regular"

  }
});
