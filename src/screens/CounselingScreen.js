import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CounselingScreen = () => {
    return (
        <ScrollView>
            <View style={styles.counsContainer}>
                <Text style={styles.counsHeaderTop}> Psikolojik Danışmanlık: Kendinize Yapabileceğiniz En Büyük Yatırım </Text>
                <Text style={styles.counsText}>
                    Hayatta hepimiz zorluklarla karşılaşırız. Bazen bu zorluklarla tek başımıza baş etmek mümkün olmayabilir. İşte bu noktada psikolojik danışmanlık, ruhsal sağlığımızı iyileştirmek ve hayat kalitemizi artırmak için devreye girer. Peki, psikolojik danışmanlık neden bu kadar önemli? </Text>

                <Text style={styles.counsHeader}>
                    Psikolojik Danışmanlık Almanın Önemi ve Faydaları </Text>
                <Text style={styles.counsText}>
                    Psikolojik danışmanlık, bireyin kendini daha iyi tanımasına, sorunlarına farklı bir açıdan bakmasına ve yaşamında pozitif değişiklikler yapmasına yardımcı olur. Stres, kaygı, depresyon gibi duygusal zorluklarla başa çıkmayı öğrenebilir, özgüveninizi artırabilir ve ilişkilerinizi güçlendirebilirsiniz. Danışmanlık süreci, sadece sorun çözmekle kalmaz; aynı zamanda bireyin kendini geliştirmesi ve potansiyelini keşfetmesi için bir fırsat sunar. </Text>

                <Text style={styles.counsHeader}>
                    Kimler Psikolojik Danışmanlık Almalı?</Text>
                <Text style={styles.counsText}>
                    Birçok insan psikolojik danışmanlık için "çok büyük" sorunlar yaşamaları gerektiğini düşünür. Oysa psikolojik danışmanlık, hayatında daha fazla denge ve mutluluk arayan herkes için faydalıdır. Duygusal bir yük taşımak, kendinizi sıkışmış hissetmek, hayatınıza yön vermekte zorlanmak ya da sadece kendinizi daha iyi anlamak istemek gibi nedenlerle danışmanlık alabilirsiniz. </Text>

                <Text style={styles.counsHeader}>
                    Psikolojik Danışmanlık Almanız Gerektiğini Nasıl Anlarsınız? </Text>
                <Text style={styles.counsText}>
                    Eğer kendinizi sürekli yorgun, umutsuz, gergin ya da mutsuz hissediyorsanız, uyku düzeninizde bozulmalar yaşıyorsanız ya da ilişkilerinizde tekrarlayan sorunlarla karşılaşıyorsanız, bu durumlar psikolojik destek almanız gerektiğine işaret edebilir. Ayrıca, hayatınızdaki önemli bir değişiklikle (taşınma, ayrılık, iş kaybı vb.) başa çıkmakta zorlanıyorsanız, danışmanlık süreci bu dönemi daha sağlıklı atlatmanıza yardımcı olabilir.</Text>


                <Text style={styles.counsHeader}>
                    Psikolojik Danışmanlık Süreci Nasıl İşler? </Text>
                <Text style={styles.counsText}>
                    Danışmanlık süreci tamamen size özeldir. İlk görüşmelerde danışman, sizin yaşam öykünüzü ve karşılaştığınız zorlukları anlamaya çalışır. Ardından, sizin ihtiyaçlarınıza göre bir yol haritası belirlenir. Süreç boyunca, duygularınızı ifade etme, düşünce kalıplarınızı keşfetme ve davranışlarınızı değiştirme fırsatı bulursunuz. Danışmanlık süreci, yalnızca sorunlarla başa çıkmayı değil, aynı zamanda sizi mutlu eden şeylere odaklanmayı da teşvik eder. </Text>

                <Text style={styles.counsHeader}>
                    Danışmanlık Sürecinde Neler Deneyimlenir? </Text>
                <Text style={styles.counsText}>
                    Danışmanlık sürecinde kendinizi daha açık ve dürüst bir şekilde ifade etmeyi öğrenirsiniz. Zamanla, geçmişteki acılarınızla barışabilir, düşünce ve davranışlarınız üzerinde kontrol kazanabilir ve daha güçlü bir benlik duygusu geliştirebilirsiniz. Ayrıca, yaşamınızdaki zorluklarla daha sağlıklı başa çıkma yollarını öğrenerek, gelecekte karşılaşacağınız sorunlara karşı hazırlıklı hale gelirsiniz. </Text>

                <Text style={styles.counsText}>
                    Psikolojik danışmanlık almak, hayatınızda olumlu değişiklikler yaratmak için güçlü bir adımdır. Bu sürecin, kendinize yapabileceğiniz en değerli yatırımlardan biri olduğunu unutmayın. Unutmayın, yardım istemek bir zayıflık değil; cesaret ve kendinize verdiğiniz değerin bir göstergesidir. İlk adımı atmak, hayatınızı değiştirebilir. </Text>

            </View>
        </ScrollView >
    )
}

export default CounselingScreen

const styles = StyleSheet.create({

    counsContainer: {

        backgroundColor: "#d8e2dc"
    },

    counsHeaderTop: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 60,
    },

    counsHeader: {
        fontSize: 15,
        fontWeight: "bold",
        margin: 10,



    },

    counsText: {
        fontSize: 12,
        margin: 10,
        marginBottom: 10,
    },







})