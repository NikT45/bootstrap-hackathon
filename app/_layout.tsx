import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';
import { OnboardingProvider, useOnboarding } from '@/contexts/onboarding-context';

function RootNavigator() {
  const colorScheme = useColorScheme();
  const { isOnboardingComplete } = useOnboarding();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Protected guard={!isOnboardingComplete}>
          <Stack.Screen name="onboarding1" options={{ headerShown: false }} />
          <Stack.Screen name="onboarding2" options={{ headerShown: false }} />
        </Stack.Protected>

        <Stack.Protected guard={isOnboardingComplete}>
          <Stack.Screen name="main" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
        </Stack.Protected>
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

export default function RootLayout() {
  return (
    <OnboardingProvider>
      <RootNavigator />
    </OnboardingProvider>
  );
}
