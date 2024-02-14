import {
  StyleSheet,
  View,
  FlatList,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import NoteCard from "../components/NoteCard";
import AddNoteBtn from "../components/AddNoteBtnAnimated";
import SearchBar from "../components/SearchBar";
import NotFound from "../components/NotFound";
import useStore from "../hooks/useStore";
import { useCallback, useEffect, useState } from "react";
const { width } = Dimensions.get("window");

const sortNotes = (arr) =>
  arr.sort((a, b) => {
    const an = parseInt(a.lastModified);
    const bn = parseInt(b.lastModified);
    if (an < bn) return 1;
    if (an == bn) return 0;
    if (an > bn) return -1;
  });

export default function Home() {
  const allNotes = useStore((state) => state.notes);
  const [searchQuery, setSearchQuery] = useState("");
  const [resultNotFound, setResultNotFound] = useState(false);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    setNotes(sortNotes(allNotes));
  }, [allNotes]);

  const handleOnSearchInput = (text) => {
    setSearchQuery(text);
    if (text.trim().length <= 0) {
      setNotes(sortNotes(allNotes));
      setResultNotFound(false);
      return;
    }

    const filteredNotes = notes.filter((note) => {
      if (note.title.toLowerCase().includes(text.toLowerCase())) {
        return note;
      }
    });

    if (filteredNotes.length) {
      setNotes([...filteredNotes]);
      setResultNotFound(false);
    } else {
      setResultNotFound(true);
    }
  };

  const handleSearchSumbmit = () => {
    setSearchQuery("");
    setResultNotFound(false);
  };

  const renderItem = useCallback(({ item }) => <NoteCard id={item.id} />, []);

  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          {notes.length ? (
            <SearchBar
              value={searchQuery}
              onChangeText={handleOnSearchInput}
              onSubmit={handleSearchSumbmit}
              containerStyle={{ marginTop: 0, padding: 10 }}
            />
          ) : null}

          {resultNotFound ? (
            <NotFound />
          ) : (
            <FlatList
              data={notes}
              numColumns={2}
              keyExtractor={(note) => note.id}
              renderItem={renderItem}
              style={styles.flatList}
              columnWrapperStyle={{ justifyContent: "space-between" }}
            />
          )}
        </View>
      </TouchableWithoutFeedback>
      <AddNoteBtn />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
  },
  flatList: {
    padding: 4,
    paddingTop: 0,
  },
});
