import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, Image, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();

function HeaderTitle() {
  return (
    <View style={styles.headerContainer}>
      <Image source={require('../assets/capcut-logo.png')} style={styles.logo} />
      
      <Text style={styles.proText}>PRO</Text>
    </View>
  );
}

function BottomTabNavigator() {
  return (
    <Tab.Navigator
    id={undefined} 
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Edit') {
            iconName = 'cut-outline';
          } else if (route.name === 'Template') {
            iconName = 'albums-outline'; 
          } else if (route.name === 'Pustaka') {
            iconName = 'folder-outline';
          } else if (route.name === 'Saya') {
            iconName = 'person-outline'; 
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarStyle: {
          paddingBottom: 10, 
          paddingTop: 5,     
          height: 70,        
        },
      })}
    >
      <Tab.Screen 
        name="Edit" 
        component={HomeScreen} 
        options={{
          headerTitle: () => <HeaderTitle />,
          headerStyle: {
            backgroundColor: '#fff', 
            shadowColor: 'transparent', 
            elevation: 0, 
          },
          headerTintColor: '#333', 
        }} 
      />
      <Tab.Screen 
        name="Template" 
        component={() => <Text>Template</Text>} 
        options={{
          headerTitle: () => <HeaderTitle />,
        }} 
      />
      <Tab.Screen 
        name="Pustaka" 
        component={() => <Text>Pustaka</Text>} 
        options={{
          headerTitle: () => <HeaderTitle />, 
        }} 
      />
      <Tab.Screen 
        name="Saya" 
        component={() => <Text>Saya</Text>} 
        options={{
          headerTitle: () => <HeaderTitle />, 
        }} 
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start', 
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    position: 'relative', 
  },
  logo: {
    width: 100, 
    height: 50,
  },
  proText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333', 
    position: 'absolute', 
    left: 350, 
  },
});

export default BottomTabNavigator;
