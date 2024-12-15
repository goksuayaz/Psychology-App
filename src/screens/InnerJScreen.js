import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const InnerJScreen = () => {
    return (

        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.topHeader}>İçsel Yolculuk: Kendimize Dönüşün Başlangıcı </Text>

                <Text style={styles.textArea}>
                    İçsel yolculuk, bireyin kendi benliğiyle derin bir bağ kurmak için yaptığı ruhsal bir keşif sürecidir. Bu yolculuk, dış dünyadan bir süreliğine uzaklaşarak iç sesimize kulak verme, duygularımızı ve düşüncelerimizi anlama çabasıdır. Aslında bu süreç, kim olduğumuzu, ne istediğimizi ve hayatta neyi anlamlı bulduğumuzu sorguladığımız bir arayıştır. </Text>

                <Text style={styles.textArea}>
                    Peki, içsel yolculuktan ne anlamalıyız? Bu, sadece kendimize vakit ayırmak ya da meditasyon yapmak değil; aynı zamanda hayatımızın hangi değerler üzerine kurulu olduğunu, hangi korkularımızla yüzleşmemiz gerektiğini ve hangi hedeflere ulaşmak istediğimizi fark etmektir. İçsel yolculuk, bazen geçmişteki anılarımızla barışmak, bazen de geleceğimiz için daha bilinçli bir yön belirlemek anlamına gelir. </Text>

                <Text style={styles.textHeader}> İçsel Yolculuk Nasıl Yapılır? </Text>
                <Text style={styles.textArea}>
                    Bu yolculuk, kişisel bir süreçtir ve herkes için farklı bir yol haritası vardır. Ancak temel olarak şunları içerebilir:</Text>
                <Text style={styles.textArea}>
                    Farkındalık geliştirme: Duygularınızı ve düşüncelerinizi yargılamadan gözlemlemeyi öğrenmek.</Text>
                <Text style={styles.textArea}>
                    Kendinizle baş başa kalma: Sessiz bir ortamda, belki bir günlük tutarak veya meditasyon yaparak iç dünyanızı keşfetmek.</Text>
                <Text style={styles.textArea}>
                    Sorgulama: Kendinize derin sorular sormak; "Gerçekten ne istiyorum?", "Beni ne mutlu ediyor?" gibi. </Text>
                <Text style={styles.textArea}>
                    Duygularla yüzleşme: Bastırdığınız korkularınızı, hayal kırıklıklarınızı ve arzularınızı anlamak ve kabul etmek. </Text>

                <Text style={styles.textHeader}>
                    Kendimizi Tanımamız İçin İçsel Yolculuğun Önemi </Text>

                <Text style={styles.textArea}>
                    Kendimizi tanımadan gerçek anlamda mutlu ve tatmin olmuş bir yaşam sürmek zordur. İçsel yolculuk, yaşamımızdaki çelişkileri çözmemize, daha sağlıklı ilişkiler kurmamıza ve kendi potansiyelimizi keşfetmemize olanak tanır. Bu süreçte, hayatta neyin gerçekten önemli olduğunu anlar ve dış dünyanın dayattığı beklentilerden sıyrılmayı öğreniriz. </Text>

                <Text style={styles.textHeader}>
                    Neden İçsel Yolculuğa Çıkmalıyız? </Text>

                <Text style={styles.textArea}>
                    Çünkü yaşam, yalnızca dış dünyadaki başarılarla değil, iç dünyamızdaki huzurla da ilgilidir. İçsel yolculuk, hayatımızın kontrolünü yeniden ele almamızı sağlar. Bu yolculuğa çıkan kişi, hem kendi zayıflıklarını hem de güçlü yönlerini tanır. Kendi değerlerini ve sınırlarını bilerek daha anlamlı bir hayat sürdürme şansı yakalar. </Text>

                <Text style={styles.textArea}>
                    Unutmayın, içsel yolculuk bir varış noktası değil, sürekli bir süreçtir. Bu süreçte kendinize şefkatle yaklaşmayı ve acele etmemeyi unutmamalısınız. Her adım, sizi daha iyi bir versiyonunuza yaklaştıracaktır.</Text>
            </View >

        </ScrollView >
    )
}

export default InnerJScreen

const styles = StyleSheet.create({

    container: {

        backgroundColor: "#f8edeb"

    },

    topHeader: {

        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 60,
        margin: 5,

    },

    textArea: {

        fontSize: 14,
        marginTop: 5,
        margin: 10

    },

    textHeader: {

        fontWeight: "bold",
        fontSize: 15,
        margin: 10,



    },


    article: {

        fontSize: 14,
        marginBottom: 2,
        margin: 10,



    }



})