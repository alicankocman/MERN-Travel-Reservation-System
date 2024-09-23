# MERN-Travel-Reservation-System

## 🚀 Kullanılan Teknolojiler

Bu projede MERN (React.js, Node.js) teknolojileri kullanılarak Schipol Havalimanı'na ait API üzerinden uçuşlar listelenmektedir. Estetik ve kullanıcı dostu bir arayüz oluşturmak için aşağıdaki kütüphaneler kullanılmıştır:

- **Tailwind CSS**
- **FontAwesome**

Ayrıca, IATA ve havayolu kodlarına yönelik format işlemleri için çeşitli JSON türü dış kaynaklardan yararlanılmıştır. API'nin düzgün çalıştığını test etmek için Postman kullanılmıştır.

## 🚀 Proje Açıklaması

Uygulama, API'nin sunduğu IATA kodlarıyla sunucu tarafından yapılan istekler sonucunda tarih ve hareket yönüne göre uçuşları filtreleyebilme yeteneğine sahiptir. Filtrelenen uçuşlar, uçuşların destinasyon kodlarına göre listelenmektedir. 

Listelenen uçuşların havaalanlarına yönelik IATA kodları dönüştürülerek havaalanlarının isimleriyle birlikte uçuş kartı bileşenine eklenmiştir. Uçuş kartında, ilgili uçuşa yönelik şu bilgiler yer almaktadır:

- Kalkış ve iniş noktaları
- Havaalanının IATA kodu

Uçuş detayları da görüntülenmektedir. Uçuşlara yönelik ek filtreleme seçenekleri arasında hava yolu şirketlerine göre filtreleme işlevi bulunmaktadır. Sayfa içerisinde hareketli ikonlar ve yüklenme animasyonları da bulunmaktadır.

İlgili uçuşun **Book Flight** butonu, kullanıcıyı "Uçuşlarım" sayfasına yönlendirir. Yönlendirilen "Uçuşlarım" sayfasında, Context'den alınan veriler kullanıcıya ait tüm uçuşlar listelenir. Kullanıcıya ait listelenen uçuş kartında uçuşa dair bilgiler ve detaylar yer almaktadır.



### Örnek KALKIŞ VARIŞ KODLARI
KALKIŞ : SCH - - - VARIŞ:EXP
KALKIŞ : AIR - - - VARIŞ:EXP
