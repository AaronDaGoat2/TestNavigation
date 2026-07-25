import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'; // <--- ESTA ES LA QUE FALTA
import FontAwesome from '@expo/vector-icons/FontAwesome';

// Importamos las pantallas con las rutas de tus carpetas
import ScreenBiografia from './screen/Biografia/ScreenBiografia';
import ScreenCanciones from './screen/Canciones/ScreenCanciones';
import ScreenAcercaDe from './screen/AcercaDe/ScreenAcercaDe';
import ScreenDetalle from './screen/Canciones/ScreenDetalle'; // Asegúrate de crear este archivo

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Esta función controla la navegación interna de las canciones
function SongStack() {
  return (
    <Stack.Navigator 
      screenOptions={{ 
        headerStyle: { backgroundColor: '#1a1a1a' }, 
        headerTintColor: '#fff' 
      }}
    >
      <Stack.Screen 
        name="ListaCanciones" 
        component={ScreenCanciones} 
        options={{ title: 'Top Hits de Foster' }} 
      />
      <Stack.Screen 
        name="DetalleCancion" 
        component={ScreenDetalle} 
        options={{ title: 'Detalle de la Rola' }} 
      />
    </Stack.Navigator>
  );
}

export default function MyNavegation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#ff0077',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { backgroundColor: '#1a1a1a', borderTopWidth: 0 },
        headerStyle: { backgroundColor: '#1a1a1a' },
        headerTintColor: '#fff',
      }}
    >
      <Tab.Screen 
        name='Biografia' 
        component={ScreenBiografia}
        options={{
          title: 'Biografía',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="users" size={size} color={color} />
          )
        }}
      />
      
      <Tab.Screen 
        name='CancionesTab' 
        component={SongStack} // <-- Aquí conectamos el Stack
        options={{
          title: 'Canciones',
          headerShown: false, // Ocultamos el header del Tab para que no se duplique
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="music" size={size} color={color} />
          )
        }}
      />
      
      <Tab.Screen 
        name='AcercaDe' 
        component={ScreenAcercaDe}
        options={{
          title: 'Acerca De',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="graduation-cap" size={size} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  );
}