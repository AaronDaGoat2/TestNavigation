import { StyleSheet, View, ScrollView } from 'react-native';
import React from 'react';
import { Card, Text, Avatar } from 'react-native-paper';

export default function ScreenAcercaDe() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card style={styles.card}>
        
        
        <View style={styles.header}>
          <Avatar.Image 
            size={130} 
            
            source={require('../../../assets/images/mi_foto.png')} 
            style={{ backgroundColor: '#242424' }}
          />
        </View>

        <Card.Content style={styles.content}>
          
          <Text variant="headlineSmall" style={styles.title}>Aaron Gallardo Malpica</Text>
          <Text variant="titleMedium" style={styles.subtitle}>Ingeniería en Desarrollo de Software</Text>
          
          <View style={styles.infoBox}>
            <Text variant="bodyLarge" style={styles.text}>
              <Text style={{fontWeight: 'bold', color: '#ff0077'}}>Materia: </Text> Desarrollo de Apps Móviles
            </Text>
             
             <Text variant="bodyLarge" style={styles.text}>
              <Text style={{fontWeight: 'bold', color: '#ff0077'}}>Grupo: </Text> TI42
            </Text>
            <Text variant="bodyLarge" style={styles.text}>
              <Text style={{fontWeight: 'bold', color: '#ff0077'}}>Proyecto: </Text> App Temática - Foster the People
            </Text>
          </View>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, backgroundColor: '#121212', padding: 15, justifyContent: 'center' },
  card: { backgroundColor: '#242424', paddingVertical: 30, borderRadius: 20 },
  header: { alignItems: 'center', marginBottom: 25 }, // Esto centra la foto horizontalmente
  content: { alignItems: 'center' }, // Esto centra el texto
  title: { color: 'white', fontWeight: 'bold', textAlign: 'center', marginBottom: 5 },
  subtitle: { color: '#a0a0a0', marginBottom: 25, textAlign: 'center' },
  infoBox: { width: '100%', backgroundColor: '#1a1a1a', padding: 20, borderRadius: 15 },
  text: { color: '#e0e0e0', marginBottom: 10, fontSize: 16 }
});