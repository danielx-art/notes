import { View, StyleSheet, Text, Pressable, Dimensions } from "react-native";
import { Link } from "expo-router";
import useStore from "../hooks/useStore";
const { width } = Dimensions.get("window");

export default function NoteCard({ id }) {
  const note = useStore((state) => state.notes.find((item) => item.id === id));

  if (!note) return;

  return (
    <View style={styles.outterCard}>
      <Link
        href={{
          pathname: "/note/edit/[id]",
          params: { id: id },
        }}
        style={styles.link}
        asChild
      >
        <Pressable style={styles.innerview}>
          <Text style={styles.noteTitle} numberOfLines={1} ellipsizeMode="tail">
            {note.title}
          </Text>
          <Text
            style={styles.noteContent}
            numberOfLines={2}
            ellipsizeMode="tail"
          >
            {note.content}
          </Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  outterCard: {
    backgroundColor: "transparent",
    paddingHorizontal: 4,
    paddingVertical: 4,
    flex: 0,
    width: "50%",
  },
  link: {
    backgroundColor: "rgb(41,42,43)",
    paddingTop: 5,
    paddingRight: 5,
    paddingBottom: 10,
    paddingLeft: 10,
    //width: "100%",
    borderRadius: 5,
  },
  innerview: {
    //width: "100%",
  },
  noteTitle: {
    color: "rgb(225,190,220)",
    //width: "100%",
    flexShrink: 1,
  },
  noteContent: {
    color: "rgb(160,160,160)",
    //width: "100%",
    flexShrink: 1,
  },
});
