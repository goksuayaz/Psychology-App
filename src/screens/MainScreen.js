import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,

} from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import EmojiCards from "../components/EmojiCards";
import CategoryCards from "../components/CategoryCards";
import BlogCards from "../components/BlogCards";

const Stack = createStackNavigator();


const MainScreen = ({ navigation }) => {
    return (

        <ScrollView>

            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.navigate("EmotionScreen")}>
                    <View style={styles.emotionarea}>
                        <Text style={styles.emotiontext}> Duygularını Ne Kadar İyi Tanıyorsun? </Text>
                        <View style={styles.emotions}>
                            <EmojiCards
                                image={require('../../assets/images/sm.png')}
                            />

                            <EmojiCards
                                image={require('../../assets/images/sd.png')} />


                            <EmojiCards
                                image={require('../../assets/images/shocked.png')} />


                            <EmojiCards
                                image={require('../../assets/images/lv.png')} />

                            <EmojiCards
                                image={require('../../assets/images/anger.png')} />





                        </View>



                    </View>
                </TouchableOpacity>


                <View style={styles.categories}>
                    <View style={styles.categoriesButtons}>

                        <TouchableOpacity onPress={() => navigation.navigate("EmotionScreen")}>
                            <CategoryCards
                                name="Counseling"
                                image={require('../../assets/images/counseling.png')} />
                        </TouchableOpacity>


                        <CategoryCards
                            name="Sport"
                            image={require('../../assets/images/sport.png')} />

                        <CategoryCards
                            name="Inner Journey"
                            image={require('../../assets/images/ij.png')} />




                    </View>
                </View>


                <View style={styles.blogsContainer}>

                    <View style={styles.blogText}>
                        <Text style={styles.blogsHeader}>Blog </Text>
                    </View>

                    <BlogCards
                        backgroundColor="#fcd5ce"
                        text="fjdfsdfsfsfds sdfsdfs sfsfdsfsdfsgrtrtr yuytrrtyy"
                        image={require('../../assets/images/angry.png')}
                    />



                    <BlogCards
                        backgroundColor="#ffd7ba"
                        text="fjfdsfsfdfds gfhfhfg jhjfgdgdgfgfdfgdfgdfgdgd"
                        image={require('../../assets/images/wash.png')}
                    />




                    <BlogCards
                        backgroundColor="#fae1dd"
                        text="fjdffdsfsfdsds rhfghfdhfhgfhfasarterterte"
                        image={require('../../assets/images/angry.png')}
                    />


                </View>

            </View>

        </ScrollView>


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
        backgroundColor: "#f8edeb",
        borderRadius: 16,
    },

    emotiontext: {

        textAlign: "center",
        marginTop: 10,
        color: "#b2967d",
        fontWeight: "bold"


    },

    emotions: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 25,
        marginTop: 10,
        marginLeft: 19,
        width: 330,
        height: 60,



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
        marginTop: 20,


    },

    blogText: {

        width: 300,
        height: 35,
        marginTop: 20,
        marginRight: 60,


    },


    blogsHeader: {

        color: "#000",
        fontSize: 25,



    },




}

)


export default MainScreen;