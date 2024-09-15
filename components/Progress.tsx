import {View, StyleSheet} from "react-native"
export default function Navbar() {
    return (
      <View style = {styles.container}>
        <View style = {styles.protiens}/>
        <View style = {styles.fats}/>
        <View style = {styles.carbs}/> 
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    width:"100%",
    height: 70,
    marginTop: 10,
    borderRadius: 15,
    backgroundColor: "#1A1A1A"
  },
  carbs: {
    position: "absolute",
    backgroundColor: "#4FA3C7",
    width: "50%",
    borderRadius: 15,
    height: "100%"
  },
  fats: {
    position: "absolute",
    backgroundColor: "#72C87B",
    width: "70%",
    borderRadius: 15,
    height: "100%"
  },
  protiens: {
    position: "absolute",
    backgroundColor: "#D9D07E",
    width: "80%",
    borderRadius: 15,
    height: "100%"
  }
});
