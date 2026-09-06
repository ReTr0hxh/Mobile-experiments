import React, {useState} from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

export default function AddCard({ onClose }) {

    const [showCreateDesk, setShowCreateDesk] = useState(false)

  return (
    <View style={styles.overlay}>
        <View style={styles.textDeck}>
            <Text style={[styles.name, {fontSize: 11}]}>Create deck</Text>
        </View>
        <View style={styles.textAdd}>
            <Text style={styles.name}>Add</Text>
        </View>
    
        <View style={styles.btn}>
            <TouchableOpacity style={styles.btnCriarCard2} onPress={()=> setShowCreateDesk(true)}>
                <Image
                    source={require('../src/img/deck.png')}
                    style={{width: 20, height: 20}}
                />
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnCriarCard} onPress={onClose}>
                <Image
                    source={require('../src/img/add.png')}
                    style={{width: 20, height: 20}}
                />
            </TouchableOpacity>
        </View>

        
    </View>
  );
}


const styles = StyleSheet.create({
  overlay: {
    marginTop: 50,
    height: '520',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'flex-end',
  },
  btnCriarCard: {
    backgroundColor: '#2d2525',
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    margin: 5
  },
  btnCriarCard2: {
    backgroundColor: '#2d2525',
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    margin: 5,
  },
 btn: {
    alignItems: 'flex-end',
    marginRight: 15,
    marginBottom: 40,
 },
 textAdd: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 20,
    marginLeft: 240,
    top: 85,
    backgroundColor: '#6f6f6f'
 },
 textDeck: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 20,
    marginLeft: 240,
    top: 53,
    right: 18,
    backgroundColor: '#6f6f6f'
 },
 name: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold'
 },
 viewCreateDeck: {
    flex: 1,
    backgroundColor: '#171616'
    
 }
});