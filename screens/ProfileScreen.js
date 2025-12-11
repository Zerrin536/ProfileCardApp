// screens/ProfileScreen.js

import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SPACING, RADII, FONTS } from '../theme';

export default function ProfileScreen() {
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
    borderRadius: RADII.lg,
    borderWidth: 1,

    // Gölge (shadow) – iOS + Android
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
  },
});
