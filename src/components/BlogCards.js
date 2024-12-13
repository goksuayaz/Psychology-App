import { View, Text, Image, StyleSheet } from 'react-native';


export default function BlogCards({ text, image, backgroundColor }) {


    return (

        <View style={[styles.blogArea, { backgroundColor }]}>
            <View style={styles.blogIndex}>
                <Text style={styles.blogText}> {text} </Text>
                <Image
                    source={image}
                    style={styles.blogImages} />


            </View>
        </View>

    )







}

const styles = StyleSheet.create({

    blogArea: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: 370,
        height: 120,
        // backgroundColor: "#ffe5d9",
        marginTop: 20,
        marginBottom: 10,
        borderRadius: 12,

    },

    blogIndex: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: 370,
        height: 100,

    },





    blogImages: {

        width: 50,
        height: 50,

    },

    blogText: {
        width: 270,
        height: 100,
        fontSize: 15,
        color: 'black',
        marginRight: 50,
        marginTop: 120,





    },





}

)


