import { StyleSheet, View, FlatList } from 'react-native';
import NoteCard from '../components/NoteCard';
import AddNoteBtn from '../components/AddNoteBtn';
import useStore from '../hooks/useStore'

export default function Home() {
  const notes = useStore(state => state.notes); // Fetch notes from the store

  return (
    <View style={styles.homePage}>
      <FlatList
        data={notes}
        numColumns={2}
        keyExtractor={(note) => note.id}
        renderItem={({ item }) => (
          <NoteCard title={item.title} content={item.content} />
        )}
        style={styles.flatList}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.contentContainer}
      />
      <AddNoteBtn />
    </View>
  );
}

const styles = StyleSheet.create({
  homePage: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatList: {
    width: '100%',
    padding: 4,
    paddingTop: 50,
  },
  columnWrapper: {
    flex: 1,
    justifyContent: 'space-between',
  },
  contentContainer: {
    
  },
  
});
