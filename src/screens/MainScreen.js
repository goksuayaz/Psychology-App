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

                        <TouchableOpacity onPress={() => navigation.navigate("CounselingScreen")}>
                            <CategoryCards
                                name="Psikolojik Danışmanlık"
                                image={require('../../assets/images/psy.png')} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate("AwarenessScreen")}>
                            <CategoryCards
                                name="Farkındalık"
                                image={require('../../assets/images/awr.png')} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate("InnerJScreen")}>
                            <CategoryCards
                                name="İçsel Yolculuk"
                                image={require('../../assets/images/inn.png')} />
                        </TouchableOpacity>

                    </View>
                </View>

                <View style={styles.blogsContainer}>
                    <View style={styles.blogTextArea}>
                        <Text style={styles.blogsHeader}>Blog </Text>
                    </View>

                    <View style={styles.cardsArea}>

                        <BlogCards
                            backgroundColor="#fcd5ce"
                            text="fjdfsdfsfsfds sdfsdfs sfsfdsfsdfsgrtrtr yuytrrtyy"
                            image={require('../../assets/images/ts.png')}
                        />

                        <BlogCards
                            backgroundColor="#fae1dd"
                            text="fjfdsfsfdfds gfhfhfg jhjfgdgdgfgfdfgdfgdfgdgd"
                            image={require('../../assets/images/ts.png')}
                        />

                        <BlogCards
                            backgroundColor="#ffd7ba"
                            text="fjdffdsfsfdsds rhfghfdhfhgfhfasarterterte"
                            image={require('../../assets/images/ts.png')}
                        />

                    </View>
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
        height: 800,
        marginLeft: 20,
        marginBottom: 200,



    },

    blogTextArea: {
        width: 300,
        height: 30,
        marginBottom: 10,
        marginTop: 70,
        marginRight: 60,


    },

    blogsHeader: {
        color: "#000",
        fontSize: 18,
        marginBottom: 6,
    },

    cardsArea: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: 370,
        height: 395,
        marginBottom: 400

    },
}

)

export default MainScreen;