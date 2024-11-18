import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ProjectCard from '../components/ProjectCard';
import TopButtons from '../components/TopButton';

const HomeScreen: React.FC = () => {
  
  return (
    <ScrollView style={styles.container}>
      <TopButtons />

      <TouchableOpacity style={styles.newProjectButton}>
        <Text style={styles.newProjectButtonText}>+ Proyek Baru</Text>
      </TouchableOpacity>

      <View style={styles.projectHeaderContainer}>
        <Text style={styles.header}>Proyek</Text>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={[styles.button, styles.buttonRuang]}>
            <Icon name="cloud-upload" size={20} color="#000" />
            <Text style={styles.buttonText}>Ruang</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Icon name="menu-outline" size={20} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      <ProjectCard title="iklan kel10 Salin" date="05/11/2024 13:26" size="662MB" duration="01:09" />
      <ProjectCard title="iklan kel10" date="28/10/2024 08:27" size="660MB" duration="01:05" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  newProjectButton: {
    backgroundColor: '#00AEEF',
    paddingVertical: 55,
    paddingHorizontal: 90,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 16,
  },
  newProjectButtonText: {
    color: '#000000',
    fontSize: 24,
    fontWeight: 'bold',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 16,
  },

  projectHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 16,
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center', 
  },
  button: {
    flexDirection: 'row', 
    alignItems: 'center',
    marginLeft: 16,
  },
  buttonText: {
    fontSize: 14,
    marginLeft: 8,
  },
  
  buttonRuang: {
    borderBottomWidth: 2,
    borderBottomColor: '#00AEEF',
  },
});

export default HomeScreen;
