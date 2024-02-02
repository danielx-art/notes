import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeBtn from "../../components/HomeBtn";
import { router } from "expo-router";
import useStore from "../../hooks/useStore";
import { useLocalSearchParams } from "expo-router";

export default function NotePage() {
  const { id } = useLocalSearchParams();
  const { addNote, saveNotes } = useStore();
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
      <TextInput
        placeholder="Content"
        placeholderTextColor="rgb(160,160,160)"
        value={content}
        onChangeText={setContent}
        style={styles.contentInput}
        multiline={true}
      />
      <TextInput
        placeholder="Tags (comma-separated)"
        placeholderTextColor="rgb(160,160,160)"
        value={tags}
        onChangeText={(text) => setTags(text.toLowerCase())}
        style={styles.tagsInput}
        autoCapitalize="none"
      />
      <Button title="Save Note" onPress={handleSaveNote} />
      <HomeBtn />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  newNotePage: {
    flex: 1,
    position: "relative",
    width: "100%",
    padding: 16,
  },
  titleInput: {
    fontSize: 20,
    marginBottom: 8,
    color: "rgb(255,255,255)",
  },
  contentInput: {
    flex: 1,
    fontSize: 16,
    textAlignVertical: "top",
    marginBottom: 8,
    color: "rgb(255,255,255)",
  },
  tagsInput: {
    fontSize: 16,
    marginBottom: 8,
    color: "rgb(255,255,255)",
  },
});
