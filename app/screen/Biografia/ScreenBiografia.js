import { StyleSheet, View, ScrollView } from 'react-native';
import React from 'react';
import { Card, Text } from 'react-native-paper';

export default function ScreenBiografia() {
  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        
        <Card.Cover source={require('../../../assets/images/foster_banda.jpg')} />
        <Card.Content style={styles.content}>
          <Text variant="displaySmall" style={styles.title}>Foster the People</Text>
          
          <Text variant="bodyLarge" style={styles.text}>
            Banda estadounidense de indie pop formada en Los Ángeles, California, en 2009. 
            El grupo está liderado por el vocalista, compositor y tecladista Mark Foster.
          </Text>
          
          <Text variant="bodyLarge" style={styles.text}>
            Con un estilo que mezcla ritmos pegadizos, sintetizadores ochenteros y letras a menudo oscuras o introspectivas, lograron el éxito mundial con su álbum debut "Torches" en 2011, consolidándose como uno de los pilares del pop alternativo moderno.
          </Text>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', padding: 15 },
  card: { backgroundColor: '#242424', marginBottom: 20 },
  content: { marginTop: 15 },
  title: { color: '#00b7ff', fontWeight: 'bold', marginBottom: 15 },
  text: { color: '#e0e0e0', marginBottom: 10, textAlign: 'justify', lineHeight: 24 }
});