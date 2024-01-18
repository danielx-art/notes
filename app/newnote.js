import { View, Text, StyleSheet } from "react-native";
import HomeBtn from "../components/HomeBtn";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native-gesture-handler";

export default function Page() {

    return(
        <SafeAreaView style={styles.NewNotePage}>
            <TextInput />
            <HomeBtn />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    NewNotePage: {
        flex: 1,
        position: 'relative',
        width: '100%',
        borderWidth: 2,
        borderColor: 'green',
    },
    
})