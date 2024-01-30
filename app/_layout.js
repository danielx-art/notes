import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Slot } from "expo-router";
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
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
    height: "100%",
    backgroundColor: "rgb(51,52,53)",
    alignItems: "center",
    justifyContent: "center",
  },
});
