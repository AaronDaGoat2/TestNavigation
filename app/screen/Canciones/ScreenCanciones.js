import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { Card, Text, IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function ScreenCanciones() {
  const navigation = useNavigation();

  const canciones = [
    { id: 1, title: 'Pumped Up Kicks', album: 'Torches', color: '#ff0077', detail: 'Lanzada en 2010, se convirtió en un éxito viral...' },
    { id: 2, title: 'Houdini', album: 'Torches', color: '#00b7ff', detail: 'El video musical fue nominado al Grammy...' },
    { id: 3, title: 'Sit Next to Me', album: 'Sacred Hearts Club', color: '#ffcc00', detail: 'Descrita como una "canción de amor moderna"...' },
  ];

  return (
    <ScrollView style={styles.container}>
      <Card style={[styles.card, { borderLeftColor: '#9c27b0', borderLeftWidth: 5 }]}>
        <Card.Title 
          title="Todas las Canciones" 
          
          titleStyle={{ color: 'white', fontWeight: 'bold', fontSize: 24 }}
        />
      </Card>
  {canciones.map((cancion) => (
    
        <TouchableOpacity 
          key={cancion.id} 
          onPress={() => navigation.navigate('DetalleCancion', { item: cancion })}
        >
          <Card style={[styles.card, { borderLeftColor: cancion.color, borderLeftWidth: 5 }]}>
            <Card.Title 
              title={cancion.title} 
              subtitle={cancion.album}
              titleStyle={{ color: 'white', fontWeight: 'bold' }}
              right={(props) => <IconButton {...props} icon="chevron-right" iconColor="white" />}
            />
          </Card>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', padding: 15 },
  card: { backgroundColor: '#242424', marginBottom: 15 }
});