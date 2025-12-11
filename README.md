Öğrenci Bilgileri

Ad Soyad: Zerrin Yasik

Öğrenci No: 210408008

Ders: Web / Mobil Programlama Lab (lab-10)

# ProfileCardApp

Bu proje, React Native ve Expo kullanılarak geliştirilmiş basit bir profil kartı uygulamasıdır.  
Uygulama, özel font kullanımı, tema yönetimi (light/dark), beğen (like) butonu ve responsive tasarım (ekran boyutuna göre ayarlanan kart) gibi özellikler içerir.

## Özellikler

- Montserrat özel fontlarının Expo ile projeye dahil edilmesi
- `theme.js` ile tasarım değişkenlerinin (renk, spacing, radius, font) yönetilmesi
- Profil kartı:
  - Avatar (ikon)
  - İsim ve rol metni
  - Kart üzerinde gölge (shadow) efekti
- Tema değiştirme (light / dark) butonu
- Like (kalp) butonu ile etkileşim:
  - Kalp ikonunun dolu/boş olması
  - Yazının "Like" / "Liked" olarak değişmesi
- `useWindowDimensions` kullanılarak ekran genişliğine göre:
  - Kart genişliği (`60%` / `85%`)
  - Kart içi boşluklarının (padding) ayarlanması

## Kullanılan Teknolojiler

- React Native
- Expo
- Expo Font (`expo-font`)
- @expo/vector-icons (Ionicons)

## Projeyi Çalıştırma

Bu adımlar, projeyi GitHub'dan çeken biri için hazırlanmıştır:

```bash
# 1. Repoyu klonla
git clone https://github.com/Zerrin536/ProfileCardApp.git

# 2. Proje klasörüne gir
cd ProfileCardApp

# 3. Gerekli paketleri yükle
npm install

# 4. Expo ile projeyi başlat
npx expo start
