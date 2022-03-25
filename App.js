import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList } from 'react-native';
import CoinItem from './src/components/CoinItem';
import cryptoCurrenryList from './assets/data/cryptocurrencies.json';

export default function App() {
  return (
    <View style={styles.container}>

      <FlatList 
        data={cryptoCurrenryList}
        renderItem={({item})=> <CoinItem currency={item} /> }
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 50,
  }
});
