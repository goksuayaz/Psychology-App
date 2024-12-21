import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const EmotionScreen = () => {
    return (
        <ScrollView>
            <View style={styles.emotionsContainer}>
                <Text style={styles.emotionsTopHeader}>Duygu Atlası: İnsan Doğasının Derinlikleri</Text>
                <Text style={styles.emotionsText}> Duygular, insan olmanın ayrılmaz bir parçasıdır. Onlar, hayatımızı renklendiren, kararlarımızı etkileyen ve bizi biz yapan temel unsurlardır. Her duygu, bize bir şeyler anlatır ve hissettirdiği şeylerle yaşamımıza anlam katar. İşte tüm duygular ve onların anlamları: </Text>


                <Text style={styles.emotionsHeader}> 1. Mutluluk:</Text>
                <Text style={styles.emotionsText}> Mutluluk, neşe, huzur ve memnuniyetin birleşimidir. Bize hayatın güzel olduğunu hissettirir ve keyif aldığımız anların tadını çıkarmamızı sağlar. Gülümseme, kahkaha ve içten bir huzur bu duygunun temel göstergeleridir. </Text>

                <Text style={styles.emotionsHeader}> 2. Üzüntü:  </Text>
                <Text style={styles.emotionsText}> Üzüntü, kayıplarımızı, pişmanlıklarımızı veya hayal kırıklıklarımızı ifade eden bir duygudur. Kalpte bir ağırlık hissiyle gelir. Ağlama, içine kapanma ya da bir şeylere özlem duyma gibi tepkilerle kendini gösterir.
                </Text>


                <Text style={styles.emotionsHeader}> 3. Korku:   </Text>
                <Text style={styles.emotionsText}> Korku, bir tehlike ya da tehdit algıladığımızda ortaya çıkar. Bizi savunmaya geçirir, hayatta kalmamızı sağlar. Kalp atışının hızlanması, terleme ve kaçma ya da donma gibi tepkilerle kendini belli eder. </Text>


                <Text style={styles.emotionsHeader}> 4. Öfke: </Text>
                <Text style={styles.emotionsText}> Öfke, haksızlığa uğrama ya da engellenme hissiyle ortaya çıkar. Bizi harekete geçirir ve sınırlarımızı koruma isteği uyandırır. Ancak kontrol edilmediğinde yıkıcı olabilir. Öfke sırasında vücutta gerilim ve yüz kızarması sık görülür. </Text>


                <Text style={styles.emotionsHeader}> 5. Şaşkınlık:     </Text>
                <Text style={styles.emotionsText}> Şaşkınlık, beklenmedik bir durumla karşılaştığımızda hissettiğimiz duygudur. Bizi anı durup anlamaya ve yeni bilgilere adapte olmaya teşvik eder. Gözlerin büyümesi ve kaşların kalkması gibi fiziksel tepkilere neden olabilir. </Text>

                <Text style={styles.emotionsHeader}> 6. Tiksinti:  </Text>
                <Text style={styles.emotionsText}> Tiksinti, hoş olmayan şeylerden uzak durmamızı sağlayan bir duygudur. Koku, tat veya davranışlar bu duyguyu tetikleyebilir. Kaşların çatılması ve yüzü buruşturma, tiksintinin yaygın belirtileridir.
                </Text>

                <Text style={styles.emotionsHeader}> 7. Sevgi:   </Text>
                <Text style={styles.emotionsText}> Sevgi, birine ya da bir şeye karşı derin bir bağlılık ve sıcaklık hissetmektir. Bize aidiyet ve huzur duygusu verir. Kucaklaşma, gülümseme ve destek verme gibi davranışlarla kendini gösterir.     </Text>

                <Text style={styles.emotionsHeader}> 8. Utanç:    </Text>
                <Text style={styles.emotionsText}> Utanç, toplum normlarına veya kendi değerlerimize aykırı bir şey yaptığımızda hissettiğimiz duygudur. Kendimizi küçülmüş ve saklanmak istemiş gibi hissederiz. Yüz kızarması ve göz temasından kaçınma bu duygunun işaretleridir. </Text>


                <Text style={styles.emotionsHeader}> 9. Suçluluk: </Text>
                <Text style={styles.emotionsText}> Suçluluk, başkalarına zarar verdiğimizde ya da doğru bir şeyi yapmadığımızı düşündüğümüzde hissedilir. Bu duygu, pişmanlıkla birleşerek hatalarımızı telafi etme isteği yaratır. </Text>


                <Text style={styles.emotionsHeader}> 10. Heyecan:    </Text>
                <Text style={styles.emotionsText}> Heyecan, olumlu ya da olumsuz bir beklentiyle oluşur. Vücutta enerji patlaması, kalp atışında hızlanma gibi fiziksel belirtilerle kendini belli eder. </Text>


                <Text style={styles.emotionsHeader}> 11. Kıskançlık:    </Text>
                <Text style={styles.emotionsText}> Kıskançlık, sahip olmak istediğimiz bir şeyi başkasının elinde gördüğümüzde ortaya çıkar. Bize neyin eksik olduğunu fark ettirir ancak kontrol edilmediğinde zehirleyici olabilir.
                </Text>

                <Text style={styles.emotionsHeader}> 12. Şükran:    </Text>
                <Text style={styles.emotionsText}> Şükran, sahip olduklarımız için duyduğumuz minnettarlık hissidir. Kalbi ısıtan, huzur veren ve hayata karşı olumlu bir bakış açısı kazandıran bir duygudur. </Text>


                <Text style={styles.emotionsHeader}> 13. Yalnızlık:    </Text>
                <Text style={styles.emotionsText}> Yalnızlık, fiziksel ya da duygusal olarak bağlantı eksikliği hissettiğimizde ortaya çıkar. Derin bir içsel boşluk hissi yaratabilir, ancak bazen kendimize dönüp içsel huzuru bulmamız için bir fırsat da sunar. </Text>


                <Text style={styles.emotionsHeader}> 14. Hayal Kırıklığı:   </Text>
                <Text style={styles.emotionsText}> Hayal kırıklığı, beklentilerimizin karşılanmadığı ya da bir hedefimize ulaşamadığımız zaman hissettiğimiz duygudur. Motivasyonu kaybetme ya da yılgınlık hissettirse de yeni yollar arama güdüsünü de beraberinde getirebilir. </Text>


                <Text style={styles.emotionsHeader}> 15. Huzur:   </Text>
                <Text style={styles.emotionsText}> Huzur, zihinsel ve duygusal bir dinginlik halidir. Fırtınadan sonra gelen sakinlik gibi bir his yaratır ve bizi yaşamın anlarına daha derin bir şekilde bağlar. </Text>


                <Text style={styles.emotionsHeader}> 16. Tatmin:   </Text>
                <Text style={styles.emotionsText}> Tatmin, bir hedefe ulaştığımızda ya da bir durumdan memnun olduğumuzda hissettiğimiz derin bir doyum halidir. Bize huzur ve başarı hissi verir. </Text>

                <Text style={styles.emotionsHeader}> 17. Endişe(Kaygı):   </Text>
                <Text style={styles.emotionsText}> Endişe, belirsizlik ya da gelecekte olabilecek bir durum hakkında hissettiğimiz kaygıdır. Sürekli düşüncelere dalma, vücutta gerginlik ya da huzursuzluk bu duygunun yaygın belirtileridir. </Text>


                <Text style={styles.emotionsHeader}> 18. Mahcubiyet:   </Text>
                <Text style={styles.emotionsText}> Mahcubiyet, küçük düşürücü bir durum ya da utanç verici bir davranış sonucu ortaya çıkar. Hafif bir utanç duygusuyla karışır ve genellikle yüz kızarması ya da kelimeleri toparlayamama gibi fiziksel tepkilerle kendini gösterir. </Text>


                <Text style={styles.emotionsHeader}> 19. Umut:  </Text>
                <Text style={styles.emotionsText}>Umut, gelecekte güzel şeyler olacağına dair güçlü bir inançtır. Zor zamanlarda bile insanları ayakta tutan, onları harekete geçiren ve yaşamı anlamlı kılan bir duygudur. </Text>


                <Text style={styles.emotionsHeader}> 20. Merak:  </Text>
                <Text style={styles.emotionsText}>Merak, yeni bilgi edinme ya da bir şeyi keşfetme isteğidir. Hayal gücünü tetikler ve öğrenmeye teşvik eder. </Text>


                <Text style={styles.emotionsHeader}> 21. Affetme (Bağışlama):  </Text>
                <Text style={styles.emotionsText}>Affetme, birine karşı duyulan kızgınlığı ya da kırgınlığı serbest bırakma halidir. Genellikle içsel bir huzur ve hafiflik hissi getirir. Hem kendimizle hem de başkalarıyla barış yapmamızı sağlar. </Text>


                <Text style={styles.emotionsHeader}> 22. Pişmanlık:  </Text>
                <Text style={styles.emotionsText}>Pişmanlık, geçmişte yaptığımız ya da yapmadığımız bir şeyin sonuçlarından duyulan üzüntü ve öz eleştiri duygusudur. Bu duygu, daha iyi seçimler yapmamıza yardımcı olacak bir rehber olabilir. </Text>


                <Text style={styles.emotionsHeader}> 23. Kararsızlık:  </Text>
                <Text style={styles.emotionsText}> Kararsızlık, iki ya da daha fazla seçenek arasında sıkışıp kaldığımızda hissettiğimiz belirsizlik duygusudur. Genellikle endişeyle karışır, ancak aynı zamanda derin düşünmeyi ve daha iyi kararlar almayı teşvik eder. </Text>


                <Text style={styles.emotionsHeader}> 24. Hayranlık:  </Text>
                <Text style={styles.emotionsText}> Hayranlık, bir şeye ya da birine duyulan derin bir takdir ve saygıdır. Bu duygu, insanı motive edebilir ve ilham kaynağı olabilir. </Text>


                <Text style={styles.emotionsHeader}> 25. Çaresizlik:  </Text>
                <Text style={styles.emotionsText}> Çaresizlik, bir durum üzerinde kontrolümüzün olmadığını hissettiğimizde ortaya çıkar. Bu duygu, bazen bizi hareketsiz bıraksa da dayanıklılığımızı geliştirmek için bir fırsat sunabilir.</Text>


                <Text style={styles.emotionsHeader}> 26. Coşku:  </Text>
                <Text style={styles.emotionsText}> Coşku, yoğun bir mutluluk ve heyecan karışımıdır. Enerji verir ve bir şeylere tutkuyla yaklaşmamızı sağlar. </Text>


                <Text style={styles.emotionsHeader}> 27. Güven:  </Text>
                <Text style={styles.emotionsText}> Güven, birine ya da bir şeye karşı duyulan inanç ve emniyet hissidir. İlişkilerin ve toplumsal bağların temel taşıdır. </Text>


                <Text style={styles.emotionsHeader}> 28. Reddedilmiş Hissetmek:  </Text>
                <Text style={styles.emotionsText}> Reddedilmiş hissetmek, kabul görmediğimizde ya da birinin bizi dışladığını düşündüğümüzde ortaya çıkan bir duygudur. Kalpte bir boşluk, kendini değersiz hissetme veya sosyal çevreden uzaklaşma isteğiyle kendini gösterebilir. </Text>


                <Text style={styles.emotionsHeader}> 29. Bağımlılık:  </Text>
                <Text style={styles.emotionsText}> Bağımlılık, bir şeye ya da birine aşırı bağlılık hissetmektir. </Text>


                <Text style={styles.emotionsHeader}> 30. Soğuma:  </Text>
                <Text style={styles.emotionsText}> Soğuma, genellikle birine ya da bir şeye karşı duyulan ilginin veya bağın azalması durumunda hissedilen bir duygudur. Hayal kırıklığı, anlaşmazlık ya da uyumsuzluk gibi nedenlerle ortaya çıkabilir. Soğuma, duygusal mesafenin artmasıyla birlikte kişinin geri çekilmesine ve ilişki ya da bağ üzerinde yeniden düşünmesine neden olur. Kalpte bir boşluk hissi, mesafeli davranışlar ve ilgisizlik, bu duygunun göstergeleridir. </Text>


                <Text style={styles.emotionsHeader}> 31. Aşk:  </Text>
                <Text style={styles.emotionsText}> Aşk, insanın hem zihinsel hem de duygusal olarak derin bir bağlılık ve hayranlık hissettiği en yoğun duygulardan biridir. Aşk, kalbin hızla çarpmasına, mutlulukla dolmasına ve sevilen kişiye yakın olma arzusuna yol açar.     </Text>


                <Text style={styles.emotionsHeader}> 32. Tutku:  </Text>
                <Text style={styles.emotionsText}> Tutku, bir şey ya da birine karşı duyulan yoğun ilgi ve arzudur. Tutku, insanı motive eden, hayallerinin peşinden gitmesini sağlayan güçlü bir enerji kaynağıdır. Bu duygu genellikle aşk, sanat, iş ya da kişisel bir hedefle bağlantılıdır. </Text>


                <Text style={styles.emotionsHeader}> 33. Şok Olma:  </Text>
                <Text style={styles.emotionsText}> Şok olma, şaşkınlıkla karışık, daha yoğun ve genellikle sarsıcı bir duygudur. Ani ve beklenmedik bir olay karşısında, insanın hem zihinsel hem de duygusal olarak donup kalmasına neden olabilir. Şok, genellikle kayıp, kötü haber ya da olağanüstü bir durum karşısında yaşanır. Fiziksel olarak sersemlik, ellerin titremesi ya da konuşmada zorluk bu duygunun işaretlerindendir. </Text>


                <Text style={styles.emotionsHeader}> 34. Yetersizlik:  </Text>
                <Text style={styles.emotionsText}> Yetersizlik, kişinin kendini bir durum, kişi ya da görev için yeterince donanımlı hissetmemesi durumudur. Bu duygu genellikle özgüven eksikliğiyle birleşir ve geri çekilme, utanma ya da başarısızlık korkusuna yol açabilir.   </Text>


                <Text style={styles.emotionsHeader}> 35. Şüphe:  </Text>
                <Text style={styles.emotionsText}> Şüphe, bir durumun, kişinin ya da bilginin doğruluğu konusunda duyulan güvensizlik ve belirsizlik duygusudur. Şüphe, doğru yönetildiğinde daha bilinçli ve dikkatli bir yaklaşım sağlayabilir, ancak aşırıya kaçtığında güvensizlik ve ilişkilerde gerilime yol açabilir.  </Text>


                <Text style={styles.emotionsHeader}> 36. Cesaret:  </Text>
                <Text style={styles.emotionsText}> Cesaret, korku ya da zorluklara rağmen bir duruma göğüs germe ve harekete geçme duygusudur. Bu his, kişinin sınırlarını aşmasını, risk almasını ve kendine güvenle ilerlemesini sağlar. </Text>


                <Text style={styles.emotionsHeader}> 37. Kibir:  </Text>
                <Text style={styles.emotionsText}> Kibir, kişinin kendini başkalarından üstün görmesi ve bunu açıkça ifade etmesiyle ortaya çıkan bir duygudur. Genellikle başkalarını küçümseme, kendi başarılarını abartma ve alçakgönüllülükten uzak bir tavırla kendini gösterir. </Text>


                <Text style={styles.emotionsHeader}> 38. Acı:  </Text>
                <Text style={styles.emotionsText}> Acı, fiziksel ya da duygusal bir yaralanma sonucunda hissedilen derin bir rahatsızlık ve üzüntü duygusudur. </Text>


            </View>
        </ScrollView>
    )
}

export default EmotionScreen

const styles = StyleSheet.create({

    emotionsContainer: {

        backgroundColor: "#fff",

    },

    emotionsTopHeader: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 60,

    },

    emotionsHeader: {

        fontWeight: "bold",
        fontSize: 15,
        textAlign: "center",
        marginTop: 10,


    },

    emotionsText: {
        textAlign: "center",
        fontSize: 12,
        letterSpacing: 1,
        margin: 8,

    }


})