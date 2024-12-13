import { View, Text, Image, StyleSheet } from 'react-native';

export default function EmojiCards({ name, image }) {

    return (

        <View>

            <Image
                source={image}
                style={styles.emoji} />


        </View>



    )
}


const styles = StyleSheet.create({
    emoji: {

        width: 40,
        height: 40,
        marginBottom: 5,
    },



});


