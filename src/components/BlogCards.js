import { View, Text, Image, StyleSheet } from 'react-native';


export default function BlogCards({ name, image, button }) {


    return (

        <View style={styles.blogArea}>

            <Image
                source={image}
                style={styles.blogImages} />


            <Text style={styles.blogText}> {name} </Text>

            <Text style={styles.blogButton}> {button} </Text>






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
        backgroundColor: "green",
        marginTop: 20,

    },



    blogImages: {

        width: 50,
        height: 50,
        marginTop: 280,
        marginLeft: 300,





    },

    blogText: {

        fontSize: 25,
        color: 'red',
        marginLeft: 20,
        marginBottom: 95,



    },

    blogButton: {

        color: "pink",
        fontSize: 20,
        marginRight: 60,
        marginBottom: 90,





    }








}

)


