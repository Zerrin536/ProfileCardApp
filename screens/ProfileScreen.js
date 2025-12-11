// screens/ProfileScreen.js

import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, SPACING, RADII, FONTS } from '../theme';

export default function ProfileScreen() {
  // Şimdilik sadece light tema kullanıyoruz
  const [theme] = useState('light');
  const currentTheme = COLORS[theme];

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: currentTheme.bg },
      ]}
    >
      <View
        style={[
          styles.card,
          {
            backgroundColor: currentTheme.cardBg,
            borderColor: currentTheme.border,
          },
        ]}
      >
        <Text
          style={[
            styles.title,
            { color: currentTheme.text },
          ]}
        >
          Profile Card
        </Text>
        <Text
          style={[
            styles.subtitle,
            { color: currentTheme.muted },
          ]}
        >
          Welcome to your profile!
        </Text>
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
  card: {
    width: '85%',
    padding: SPACING.lg,
    borderRadius: RADII.md,
    borderWidth: 1,
  },
  title: {
    fontFamily: FONTS.bold,
    fontSize: 22,
    marginBottom: SPACING.sm,
  },
  subtitle: {
    fontFamily: FONTS.regular,
    fontSize: 14,
  },
});
