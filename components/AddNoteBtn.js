import {
  View,
  Text,
  StyleSheet,
  Animated,
  Keyboard,
  Dimensions,
  Pressable,
} from "react-native";
import { useRef, useEffect } from "react";
import PressableOpacity from "./PressableOpacity";
import { router } from "expo-router";

import layoutConfigs from "../layoutConfigs";

const { width } = Dimensions.get("window");

export default function AddNoteBtn() {
  return (
    <PressableOpacity
      onPress={() => {
        router.navigate("/note/newnote");
      }}
      style={{
        position: "absolute",
        bottom: 70,
        left: "auto",
        right: "auto",
        top: "auto",
        width: 80,
        height: 80,
        borderRadius: 80,
        backgroundColor: layoutConfigs.AddNoteBtn.backgroundColor,
      }}
    >
      <View style={styles.AddNoteBtnView}>
        <Text style={styles.AddNoteBtnSymbol}>A</Text>
      </View>
    </PressableOpacity>
  );
}

const styles = StyleSheet.create({
  AddNoteBtnView: {
    flex: 1,
    width: "100%",
    height: "100%",
    minHeight: "100%",
    minWidth: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  AddNoteBtnSymbol: {
    color: "rgb(255,255,255)",
    fontSize: 20,
    textAlign: "center",
  },
});
