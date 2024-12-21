import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SMScreen = () => {
    return (

        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.headerTop}> Sosyal Ağların Gölgesi: İnsan Psikolojisine Etkileri </Text>

                <Text style={styles.textArea}>

                    Günümüzde sosyal medya, hayatımızın ayrılmaz bir parçası haline geldi. Facebook, Instagram, Twitter, TikTok gibi platformlar, insanlarla iletişim kurmamızı, gündemi takip etmemizi ve kendimizi ifade etmemizi sağlasa da; aşırı kullanımın ruh sağlığı üzerinde önemli etkileri olduğu artık bilinen bir gerçek. Özellikle son yıllarda yapılan araştırmalar, sosyal medyanın bireylerin ruhsal sağlığı üzerinde hem olumlu hem de olumsuz birçok etkiye sahip olduğunu gösteriyor. </Text>

                <Text style={styles.header}>
                    1. Sosyal Karşılaştırma ve Özgüven Problemleri </Text>

                <Text style={styles.textArea}>
                    Sosyal medya platformları, insanların hayatlarının yalnızca “en iyi anlarını” paylaştığı bir vitrindir. Tatiller, başarılar, estetik görüntüler ve mutlu anlar, gerçeğin sadece bir kısmıdır. Ancak bu paylaşımlara sürekli maruz kalmak, bireyde sosyal karşılaştırma yapma eğilimini artırır. Kendi hayatını başkalarının "mükemmel" görünen yaşamlarıyla kıyaslayan kişilerde, yetersizlik duygusu ve özgüven problemleri ortaya çıkabilir. Özellikle genç bireylerde, bu karşılaştırmalar depresyon ve anksiyete belirtilerini tetikleyebilir. </Text>

                <Text style={styles.headerSmall}>
                    Araştırmalar ne diyor? </Text>

                <Text style={styles.textArea}>
                    Bir çalışmada, Instagram kullanımının özellikle ergenlik dönemindeki bireylerde beden imajı memnuniyetsizliğini artırdığı ve bu durumun özsaygı düşüklüğüne yol açtığı bulunmuştur. Sosyal medya filtreleri ve idealize edilmiş güzellik algısı, “gerçekçi olmayan” beklentiler yaratarak ruh sağlığını olumsuz etkileyebilir.</Text>

                <Text style={styles.header}>
                    2. Bağımlılık ve Dikkat Dağınıklığı </Text>

                <Text style={styles.textArea}>
                    Sosyal medya platformlarının algoritmaları, kullanıcıların mümkün olduğunca uzun süre ekran başında kalması için tasarlanmıştır. Sürekli bildirimler, “beğeniler” ve yorumlar; dopamin salgısını tetikler ve kısa süreli bir mutluluk hissi yaratır. Ancak bu süreç zamanla bir bağımlılık döngüsüne dönüşebilir. Sosyal medya bağımlılığı, odaklanma problemlerine, iş veya okul performansında düşüşe ve uyku düzensizliklerine neden olabilir.</Text>

                <Text style={styles.headerSmall}>
                    Dikkat dağıtan etkiler:
                    Sürekli sosyal medya kontrolü, derin odaklanmayı zorlaştırır. Özellikle çalışma veya öğrenme sırasında telefon kontrol etme isteği, üretkenliği ciddi anlamda azaltır.</Text>

                <Text style={styles.header}>
                    3. Yalnızlık ve Sosyal İzolasyon </Text>

                <Text style={styles.textArea}>
                    Sosyal medya, insanları bir araya getirme amacıyla doğmuş olsa da, paradoksal bir şekilde yalnızlık hissini artırabilir. Dijital etkileşimler yüz yüze iletişimin yerini aldığında, bireyler gerçek sosyal bağlardan uzaklaşabilir. Yapılan bir araştırma, günde 2 saatten fazla sosyal medya kullanan bireylerin yalnızlık hissetme oranının, daha az kullananlara göre çok daha yüksek olduğunu göstermektedir. </Text>

                <Text style={styles.headerSmall}>
                    "Gerçek" ve "sanal" dostluklar:</Text>

                <Text style={styles.textArea}>
                    Sanal platformlardaki etkileşimler, derin ve anlamlı bağlar kurmak için yeterli değildir. İnsan psikolojisi, empati, beden dili ve göz teması gibi unsurlara ihtiyaç duyar. Sosyal medya bu unsurları yeterince karşılayamadığı için bireyler yalnızlık duygusuna kapılabilir. </Text>

                <Text style={styles.header}>
                    4. Anksiyete ve FOMO (Kaçırma Korkusu)  </Text>

                <Text style={styles.textArea}>
                    FOMO, yani "Fear of Missing Out", sosyal medyanın en sık rastlanan psikolojik etkilerinden biridir. Başkalarının yaptığı etkinlikleri veya başarılarını sürekli olarak takip etmek, kişinin kendini “kaçırmış” gibi hissetmesine neden olabilir. Bu durum özellikle gençlerde sosyal kaygı bozukluğunu artırabilir.</Text>

                <Text style={styles.textArea}>
                    Örnek:
                    Arkadaşlarının bir etkinlikte eğlendiğini gören bir kişi, kendi hayatının yeterince "eğlenceli" olmadığına inanarak mutsuz olabilir. Bu his, zamanla anksiyete ve depresyon belirtilerini tetikleyebilir. </Text>


                <Text style={styles.header}>
                    5. Olumlu Etkiler: Farkındalık ve Destek Ağları  </Text>

                <Text style={styles.textArea}>
                    Elbette sosyal medyanın sadece olumsuz etkilerinden bahsetmek haksızlık olur. Bilinçli ve dengeli kullanıldığında sosyal medya, bireylerin farkındalık kazanmasına ve destek ağları oluşturmasına olanak tanır. Ruh sağlığı konularında farkındalık yaratan sayfalar, bireylerin sorunlarını paylaşabileceği gruplar ve online terapi hizmetleri, sosyal medyanın pozitif yönlerini oluşturur.</Text>


                <Text style={styles.header}>
                    Çözüm Önerileri: Sosyal Medya ile Sağlıklı İlişki Kurmak </Text>

                <Text style={styles.textArea}>
                    1. Süreyi sınırlayın: Günde belirli saatlerde sosyal medyayı kullanmak, bağımlılığı azaltır.
                    2. Dijital detoks yapın: Haftada bir gün sosyal medya molası verin.
                    3. Gerçek ilişkilerinize yatırım yapın: Yüz yüze iletişime öncelik verin.
                    4. Bilinçli içerik tüketin: Olumlu ve sizi besleyen içerikleri takip edin.
                    5. Kendinizi karşılaştırmaktan kaçının: Unutmayın, sosyal medya gerçeğin tamamını yansıtmaz.  </Text>

                <Text style={styles.header}>
                    Sonuç </Text>

                <Text style={styles.textArea}>
                    Sosyal medya, doğru kullanıldığında faydalı bir araç olabilirken, aşırı ve bilinçsiz kullanımı ruhsal sağlığı ciddi şekilde etkileyebilir. Önemli olan, sosyal medyanın hayatımızdaki yerini bilinçli bir şekilde yönetmek ve gerçek yaşamla dijital dünya arasında sağlıklı bir denge kurabilmektir.

                    Her bireyin deneyimi farklıdır. Bu yüzden, sosyal medyanın sizi nasıl etkilediğini gözlemlemek ve gerektiğinde bir uzmandan destek almak, ruh sağlığınızı korumanın en etkili yoludur. </Text>


            </View >
        </ScrollView>
    )
}

export default SMScreen

const styles = StyleSheet.create({

    container: {



    },

    headerTop: {


        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 60,
        margin: 5,

    },


    header: {

        fontWeight: "bold",
        fontSize: 15,
        marginTop: 10,
        margin: 10,

    },

    headerSmall: {


        fontWeight: "bold",
        fontSize: 14,
        margin: 10,
    },


    textArea: {

        fontSize: 14,
        margin: 10,



    },







})