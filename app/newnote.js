import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeBtn from "../components/HomeBtn";
import { router } from "expo-router";
import useStore from "../hooks/useStore";
import { v4 as uuidv4 } from "uuid";

export default function NewNotePage() {
  const { addNote, saveNotes } = useStore();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");

  const handleSaveNote = () => {
    const newNote = {
      id: uuidv4(),
      title,
      content,
      tags: tags.split(",").map((tag) => tag.trim().toLowerCase()), // Ensures tags are lowercase
    };
    addNote(newNote);
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
