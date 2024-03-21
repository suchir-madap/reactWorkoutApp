import { StyleSheet, Text, View } from 'react-native';

export default function ExcerciseListItem({item}) {
    return (
        <View style = {styles.excerciseContainer}>
            <Text style={styles.excerciseName}>{item.name}</Text>
            <Text style = {styles.excerciseSubtitle}> {item.muscle.toUpperCase()} | {item.equipment.toUpperCase()}</Text>

        </View>
    )
}



const styles = StyleSheet.create({
    excerciseContainer: {
      backgroundColor: '#fff',
      padding: 10,
      borderRadius: 10,
      gap: 5, 
    },
    excerciseName: {
      fontSize: 20,
      fontWeight: '500',
    },
    excerciseSubtitle: {
      color: 'dimgray',
    }
});
  