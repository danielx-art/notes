import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Slot } from "expo-router";
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import useStore from "../hooks/useStore";
import { useEffect } from "react";

export default function RootLayout() {
  const loadNotes = useStore((state) => state.loadNotes);

  useEffect(() => {
    loadNotes();
  }, [loadNotes]);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <View style={styles.mainView}>
          <StatusBar style="light" />
          <Slot />
        </View>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    //height: "100%",
    backgroundColor: "rgb(51,52,53)",
    alignItems: "center",
    justifyContent: "center",
  },
});
