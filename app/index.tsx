import { StyleSheet } from "react-native";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ActionButtons from "@/components/ActionButtons";
import History from "@/components/History";
import HistoryCard from "@/components/HistoryCard";
import { GestureHandlerRootView } from "react-native-gesture-handler";
export default function Index() {
  const HistoryItems = [
    {
      name: "Dosa",
      time: "17:41",
      calories: 130,
    },
    {
      name: "Idly",
      time: "7:41",
      calories: 90,
    },
    {
      name: "Biryani",
      time: "20:20",
      calories: 300,
    },
    {
      name: "Ice Cream",
      time: "22:30",
      calories: 170,
    },
  ];
  return (
    <GestureHandlerRootView style={styles.container}>
      <Navbar />
      <Hero />
      <ActionButtons />
      <History>
        {HistoryItems.map((item) => {
          return (
            <HistoryCard
              Name={item.name}
              Time={item.time}
              Calories={item.calories}
            />
          );
        })}
      </History>
    </GestureHandlerRootView>
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
