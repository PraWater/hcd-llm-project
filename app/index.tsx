import { StyleSheet } from "react-native";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ActionButtons from "@/components/ActionButtons";
import History from "@/components/History";
import HistoryCard from "@/components/HistoryCard";
import AddItemModal from "@/components/AddItemModal";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {useState} from "react"
import ProgressCircles from "@/components/ProgressCircles";
export default function Index() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const openModal = () => {
    setIsModalOpen(true);
  }
  const closeModal = () => {
    setIsModalOpen(false);
  }
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
      {isModalOpen ? <AddItemModal closeModal={closeModal}/> : null}
      <Navbar />
      <Hero />
      <ProgressCircles Carbs={0.8} Fats={0.6} Proteins={0.35}/>
      <ActionButtons openModal={openModal}/>
      <History>
        {HistoryItems.map((item) => {
          return (
            <HistoryCard
              key={item.time}
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
    backgroundColor: "#090909",
    height: "100%",
    width: "100%",
    padding: 0,
    alignItems: "center",
    margin: 0,
  },
});
