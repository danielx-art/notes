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
  const positionRight = useRef(
    new Animated.Value(width / 2 - layoutConfigs.AddNoteBtn.size / 2)
  ).current;
  const positionBottom = useRef(
    new Animated.Value(layoutConfigs.AddNoteBtn.position[2])
  ).current;
  // const positionLeft = useRef(
  //   new Animated.Value(layoutConfigs.AddNoteBtn.position[3])
  // ).current;
  const size = useRef(
    new Animated.Value(layoutConfigs.AddNoteBtn.size)
  ).current;

  useEffect(() => {
    const keyboardShowListener = Keyboard.addListener(
      "keyboardDidShow",
      (e) => {
        Animated.parallel([
          Animated.timing(positionRight, {
            toValue: layoutConfigs.AddNoteBtn.secondaryPosition[1],
            duration: e.duration,
            useNativeDriver: false,
          }),
          Animated.timing(positionBottom, {
            toValue: layoutConfigs.AddNoteBtn.secondaryPosition[2],
            duration: e.duration,
            useNativeDriver: false,
          }),
          // Animated.timing(positionLeft, {
          //   toValue: layoutConfigs.AddNoteBtn.secondaryPosition[3],
          //   duration: e.duration,
          //   useNativeDriver: false,
          // }),
          Animated.timing(size, {
            toValue: layoutConfigs.AddNoteBtn.secondarySize,
            duration: e.duration,
            useNativeDriver: false,
          }),
        ]).start();
      }
    );

    const keyboardHideListener = Keyboard.addListener(
      "keyboardDidHide",
      (e) => {
        Animated.parallel([
          Animated.timing(positionRight, {
            toValue: width / 2 - layoutConfigs.AddNoteBtn.size / 2,
            duration: e.duration,
            useNativeDriver: false,
          }),
          Animated.timing(positionBottom, {
            toValue: layoutConfigs.AddNoteBtn.position[2],
            duration: e.duration,
            useNativeDriver: false,
          }),
          // Animated.timing(positionLeft, {
          //   toValue: layoutConfigs.AddNoteBtn.position[3],
          //   duration: e.duration,
          //   useNativeDriver: false,
          // }),
          Animated.timing(size, {
            toValue: layoutConfigs.AddNoteBtn.size,
            duration: e.duration,
            useNativeDriver: false,
          }),
        ]).start();
      }
    );

    return () => {
      keyboardShowListener.remove();
      keyboardHideListener.remove();
    };
  }, []);

  return (
    <Animated.View
      style={{
        position: "absolute",
        bottom: positionBottom,
        left: "auto",
        right: positionRight,
        top: "auto",
        width: size,
        height: size,
        borderRadius: size,
        backgroundColor: layoutConfigs.AddNoteBtn.backgroundColor,
      }}
    >
      <Pressable
        onPress={() => {
          router.navigate("/note/newnote");
        }}
      >
        <View style={styles.AddNoteBtnView}>
          <Text style={styles.AddNoteBtnSymbol}>A</Text>
        </View>
      </Pressable>
    </Animated.View>
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
