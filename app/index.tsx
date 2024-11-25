import { Text, StyleSheet } from "react-native";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ActionButtons from "@/components/ActionButtons";
import History from "@/components/History";
import HistoryCard from "@/components/HistoryCard";
import AddItemModal from "@/components/AddItemModal";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useEffect, useState } from "react";
import ProgressCircles from "@/components/ProgressCircles";
export default function Index() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [historyItems, setHistoryItems] = useState<Object>(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        process.env.EXPO_PUBLIC_LAPTOP_LOCALHOST + "/get-food",
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");

      }
      const jsonResponse = await response.json()
      setHistoryItems(jsonResponse)
    };

    fetchData();
  }, []);

  return (
    <GestureHandlerRootView style={styles.container}>
      {isModalOpen ? <AddItemModal closeModal={closeModal} /> : null}
      <Navbar />
      <Hero />
      <ProgressCircles Carbs={0.8} Fats={0.6} Proteins={0.35} />
      <ActionButtons openModal={openModal} />
      <History>
        {historyItems && historyItems.reverse().map((item) => {
          return (
            <HistoryCard
              key={item.id}
              Name={item.name}
              Time={item.timestamp}
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
