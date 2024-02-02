import {create} from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useStore = create(set => ({
  notes: [],
  noteCounter: 0,

  addNote: (note) => set(state => {
    const newNoteWithId = { ...note, id: state.noteCounter.toString() };
    return { 
      notes: [...state.notes, newNoteWithId],
      noteCounter: state.noteCounter + 1
    };
  }),
  
  loadNotes: async () => {
    const savedNotes = await AsyncStorage.getItem('notes');
    const savedCounter = await AsyncStorage.getItem('noteCounter');

    if (savedNotes) set({ 
      notes: JSON.parse(savedNotes),
      noteCounter: savedCounter ? parseInt(savedCounter, 10) : 0
    });
  },

  saveNotes: async () => {
    const { notes, noteCounter } = useStore.getState();
    await AsyncStorage.setItem('notes', JSON.stringify(notes));
    await AsyncStorage.setItem('noteCounter', noteCounter.toString());
  },
  
  updateNote: (updatedNote) => set(state => {
    const notes = state.notes.map(note => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      }
      return note;
    });
    return { notes };
  }),
}));

export default useStore;

