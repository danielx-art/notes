import { View, StyleSheet, Text } from "react-native";
import { Link } from "expo-router";
import useStore from "../hooks/useStore";

export default function NoteCard({ id }) {
  const note = useStore((state) => state.notes.find((item) => item.id === id));

  if (!note) return;

  console.log(id); //debugg

  return (
    <View style={styles.outterCard}>
      <Link
        href={{
          pathname: "/note/[id]",
          params: { id: id },
        }}
        style={styles.card}
      >
        <Text style={styles.noteTitle}>{note.title}</Text>
        <Text style={styles.noteContent}>{note.content.substring(0, 40)}</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  outterCard: {
    backgroundColor: "transparent",
    width: "50%",
    paddingHorizontal: 4,
    paddingVertical: 4,
  },
  card: {
    backgroundColor: "rgb(41,42,43)",
    paddingTop: 5,
    paddingRight: 5,
    paddingBottom: 10,
    paddingLeft: 10,
    width: "100%",
    borderRadius: 5,
  },
  noteTitle: {
    color: "rgb(225,190,220)",
  },
  noteContent: {
    color: "rgb(160,160,160)",
  },
});
