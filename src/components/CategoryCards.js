import { View, Text, Image, StyleSheet } from "react-native";

export default function CategoryCards({ name, image }) {

    return (

        <View style={styles.categoryBorder}>

            <Image
                source={image}
                style={styles.categoryImage} />


            <Text style={styles.ImageText}> {name} </Text>




        </View>




    )
}

const styles = StyleSheet.create({

    categoryBorder: {

        width: 100,
        height: 100,
        backgroundColor: "#d8e2dc",
        borderRadius: 16,
        marginBottom: 20,


    },

    categoryImage: {


        justifyContent: "center",
        alignItems: "center",

        width: 90,
        height: 90,
        marginTop: 5,
        marginLeft: 5,

    },


    ImageText: {

        textAlign: "center",
        marginTop: 10,
        fontSize: 15,

    },


















}
)