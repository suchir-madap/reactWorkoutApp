import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import excercises from './assets/data/exercises.json'
import ExcerciseListItem from './src/components/ExcerciseListItem';


export default function App() {

    return (
    <View style={styles.container}>
        <FlatList 
        
            data={excercises}
            contentContainerStyle={{gap: 5}}
            keyExtractor={(item, index) =>item.name + index}
            renderItem={({item}) => <ExcerciseListItem item={item} />}

        />
        
      
    <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gainsboro',
    justifyContent: 'center',
    padding: 10,
    paddingTop: 70,
  },
  
});
