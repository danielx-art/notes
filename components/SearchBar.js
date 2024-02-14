import { View, StyleSheet, TextInput } from "react-native";

export default function SearchBar({
  containerStyle,
  value,
  onSubmit,
  onChangeText,
}) {
  return (
    <View style={[styles.container, { ...containerStyle }]}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmit}
        style={styles.searchBar}
        placeholder="Search here.."
        placeholderTextColor={"rgba(225, 190, 220, 0.2)"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    borderWidth: 0.5,
    borderColor: "rgba(225,190,220, 0.4)",
    height: 40,
    borderRadius: 40,
    paddingLeft: 15,
    fontSize: 16,
    color: "rgb(255, 255, 255)",
  },
  container: {
    justifyContent: "center",
  },
});
