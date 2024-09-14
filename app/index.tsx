import { View, StyleSheet } from "react-native";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
export default function Index() {
  return (
    <View style = {styles.container}>
    <Navbar/>
    <Hero/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#090910",
    height: "100%",
    width: "100%",
    padding: 0,
    margin: 0,
  }
})
