import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">ToDoList App</ThemedText>
      </ThemedView>
      <ThemedText>
        Welcome to the ToDoList app! This app is designed to help you organize tasks efficiently with a
        simple and intuitive interface.
      </ThemedText>
      <Collapsible title="Task Management">
        <ThemedText>
          Create, edit, and delete tasks with ease. Each task can have a title, description, due date,
          and priority level to keep you organized.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Categories and Tags">
        <ThemedText>
          Organize tasks into categories (e.g., Work, Personal, Shopping) and add tags for quick
          filtering. This helps you focus on specific types of tasks when needed.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Reminders and Notifications">
        <ThemedText>
          Set reminders for tasks with due dates. The app will send push notifications to ensure you
          never miss a deadline.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/notifications/">
          <ThemedText type="link">Learn about notifications</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Cross-Platform Support">
        <ThemedText>
          Access your to-do list on Android, iOS, and the web. Sync tasks across devices using a backend
          service. Press <ThemedText type="defaultSemiBold">w</ThemedText> in the terminal to open the
          web version.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Custom Themes">
        <ThemedText>
          Personalize your experience with light and dark mode themes. The app uses the{' '}
          <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText> hook to adapt to your
          device's theme settings.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
          <ThemedText type="link">Learn more about themes</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Animations and UI">
        <ThemedText>
          Enjoy a smooth user experience with animated components. The{' '}
          <ThemedText type="defaultSemiBold">ParallaxScrollView</ThemedText> provides a dynamic header
          effect, and task interactions will include subtle animations for adding and completing tasks.
        </ThemedText>
        {Platform.select({
          ios: (
            <ThemedText>
              The parallax effect is optimized for iOS, enhancing the visual appeal of the task list.
            </ThemedText>
          ),
        })}
        <ExternalLink href="https://docs.expo.dev/develop/user-interface/animations/">
          <ThemedText type="link">Learn about animations</ThemedText>
        </ExternalLink>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});