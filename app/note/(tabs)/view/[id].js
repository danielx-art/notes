import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import Markdown from 'react-native-markdown-display';
import useStore from '../../../../hooks/useStore';

export default function NoteViewScreen() {
  const { id } = useLocalSearchParams();
  const note = useStore(state => state.notes.find(n => n.id === id));

  if (!note) {
    return <View><Text>Note not found</Text></View>;
  }

  return (
    <View style={styles.container}>
      <Markdown>{note.content}</Markdown>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});