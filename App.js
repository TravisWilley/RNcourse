import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, key: Math.random().toString() },
    ]);
  }

  function deleteGoalHandler() {
    console.log('Delete');
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput />
      <View style={styles.inputContainer}>
        <Text style={styles.title}>To-Do List</Text>
      </View>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 15,
  },
  goalsContainer: {
    flex: 5,
    backgroundColor: 'gray',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    alignItems: 'center',
    textDecorationLine: 'underline',
  },
});
