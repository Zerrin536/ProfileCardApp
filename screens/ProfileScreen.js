// screens/ProfileScreen.js

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  useWindowDimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SPACING, RADII, FONTS } from '../theme';

export default function ProfileScreen() {
  // Ekran genişliği
  const { width } = useWindowDimensions();
  const isLargeScreen = width > 500; // tablet / geniş ekran için

  // Tema durumu (light / dark)
  const [theme, setTheme] = useState('light');
  // Like durumu
  const [isLiked, setIsLiked] = useState(false);

  const currentTheme = COLORS[theme];

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const toggleLike = () => {
    setIsLiked((prev) => !prev);
    console.log('Profile liked state:', !isLiked);
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: currentTheme.bg },
      ]}
    >
      {/* Tema Toggle Butonu (üst sağ) */}
      <Pressable
        onPress={toggleTheme}
        style={styles.themeToggle}
      >
        <Ionicons
          name={theme === 'light' ? 'moon' : 'sunny'}
          size={24}
          color={currentTheme.text}
        />
      </Pressable>

      {/* Profil Kartı */}
      <View
        style={[
          styles.card,
          {
            backgroundColor: currentTheme.cardBg,
            borderColor: currentTheme.border,
            // Ekrana göre genişlik ve padding
            width: isLargeScreen ? '60%' : '85%',
            padding: isLargeScreen ? SPACING.xl : SPACING.lg,
          },
        ]}
      >
        <View style={styles.avatar}>
          <Ionicons name="person" size={32} color="#FFFFFF" />
        </View>

        <Text
          style={[
            styles.name,
            { color: currentTheme.text },
          ]}
        >
          Ozan Duru
        </Text>

        <Text
          style={[
            styles.role,
            { color: currentTheme.muted },
          ]}
        >
          Mobile Developer
        </Text>

        {/* Like Butonu */}
        <Pressable
          onPress={toggleLike}
          style={styles.likeButton}
        >
          <Ionicons
            name={isLiked ? 'heart' : 'heart-outline'}
            size={24}
            color={isLiked ? COLORS.like : currentTheme.muted}
          />
          <Text
            style={[
              styles.likeText,
              {
                color: isLiked ? COLORS.like : currentTheme.muted,
              },
            ]}
          >
            {isLiked ? 'Liked' : 'Like'}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  themeToggle: {
    position: 'absolute',
    top: 50,
    right: 24,
    padding: SPACING.sm,
    borderRadius: RADII.full,
  },
  card: {
    borderRadius: RADII.lg,
    borderWidth: 1,

    // Gölge
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 10,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: RADII.full,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
    alignSelf: 'center',
    marginBottom: SPACING.md,
  },
  name: {
    fontFamily: FONTS.bold,
    fontSize: 20,
    textAlign: 'center',
    marginBottom: SPACING.xs,
  },
  role: {
    fontFamily: FONTS.regular,
    fontSize: 14,
    textAlign: 'center',
    marginBottom: SPACING.lg,
  },
  likeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    borderRadius: RADII.full,
  },
  likeText: {
    fontFamily: FONTS.regular,
    fontSize: 14,
    marginLeft: SPACING.xs,
  },
});
