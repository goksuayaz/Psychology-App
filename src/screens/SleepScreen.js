import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SleepScreen = () => {
    return (

        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.headerTop}> Günümüz Hayatı ve Uyku Krizi: Neden Uyuyamıyoruz? </Text>
                <Text style={styles.textArea}> Modern hayatın yoğun temposu, teknoloji bağımlılığı ve stres, uyku problemlerini günümüz insanının en büyük sağlık sorunlarından biri haline getirdi. Eskiden dinlenme ve yenilenme zamanı olarak görülen uyku, artık birçok kişi için bir lüks ya da zaman kaybı gibi algılanıyor. Ancak kaliteli uyku, hem zihinsel hem de fiziksel sağlığımız için vazgeçilmez bir ihtiyaçtır. Peki, neden uyuyamıyoruz? Uyku neden bu kadar büyük bir sorun haline geldi? Ve nasıl daha iyi bir uyku düzeni oluşturabiliriz? </Text>
                <Text style={styles.header}> Günümüz İnsanının Uyuyamama Nedenleri      </Text>
                <Text style={styles.textArea}> Teknoloji ve Mavi Işık Maruziyeti
                    Akıllı telefonlar, tabletler ve bilgisayar ekranları, melatonin hormonunun salgılanmasını engelleyen mavi ışık yayar. Bu da vücudumuzun doğal biyolojik saatini bozarak uykuya dalmayı zorlaştırır.

                    Stres ve Anksiyete
                    Modern yaşamın getirdiği yoğun iş temposu, ekonomik kaygılar ve kişisel sorunlar, zihni sürekli meşgul eder. Bu durum, uykuya dalmayı zorlaştırır ve gece boyunca uyanmalara yol açar.

                    Düzensiz Uyku Alışkanlıkları
                    Geç yatmak, hafta içi ve hafta sonu farklı saatlerde uyumak gibi düzensiz alışkanlıklar, biyolojik ritmi altüst eder.

                    Fiziksel Aktivite Eksikliği
                    Gün içinde yeterince hareket etmemek, vücudun doğal olarak yorulmasını engeller ve uyku kalitesini düşürür. </Text>

                <Text style={styles.header}> Uykumuzu Bozan Etmenler         </Text>
                <Text style={styles.textArea}> Kafein ve Alkol Tüketimi: Gece geç saatlerde tüketilen kafein ve alkol, uykuya dalmayı zorlaştırabilir ve uyku kalitesini bozabilir.
                    Yapay Işık ve Gürültü: Yatak odasında televizyon, telefon gibi cihazların açık kalması ya da çevresel gürültüler, uykuyu kesintiye uğratır.
                    Aşırı Bilgi Tüketimi: Yatmadan önce yoğun şekilde sosyal medya kullanımı ya da haber izlemek, zihni uyarır ve rahatlamayı zorlaştırır. </Text>
                <Text style={styles.header}> Kaliteli Bir Uyku İçin Tüyolar     </Text>
                <Text style={styles.textArea}> Düzenli Uyku Saatleri Belirleyin
                    Her gün aynı saatte yatıp kalkmaya çalışın. Bu, biyolojik saatinizin düzenli çalışmasını sağlar.

                    Ekran Süresini Sınırlayın
                    Yatmadan en az bir saat önce ekran kullanımını bırakın. Bunun yerine kitap okuyabilir ya da meditasyon yapabilirsiniz.

                    Uyku Ortamınızı İyileştirin
                    Sessiz, karanlık ve serin bir yatak odası kaliteli uyku için idealdir. Rahat bir yatak ve yastık seçimine de dikkat edin.

                    Günlük Rutinlere Fiziksel Aktivite Ekleyin
                    Düzenli egzersiz yapmak, vücudu yorarak uykuya dalmayı kolaylaştırır. Ancak egzersizi yatmadan hemen önce yapmamaya özen gösterin.

                    Rahatlatıcı Bir Rutin Oluşturun
                    Uyumadan önce ılık bir duş almak, hafif bir müzik dinlemek ya da nefes egzersizleri yapmak, gevşemenize yardımcı olabilir.     </Text>
                <Text style={styles.header}> Uyku Düzeni Nasıl Oluşturulur?
                </Text>
                <Text style={styles.textArea}> Bir uyku düzeni oluşturmak için sabırlı ve kararlı olmak gerekir. Öncelikle yatış ve kalkış saatlerinizi not edin ve küçük adımlarla düzenlemeye çalışın. Uykuya dalmakta zorlanıyorsanız, zihninizi boşaltacak rahatlatıcı bir aktivite seçebilirsiniz.  </Text>

            </View >
        </ScrollView>
    )
}

export default SleepScreen

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
        margin: 10,

    },

    textArea: {

        fontSize: 14,
        marginTop: 5,
        margin: 10

    },







})