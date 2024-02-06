import { View, StyleSheet, Text } from "react-native";
import { Link } from "expo-router";
import useStore from "../hooks/useStore";

export default function NoteCard({ id }) {
  const note = useStore((state) => state.notes.find((item) => item.id === id));

  if (!note) return;

  return (
    <View style={styles.outterCard}>
      <Link
        href={{
          pathname: "/note/[id]",
          params: { id: id },
        }}
        style={styles.link}
      >
        <View
          style={styles.innerview}
        >
          <Text style={styles.noteTitle} numberOfLines={1} ellipsizeMode="tail">{note.title}</Text>
          <Text style={styles.noteContent} numberOfLines={2} ellipsizeMode="tail">{note.content}</Text>
        </View>
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
    borderWidth: 1,
    borderColor: 'green',
  },
  link: {
    backgroundColor: "rgb(41,42,43)",
    paddingTop: 5,
    paddingRight: 5,
    paddingBottom: 10,
    paddingLeft: 10,
    width: "100%",
    borderRadius: 5,
  },
  innerview: {
    width: "100%",
    borderWidth: 1,
    borderColor: 'red',
  },
  noteTitle: {
    color: "rgb(225,190,220)",
  },
  noteContent: {
    color: "rgb(160,160,160)",
    width: "100%",
    flex: 1,
    flexShrink: 1,
    borderWidth: 1,
    borderColor: 'blue',
  },
});
