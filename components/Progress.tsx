import { View, StyleSheet, Pressable } from "react-native";
import Animated, {
  useSharedValue,
  withTiming,
  ReduceMotion,
  Easing,
} from "react-native-reanimated";
import { useEffect } from "react";

export default function Progress() {
  const proteinWidth = useSharedValue(0);
  const fatWidth = useSharedValue(0);
  const carbWidth = useSharedValue(0);
  useEffect(() => {
    proteinWidth.value = withTiming(300, {
      duration: 800,
      easing: Easing.elastic(0.9),
      reduceMotion: ReduceMotion.System,
    });
    fatWidth.value = withTiming(250, {
      duration: 800,
      easing: Easing.elastic(0.9),
      reduceMotion: ReduceMotion.System,
    });
    carbWidth.value = withTiming(150, {
      duration: 800,
      easing: Easing.elastic(0.9),
      reduceMotion: ReduceMotion.System,
    });
  });
  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.proteins,
          {
            width: proteinWidth,
          },
        ]}
      />
      <Animated.View
        style={[
          styles.fats,
          {
            width: fatWidth,
          },
        ]}
      />
      <Animated.View
        style={[
          styles.carbs,
          {
            width: carbWidth,
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 70,
    marginTop: 10,
    borderRadius: 15,
    backgroundColor: "#1A1A1A",
  },
  carbs: {
    position: "absolute",
    backgroundColor: "#4FA3C7",
    borderRadius: 15,
    height: "100%",
  },
  fats: {
    position: "absolute",
    backgroundColor: "#72C87B",
    borderRadius: 15,
    height: "100%",
  },
  proteins: {
    position: "absolute",
    backgroundColor: "#D9D07E",
    borderRadius: 15,
    height: "100%",
  },
});
