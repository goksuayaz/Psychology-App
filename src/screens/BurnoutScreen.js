import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BurnoutScreen = () => {
    return (

        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.headerTop}>Gizli Tehdit: Tükenmişlik Sendromu ve Ruhsal Dengenin Sarsılması</Text>
                <Text style={styles.textArea}> Günümüz toplumunda hızla değişen yaşam koşulları, yoğun iş temposu ve sürekli artan beklentiler, bireylerin zihinsel ve fiziksel sınırlarını zorlamaktadır. Bu dinamik, modern dünyanın en yaygın psikolojik problemlerinden biri olan Tükenmişlik Sendromu'nun yaygınlaşmasına zemin hazırlamaktadır. İlk olarak 1974 yılında Herbert Freudenberger tarafından tanımlanan tükenmişlik sendromu, kişinin kronik stres nedeniyle enerji, motivasyon ve üretkenlik kaybı yaşamasıyla kendini gösterir.</Text>
                <Text style={styles.header}> Tükenmişlik Sendromunun Belirtileri</Text>
                <Text style={styles.textArea}> Tükenmişlik sendromu, genellikle fiziksel, duygusal ve davranışsal belirtilerle kendini belli eder. Fiziksel olarak enerji kaybı, uyku problemleri ve sık sık hastalanma gibi durumlar yaşanabilir. Duygusal belirtiler arasında karamsarlık, umutsuzluk ve yetersizlik hissi ön plandadır. Davranışsal olarak ise iş performansında düşüş, sosyal hayattan uzaklaşma ve günlük sorumlulukları yerine getirme konusunda isteksizlik gözlemlenebilir. </Text>
                <Text style={styles.header}> Tükenmişlik Sendromunun Nedenleri  </Text>
                <Text style={styles.textArea}> Bu sendromun ortaya çıkmasında kişisel ve çevresel birçok etken rol oynar. İş hayatındaki aşırı iş yükü, düşük kontrol alanı ve yetersiz destek tükenmişliği tetikleyen başlıca faktörlerdir. Ayrıca, mükemmeliyetçilik gibi kişisel özellikler ve kişinin kendine zaman ayıramaması da tükenmişlik sendromuna zemin hazırlar. </Text>
                <Text style={styles.header}> Tükenmişlik ile Nasıl Başa Çıkılır?  </Text>
                <Text style={styles.textArea}> Tükenmişlik sendromu ile başa çıkmak için öncelikle kişinin bu durumu kabul etmesi ve yardım arayışına yönelmesi önemlidir. Profesyonel destek almak, özellikle bir psikologla çalışmak, bu süreçte çok yardımcı olabilir. Bunun yanında, stres yönetimi teknikleri, mindfulness gibi farkındalık çalışmaları ve kişisel ilgi alanlarına zaman ayırmak da kişinin toparlanmasını destekler. İş yerinde ise açık iletişim kurmak ve gerektiğinde sınırlar koymak, iş-yaşam dengesini sağlamak açısından kritik öneme sahiptir. </Text>
                <Text style={styles.header}> Sonuç </Text>
                <Text style={styles.textArea}> Tükenmişlik sendromu, sadece bireyi değil, bireyin çevresindeki insanları ve genel yaşam kalitesini de etkileyen ciddi bir durumdur. Bu nedenle hem bireylerin hem de toplumun farkındalık kazanması büyük önem taşır. Modern dünyada başarılı ve sağlıklı bir yaşam sürdürebilmek için, stres yönetimi ve kişisel bakımın önceliklendirilmesi gerekmektedir. Unutulmamalıdır ki, psikolojik dayanıklılığı artırmanın ilk adımı, kendimize ve ihtiyaçlarımıza kulak vermektir. </Text>

            </View>
        </ScrollView>
    )
}

export default BurnoutScreen

const styles = StyleSheet.create({

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

    textArea: {

        fontSize: 14,
        margin: 10,



    },



})