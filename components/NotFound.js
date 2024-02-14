import { View, StyleSheet, Text } from "react-native";

export default function NotFound() {
  return (
    <View style={[StyleSheet.absoluteFillObject, styles.container]}>
      <Text style={{ marginTop: 20, fontSize: 20 }}>Nothing Found</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.5,
    zIndex: -1,
  },
});
