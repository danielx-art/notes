import { View, StyleSheet, Text } from "react-native"

export default function NoteCard({title, content}) {


    return(
    <View style={styles.outterCard}>
        <View style={styles.card}>
            <Text style={styles.noteTitle}>{title}</Text>
            <Text style={styles.noteContent}>{content.substring(0,40)}</Text>
        </View>
    </View>)
}

const styles = StyleSheet.create({
    outterCard: {
        backgroundColor: 'transparent',
        width: '50%',
        paddingHorizontal: 4,
        paddingVertical: 4,
    },
    card: {
        backgroundColor: 'rgb(41,42,43)',
        paddingTop: 5,
        paddingRight: 5,
        paddingBottom: 10,
        paddingLeft: 10,
        width: '100%',
        borderRadius: 5
    },
    noteTitle: {
        color: 'rgb(225,190,220)'
    },
    noteContent: {
        color: 'rgb(160,160,160)'
    }

});