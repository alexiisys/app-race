// Import  global CSS file
import '../../global.css';

import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';
import { StyleSheet, Text } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { KeyboardProvider } from 'react-native-keyboard-controller';

import AppLinkWrapper from '@/components/wrappers/app-link-wrapper';
import { loadSelectedTheme } from '@/lib';
import {
  initializeFacebookAttribution,
  trackAppLaunch,
} from '@/lib/attribution';
import { readSettings } from '@/lib/storage';
import { useThemeConfig } from '@/lib/use-theme-config';
import { readCars } from '@/lib/storage/modules/cars';
import { readTracks } from '@/lib/storage/modules/tracks';
import { readRaces } from '@/lib/storage/modules/races';

export { ErrorBoundary } from 'expo-router';

export const unstable_settings = {
  initialRouteName: '(app)',
};

loadSelectedTheme();
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <Providers>
      <Stack>
        <Stack.Screen name="(app)" options={{ headerShown: false }} />
        <Stack.Screen name="settings" options={{ headerShown: false }} />
      </Stack>
    </Providers>
  );
}

function Providers({ children }: { children: React.ReactNode }) {
  const theme = useThemeConfig();

  useEffect(() => {
    readSettings();
    readCars();
    readTracks();
    readRaces();

    // Initialize Facebook attribution tracking without requesting permissions
    initializeFacebookAttribution();
    trackAppLaunch();
  });
  return (
    <GestureHandlerRootView
      style={styles.container}
      className={theme.dark ? `dark` : undefined}
    >
      <KeyboardProvider>
        <ThemeProvider value={theme}>
          <BottomSheetModalProvider>
            <AppLinkWrapper loader={<Text>Loading...</Text>}>
              {children}
            </AppLinkWrapper>
            <FlashMessage position="top" />
          </BottomSheetModalProvider>
        </ThemeProvider>
      </KeyboardProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
