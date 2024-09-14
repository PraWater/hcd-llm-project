import { View, StyleSheet } from "react-native";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ActionButtons from "@/components/ActionButtons";
import History from "@/components/History";
export default function Index() {
  return (
    <View style={styles.container}>
      <Navbar />
      <Hero />
      <ActionButtons />
      <History/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#090910",
    height: "100%",
    width: "100%",
    padding: 0,
    alignItems: "center",
    margin: 0,
  },
});
