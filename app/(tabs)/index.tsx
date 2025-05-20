import { Image } from 'expo-image';
import { Platform, StyleSheet, TextInput, Pressable, FlatList } from 'react-native';
import { useState } from 'react';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');

  // Function to add a new task
  const addTask = () => {
    if (taskText.trim()) {
      setTasks([...tasks, { id: Date.now().toString(), text: taskText, completed: false }]);
      setTaskText('');
    }
  };

  // Function to toggle task completion
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Function to delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Render each task item
  const renderTask = ({ item }) => (
    <ThemedView style={styles.taskContainer}>
      <Pressable onPress={() => toggleTask(item.id)} style={styles.taskContent}>
        <Ionicons
          name={item.completed ? 'checkbox-outline' : 'square-outline'}
          size={24}
          color={item.completed ? '#4CAF50' : '#808080'}
        />
        <ThemedText
          style={[styles.taskText, item.completed && styles.completedTask]}
          type="default"
        >
          {item.text}
        </ThemedText>
      </Pressable>
      <Pressable onPress={() => deleteTask(item.id)}>
        <Ionicons name="trash-outline" size={24} color="#FF4444" />
      </Pressable>
    </ThemedView>
  );

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">ToDoList</ThemedText>
      </ThemedView>
      <ThemedView style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task..."
          placeholderTextColor="#808080"
          value={taskText}
          onChangeText={setTaskText}
          onSubmitEditing={addTask}
        />
        <Pressable style={styles.addButton} onPress={addTask}>
          <Ionicons name="add-circle-outline" size={30} color="#4CAF50" />
        </Pressable>
      </ThemedView>
      <ThemedView style={styles.listContainer}>
        {tasks.length === 0 ? (
          <ThemedText style={styles.emptyText}>No tasks yet. Add one above!</ThemedText>
        ) : (
          <FlatList
            data={tasks}
            renderItem={renderTask}
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
          />
        )}
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#808080',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    color: '#000',
    backgroundColor: '#F5F5F5',
  },
  addButton: {
    padding: 5,
  },
  listContainer: {
    gap: 8,
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#F5F5F5',
    marginBottom: 8,
  },
  taskContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    flex: 1,
  },
  taskText: {
    fontSize: 16,
    flex: 1,
  },
  completedTask: {
    textDecorationLine: 'line-through',
    color: '#808080',
  },
  emptyText: {
    textAlign: 'center',
    color: '#808080',
    fontSize: 16,
    marginTop: 20,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});