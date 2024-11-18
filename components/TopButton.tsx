import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const buttons = [
  { title: 'Editor foto', icon: 'camera-outline' },
  { title: 'Teks ke gambar', icon: 'image-outline' },
  { title: 'AutoCut', icon: 'camera-reverse-outline' },
  { title: 'Penerjemah video', icon: 'language-outline' },
  { title: 'Membentang', icon: 'chevron-down-outline' }
];

const expandedButtons = [
  { title: 'Foto produk', icon: 'pricetag-outline' },
  { title: 'Poster AI', icon: 'color-palette-outline' },
  { title: 'Model AI', icon: 'people-outline' },
  { title: 'Efek AI', icon: 'sparkles-outline' },
  { title: 'Kamera', icon: 'camera-outline' },
  { title: 'Retouch', icon: 'brush-outline' },
  { title: 'Keterangan otomatis', icon: 'text-outline' },
  { title: 'Teleprompter', icon: 'mic-outline' },
  { title: 'Hapus latar belakang', icon: 'cut-outline' },
  { title: 'Penyempurnaan gambar', icon: 'images-outline' }
];

const TopButtons: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isExpandedButton, setIsExpandedButton] = useState(false);

  const handleExpandToggle = () => {
    setIsExpanded(!isExpanded);
    setIsExpandedButton(!isExpandedButton);
  };

  return (
    <View style={styles.container}>
      {buttons.map((button, index) => (
        <TouchableOpacity 
          key={index} 
          style={styles.buttonContainer} 
          onPress={button.title === 'Membentang' ? handleExpandToggle : undefined}
        >
          <View style={styles.button}>
            <Icon name={isExpandedButton && button.title === 'Membentang' ? 'chevron-up-outline' : button.icon} size={20} color="#333" style={styles.icon} />
          </View>
          <Text style={styles.buttonText}>
            {isExpandedButton && button.title === 'Membentang' ? 'Ciut' : button.title}
          </Text>
        </TouchableOpacity>
      ))}

      {isExpanded && (
        <View style={styles.expandedContainer}>
          {expandedButtons.map((button, index) => (
            <TouchableOpacity key={index} style={styles.buttonContainer}>
              <View style={styles.button}>
                <Icon name={button.icon} size={20} color="#333" style={styles.icon} />
              </View>
              <Text style={styles.buttonText}>{button.title}</Text> 
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
    paddingHorizontal: 5,
    flexWrap: 'wrap',
  },
  buttonContainer: {
    alignItems: 'center',
    flex: 1,
  },
  button: {
    backgroundColor: '#f2f2f2',
    padding: 25,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 10,
    color: '#333',
    textAlign: 'center',
    marginTop: 5,
  },
  icon: {
    marginBottom: 0,
  },
  expandedContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 10,
  },
});

export default TopButtons;
