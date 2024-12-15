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

        width: 95,
        height: 95,
        backgroundColor: "transparent",
        marginBottom: 20,


    },

    categoryImage: {


        justifyContent: "center",
        alignItems: "center",

        width: 90,
        height: 90,
        marginTop: 5,
        marginLeft: 5,
        borderRadius: 16,

    },


    ImageText: {

        textAlign: "center",
        marginTop: 7,
        fontSize: 12,

    },


















}
)