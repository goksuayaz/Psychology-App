import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Dimensions,

} from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import EmojiCards from "../components/EmojiCards";
import CategoryCards from "../components/CategoryCards";
import BlogCards from "../components/BlogCards";



const { width } = Dimensions.get('window');

const Stack = createStackNavigator();


const MainScreen = ({ navigation }) => {
    return (

        <ScrollView >
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
                                image={require('../../assets/images/innerj.png')} />
                        </TouchableOpacity>

                    </View>
                </View>

                <View style={styles.blogsContainer}>
                    <View style={styles.blogTextArea}>
                        <Text style={styles.blogsHeader}>Blog </Text>
                    </View>

                    <View style={styles.cardsArea}>

                        <TouchableOpacity onPress={() => navigation.navigate("SMScreen")}>
                            <BlogCards
                                backgroundColor="#f9c74f"
                                text="Sosyal Ağların Gölgesi: İnsan Psikolojisine Etkileri..."
                                image={require('../../assets/images/socmed.png')}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate("BurnoutScreen")}>
                            <BlogCards
                                backgroundColor="#43aa8b"
                                text="Gizli Tehdit: Tükenmişlik Sendromu ve Ruhsal Dengenin Sarsılması..."
                                image={require('../../assets/images/sendr.png')}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate("LonelinessScreen")}>
                            <BlogCards
                                backgroundColor="#90be6d"
                                text="Yalnızlık: Çağımızın Sessiz Arkadaşı ve Psikolojik Etkileri..."
                                image={require('../../assets/images/alone.png')}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate("SleepScreen")}>
                            <BlogCards
                                backgroundColor="#f9844a"
                                text="Günümüz Hayatı ve Uyku Krizi: Neden Uyuyamıyoruz?..."
                                image={require('../../assets/images/slpp.png')}
                            />
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        </ScrollView>

    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#f8edeb",
    },

    emotionarea: {
        width: width * 0.9,
        height: 110,
        marginTop: 60,
        marginHorizontal: width * 0.05,
        backgroundColor: "#f94144",
        borderRadius: 16,
    },

    emotiontext: {

        textAlign: "center",
        marginTop: 10,
        color: "#343a40",
        fontWeight: "bold"
    },

    emotions: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 10,
        marginTop: 15,
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
        marginTop: 40,
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
        marginTop: 40,



    },

    blogTextArea: {
        width: 300,
        height: 30,
        marginBottom: 10,
        marginTop: 70,
        marginRight: 60,



    },

    blogsHeader: {
        color: "black",
        fontSize: 35,
        marginBottom: 100,
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