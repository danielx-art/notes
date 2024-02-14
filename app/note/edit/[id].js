import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import useStore from "../../../hooks/useStore";
import HomeBtn from "../../../components/HomeBtn";
import AwareTextInput from "../../../components/AwareTextInput";

export default function NoteEditScreen() {
  const { id } = useLocalSearchParams();
  const { updateNote, saveNotes } = useStore();
  const note = useStore((state) => state.notes.find((item) => item.id === id));
  const [title, setTitle] = useState(note?.title || "");
  const [content, setContent] = useState(note?.content || "");
  const [tags, setTags] = useState((note?.tags || []).join(", "));

  const handleSaveNote = () => {
    const updatedNote = {
      ...note,
      title,
      content,
      tags: tags.split(",").map((tag) => tag.trim().toLowerCase()),
    };
    updateNote(updatedNote);
    saveNotes();
    router.back();
  };

  return (
    <SafeAreaView style={styles.newNotePage}>
      <TextInput
        placeholder="Title"
        placeholderTextColor="rgb(160,160,160)"
        value={title}
        onChangeText={setTitle}
        style={styles.titleInput}
      />
      <AwareTextInput
        placeholder="Tags (comma-separated)"
        placeholderTextColor="rgb(160,160,160)"
        value={tags}
        onChangeText={(text) => setTags(text.toLowerCase())}
        style={styles.tagsInput}
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Content"
        placeholderTextColor="rgb(160,160,160)"
        value={content}
        onChangeText={setContent}
        style={styles.contentInput}
        multiline={true}
      />

      <Button title="Save Note" onPress={handleSaveNote} />
      <HomeBtn />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  newNotePage: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 15,
    paddingBottom: 15,
    marginTop: 0,
    paddingTop: 0,
    gap: 5,
  },
  titleInput: {
    fontSize: 20,
    color: "rgb(255,255,255)",
    // borderBottomWidth: 0.5,
    // borderColor: "rgba(225,190,220, 0.1)",
  },
  contentInput: {
    flex: 1,
    fontSize: 16,
    textAlignVertical: "top",
    color: "rgb(255,255,255)",
  },
  tagsInput: {
    fontSize: 16,
    color: "rgba(225,190,220, 0.4)",
    backgroundColor: "rgba(0,0,0,0.1)",
    padding: 1,
    paddingHorizontal: 10,
    borderRadius: 50,
  },
});
