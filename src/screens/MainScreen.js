import {
    View,
    Text,
    StyleSheet,

} from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import EmojiCards from "../components/EmojiCards";
import CategoryCards from "../components/CategoryCards";
import BlogCards from "../components/BlogCards";

const Stack = createStackNavigator();


const MainScreen = ({ navigation }) => {
    return (

        <View style={styles.container}>
            <View style={styles.emotionarea}>
                <View style={styles.emotions}>
                    <EmojiCards
                        name="Happy"
                        image={require('../../assets/images/happy.png')}
                    />

                    <EmojiCards
                        name="Unhappy"
                        image={require('../../assets/images/happy.png')} />


                    <EmojiCards
                        name="Shock"
                        image={require('../../assets/images/happy.png')} />


                    <EmojiCards
                        name="Unhappy"
                        image={require('../../assets/images/happy.png')} />

                    <EmojiCards
                        name="Unhappy"
                        image={require('../../assets/images/happy.png')} />





                </View>



            </View>


            <View style={styles.categories}>
                <View style={styles.categoriesButtons}>

                    <CategoryCards
                        name="Xdfsdf"
                        image={require('../../assets/images/comfortzone.png')} />

                    <CategoryCards
                        name="Yfdsfs"
                        image={require('../../assets/images/wash.png')} />

                    <CategoryCards
                        name="Zfdsfs"
                        image={require('../../assets/images/happy.png')} />




                </View>
            </View>


            <View style={styles.blogsContainer}>

                <View>
                    <Text style={styles.blogsHeader}> Blog </Text> </View>



                <BlogCards
                    name="fjdfsdfsfsfds"
                    image={require('../../assets/images/happy.png')}
                    button="gdfdgdgfd" />



                <BlogCards
                    name="fjfdsfsfdfds"
                    image={require('../../assets/images/wash.png')}
                    button="dsdsdfgdgdgds" />




                <BlogCards
                    name="fjdffdsfsfdsds"
                    image={require('../../assets/images/happy.png')}
                    button="dsdgfdgddresds" />




            </View>



        </View>











    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#fff",
    },

    emotionarea: {
        width: 370,
        height: 110,
        marginTop: 100,
        marginLeft: 20,
        backgroundColor: "lightgreen",
        borderRadius: 16,
    },

    emotions: {

        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        marginTop: 10,
        marginLeft: 17,
        width: 330,
        height: 100,


    },


    categories: {
        width: 370,
        height: 170,
        marginTop: 10,
        marginLeft: 20,
        borderRadius: 16,
    },

    categoriesButtons: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 30,
        marginTop: 30,
        marginLeft: 20,
        width: 330,
        height: 100,

    },


    blogsContainer: {

        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: 370,
        height: 500,
        marginLeft: 20,





    },


    blogsHeader: {

        color: "#000",
        fontSize: 25,



    },




}

)





export default MainScreen;