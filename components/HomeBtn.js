import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function HomeBtn() {
  return (
    <View style={styles.BackBtn}>
      <Link href={"/"}>
        <Text style={styles.BackBtnText}>Home</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  BackBtn: {
    maxWidth: 40,
    maxHeight: 40,
    width: 40,
    height: 40,
    backgroundColor: "rgb(100,100,100)",
    borderRadius: 5,
    position: "absolute",
    top: 10,
    right: 10,
  },
  BackBtnText: {
    color: "rgb(200,200,200)",
    textAlign: "center",
    textAlignVertical: "center",
  },
});
