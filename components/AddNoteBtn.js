import { View, Text, StyleSheet } from "react-native"
import PressableOpacity from "./PressableOpacity"
import { router } from "expo-router"

import layoutConfigs from "../layoutConfigs"

export default function AddNoteBtn() {

    return(
        <PressableOpacity onPress={()=>{router.navigate("/newnote")}} style={styles.AddNoteBtn}>
            <View style={styles.AddNoteBtnView}>
                <Text style={styles.AddNoteBtnSymbol}>a</Text>
            </View>
        </PressableOpacity>
    )
}

const styles = StyleSheet.create({
    AddNoteBtn: {
        position: 'absolute',
        top: layoutConfigs.AddNoteBtnPosition[0],
        right: layoutConfigs.AddNoteBtnPosition[1],
        bottom: layoutConfigs.AddNoteBtnPosition[2],
        left: layoutConfigs.AddNoteBtnPosition[3],
        width: layoutConfigs.AddNoteBtnSize,
        height: layoutConfigs.AddNoteBtnSize,
        borderRadius: layoutConfigs.AddNoteBtnSize,
        backgroundColor: layoutConfigs.AddNoteBtnBackgroundColor,
    },
    AddNoteBtnView: {
        flex: 1,
        width: '100%',
        height: '100%',
        minHeight: '100%',
        minWidth: '100%',
        justifyContent: "center",
        alignItems: 'center',
    },
    AddNoteBtnSymbol:{
        color: 'rgb(255,255,255)',
        fontSize: layoutConfigs.AddNoteBtnSize/1.8,
        textAlign: 'center',
    }
})