import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';

export default function Home() {

  return (
    <View style={styles.container}>
        <View style={styles.cabecalho}>  //Cabeçalho
            <TouchableOpacity>
                <Image 
                    source={require('../src/img/tracinho.png')}
                    style={{height: 25, width: 25, marginLeft: 5}}
                />
            </TouchableOpacity>

            <Text style={styles.ankiName}>AnkiDroid</Text>

            <TouchableOpacity>
                <Image 
                    source={require('../src/img/reset.png')}
                    style={{height: 25, width: 25, marginLeft: 150}}
                />
            </TouchableOpacity>

            <TouchableOpacity>
                <Image 
                    source={require('../src/img/pontinhos.png')}
                    style={{height: 23, width: 23, marginLeft: 7}}
                />
            </TouchableOpacity>
        </View>

        <View style={styles.Home}> //Home
          <View style={styles.viewCriarCard}>
            <TouchableOpacity style={styles.btnCriarCard}> //Criador flashcard
              <Image
                source={require('../src/img/plus.png')}
                style={{width: 30, height: 30}}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.rodape}> //rodapé
          <Text style={styles.rodapeText}>Studied 0 cards in 0 seconds today (0s/cards)</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cabecalho: {
    backgroundColor: '#000',
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
  },
  ankiName: {
    fontSize: 25,
    color: '#fff',
    paddingTop: '0',
    marginLeft: 20
  },
  Home: {
    flex: 1,
    backgroundColor: '#000',
  },
  viewCriarCard: {
  position: 'absolute',
  bottom: 25, 
  right: 15,
 },
 btnCriarCard: {
  backgroundColor: '#2d2525',
  width: 40,
  height: 40,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 8,
 },
 rodape: {
  backgroundColor: '#000',
  alignItems: 'center'
 },
 rodapeText: {
  color: '#fff',
  fontWeight: 'bold'
 }
});