import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Modal, ScrollView,Image} from 'react-native';
import InputBox from './components/InputBox';
import Header from './components/Header';
import Footer from './components/Footer';
import { useState } from 'react';

export default function App() {
  const [show, setShow] = useState(false)
  return (
    <View style={styles.container}>
      <Header/>
      <Modal visible={show} transparent={true} animationType={"fade"}>
        <View style={styles.positionInput}>
          <InputBox setShow={setShow}/>
        </View>
      </Modal>
      <ScrollView style={styles.containerMenu}>
        <Image source={require('./assets/logo.png')} style={{height:300, width:300, marginHorizontal:"10%"}}></Image>
        <Text style={styles.subTytle}>¿Quienes somos?</Text>
        <Text style={{textAlign:"center"}}>
          Somos un sitio ideal para los amantes de la elegancia y el confort, 
          además la dulce vibración que emite el piano todas las noches, 
          termina de complementar el encanto del lugar acompañado por sus platos fuertes
        </Text>
        <Text style={styles.subTytle}>Hamburguesa newYork</Text>
        <Image source={require('./assets/hamburguesa.jpg')} style={{height:300, width:300, marginHorizontal:"10%" ,borderRadius:20, marginVertical:20}}></Image>
        <Text>
          con lonchas veggie estilo queso y lonchas veggie estilo bacon, sobre base de lechuga romana, tomate y cebolla morada. En pan clásico. Acompañada de patatas fritas.
        </Text>
        <Text style={styles.subTytle}>Spaguetis con atun</Text>
        <Image source={require('./assets/spaguetis.jpg')} style={{height:300, width:300, marginHorizontal:"10%" ,borderRadius:20, marginVertical:20}}></Image>
        <Text>
        El corte largo y ancho de la pasta presenta cierto grosor que en el punto de cocción exacto crea una lamina de textura firme y suave. El elemento principal del plato es un ragú de atún rojo, elaborado con tarantelo. El atún y la pasta se ligan con un salsa ligera de tomate, aceite, anchoas y un toque de perejil.
        </Text>
        <Text style={styles.subTytle}>Albondigas de la casa</Text>
        <Image source={require('./assets/albondigas.jpg')} style={{height:300, width:300, marginHorizontal:"10%" ,borderRadius:20, marginVertical:20}}></Image>
        <Text>
        bola de carne picada, generalmente de res y a veces de pescado mezclada con huevos y diversos condimentos, tales como perejil, comino, etcétera; aunque también hay una variable vegetariana hecha a base de seitán. La albóndiga es tan popular en las diferentes gastronomías y tiene tantas recetas que resulta ser un hiperónimo acerca de un alimento.
        </Text>
      </ScrollView>
      <Footer setShow={setShow}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: "space-between",
  },
  positionInput:{
    width:"100%",
    height:"100%",
    justifyContent:"center",
    alignItems:"center"
  },
  subTytle:{
    fontSize:20,
    fontWeight:"bold",
    textAlign:"center",
    marginTop:40
  },
  containerMenu:{
    backgroundColor:"#bdbdbd"
  }
  
});
