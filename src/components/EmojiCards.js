import { View, Text, Image, StyleSheet } from 'react-native';

export default function EmojiCards({ name, image }) {

    return (

        <View>
            <Image
                source={image}
                style={styles.emoji} />

            <Text style={styles.emojis}> {name} </Text>


        </View>



    )
}


const styles = StyleSheet.create({
    emoji: {
        width: 60,
        height: 60,
        borderRadius: 50,
        backgroundColor: "green",
        marginBottom: 5,
    },


    emojis: {

        textAlign: "center",
        fontSize: 14,
    },
});


