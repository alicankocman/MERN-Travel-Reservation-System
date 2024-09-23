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

## 🚀 Uygulamayı Ayağa Kaldırma

Bu projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları izleyin:

### 1. Depoyu Klonlayın

Terminal veya komut istemcisine şu komutu girerek projeyi klonlayın:

git clone https://github.com/alicankocman/MERN-Travel-Reservation-System.git

### 2. Gerekli Paketleri Yükleyin

cd client 

npm install vite --save-dev

cd server

npm install cors-anywhere

## 📸 Proje Görüntüsü

Aşağıda, uygulamanın ana sayfasının bir ekran görüntüsü yer almaktadır:

![Ekran görüntüsü 2024-09-24 015747](https://github.com/user-attachments/assets/e34d984d-d005-4757-b9ca-33f77f86dd82)
![Ekran görüntüsü 2024-09-24 015731](https://github.com/user-attachments/assets/0ff3dbd5-793c-4bff-bcfd-4da57fd10bc3)
![Ekran görüntüsü 2024-09-24 015759](https://github.com/user-attachments/assets/ac30f58d-3bf6-4de4-a4e7-2f2a320ea4ea)



