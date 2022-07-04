import { StyleSheet, View, Text, Pressable } from 'react-native';

function GoalItem(props) {
  return (
    <Pressable onPress={deleteGoalHandler()}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: 'blue',
    padding: 8,
  },
  goalText: {
    color: 'white',
  },
});
