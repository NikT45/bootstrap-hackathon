import { View, StyleSheet, Pressable } from 'react-native';
import { router } from 'expo-router';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useOnboarding } from '@/contexts/onboarding-context';

export default function Onboarding2() {
  const { updateOnboardingData, completeOnboarding } = useOnboarding();

  const handleNext = () => {
    // You can store data from this page if needed
    updateOnboardingData('page2', { completed: true });
    completeOnboarding();
    router.replace('/main');
  };

  return (
    <ThemedView style={styles.container}>
      <View style={styles.content}>
        <ThemedText type="title">Onboarding Page 2</ThemedText>
        <ThemedText>Let's get started!</ThemedText>
      </View>

      <Pressable style={styles.button} onPress={handleNext}>
        <ThemedText style={styles.buttonText}>Next</ThemedText>
      </Pressable>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 40,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
