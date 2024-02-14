import { useState } from "react";
import { TextInput, StyleSheet } from "react-native";

export default function AwareTextInput({ style, onFocus, onBlur, ...props }) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = (event) => {
    setIsFocused(true);
    if (onFocus) {
      onFocus(event);
    }
  };

  const handleBlur = (event) => {
    setIsFocused(false);
    if (onBlur) {
      onBlur(event);
    }
  };

  const combinedStyles = [
    style,
    styles.input,
    isFocused ? styles.focused : styles.blurred,
  ];

  return (
    <TextInput
      style={combinedStyles}
      onFocus={handleFocus}
      onBlur={handleBlur}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    // Default
  },
  focused: {
    color: "rgba(225,190,220, 0.8)",
    backgroundColor: "rgba(0,0,0,0.1)",
  },
  blurred: {
    color: "rgba(225,190,220, 0.3)",
    backgroundColor: "rgba(0,0,0,0)",
  },
});
