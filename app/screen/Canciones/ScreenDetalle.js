import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';

export default function ScreenDetalle({ route, navigation }) {
  const { item } = route.params; 

  return (
    <View style={styles.container}>
      <Text variant="displaySmall" style={{ color: item.color, fontWeight: 'bold' }}>{item.title}</Text>
      <Text variant="headlineSmall" style={{ color: 'white', marginBottom: 20 }}>{item.album}</Text>
      
      <Text style={styles.infoText}>{item.detail}</Text>

      <Button 
        mode="contained" 
        onPress={() => navigation.goBack()} 
        style={{ marginTop: 30, backgroundColor: item.color }}
      >
        Volver a la lista
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', padding: 20, justifyContent: 'center', alignItems: 'center' },
  infoText: { color: '#ccc', textAlign: 'center', fontSize: 18, lineHeight: 25 }
});