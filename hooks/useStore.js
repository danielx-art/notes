import {create} from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useStore = create(set => ({
  notes: [],
  addNote: (note) => set(state => ({ notes: [...state.notes, note] })),
  // ... other actions like deleteNote, updateNote, etc.
  
  // Load notes from AsyncStorage
  loadNotes: async () => {
    const savedNotes = await AsyncStorage.getItem('notes');
    if (savedNotes) set({ notes: JSON.parse(savedNotes) });
  },

  // Save notes to AsyncStorage
  saveNotes: async () => {
    const { notes } = useStore.getState();
    await AsyncStorage.setItem('notes', JSON.stringify(notes));
  },
  // ... other states and actions
}));

export default useStore;
