import { View, Text, Image, StyleSheet, Button } from 'react-native';


export default function BlogCards({ text, image, backgroundColor }) {


    return (

        <View style={[styles.blogArea, { backgroundColor }]}>
            <View style={styles.blogIndex}>
                <Text style={styles.blogText}> {text} </Text>
                <View style={styles.imageArea}>
                    <Image
                        source={image}
                        style={styles.blogImages} />


                </View>
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
        marginBottom: 10,
        borderRadius: 12,




    },

    blogIndex: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: 370,
        height: 105,

    },


    blogImages: {

        width: 80,
        height: 80,
        borderRadius: 16,

    },

    blogText: {
        width: 260,
        height: 80,
        fontSize: 14,
        color: '#6930c3',
        marginLeft: 14,
        marginTop: 30,
        textAlign: "center",
        fontWeight: "bold"

    },


    imageArea: {
        justifyContent: "center",
        alignItems: "center",
        width: 90,
        height: 90,
        marginTop: 5,
        marginLeft: 4,



    },








}

)


