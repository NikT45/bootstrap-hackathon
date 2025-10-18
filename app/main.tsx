import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useOnboarding } from '@/contexts/onboarding-context';

export default function MainAppPage() {
  const { onboardingData, isOnboardingComplete } = useOnboarding();

  const handleStartConversation = () => {
    // Add your conversation start logic here
    console.log('Starting conversation...');
  };

  return (
    <ThemedView style={styles.container}>
      <View style={styles.content}>


        {/*

            <ThemedText type="title">Main App Page</ThemedText>
        <ThemedText>Welcome to the main app!</ThemedText>

            <View style={styles.dataContainer}>
        <ThemedText type="subtitle">Onboarding Data:</ThemedText>
        <ThemedText>Onboarding Complete: {isOnboardingComplete ? 'Yes' : 'No'}</ThemedText>
        <ThemedText>Page 1 Data: {JSON.stringify(onboardingData.page1Data)}</ThemedText>
        <ThemedText>Page 2 Data: {JSON.stringify(onboardingData.page2Data)}</ThemedText>
        </View>


            */}

      </View>

      <TouchableOpacity style={styles.button} onPress={handleStartConversation}>
        <ThemedText style={styles.buttonText}>Start Conversation</ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 24,
  },
  dataContainer: {
    marginTop: 32,
    gap: 12,
    padding: 16,
    borderRadius: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
