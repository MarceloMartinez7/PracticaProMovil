import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Gallos from './Componentes/Gallos';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.tituloText}>Gallos</Text>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Gallos
          nombre="Gallo tuanis"
          imagen={require('./Imagenes/1.jpg')}
        />
        <Gallos
          nombre="Gallito pose"
          imagen={require('./Imagenes/2.jpg')}
        />
        <Gallos
          nombre="Gallito perfilado"
          imagen={require('./Imagenes/3.jpg')}
        />
        <Gallos
          nombre="Gallo desenfocao"
          imagen={require('./Imagenes/4.jpg')}
        />
        <Gallos
          nombre="Gallo"
          imagen={require('./Imagenes/5.png')}
        />
        <Gallos
          nombre="Gallo guapo"
          imagen={require('./Imagenes/6.png')}
        />
        <Gallos
          nombre="Gallo normalito"
          imagen={require('./Imagenes/7.jpeg')}
        />
        <Gallos
          nombre="Gallo pechudo"
          imagen={require('./Imagenes/8.jpeg')}
        />
        <Gallos
          nombre="Gallo feito"
          imagen={require('./Imagenes/9.jpeg')}
        />
        <Gallos
          nombre="Enyel con hype"
          imagen={require('./Imagenes/enyel.jpeg')}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  tituloText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
});
