import {
  StyleSheet,
  View,
  TextInput,
  Button,
  ProgressViewIOSComponent,
} from 'react-native';
import { useState } from 'react';

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="New Task"
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <Button title="Add Task" onPress={addGoalHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'gray',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
});

export default GoalInput;
