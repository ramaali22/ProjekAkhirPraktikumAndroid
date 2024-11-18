import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

type ProjectCardProps = {
  title: string;
  date: string;
  size: string;
  duration: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, date, size, duration }) => {
  return (
    <View style={styles.card}>
      <Image source={require('../assets/project-image.png')} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{date}</Text>
        <Text style={styles.subtitle}>{size} - {duration}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    marginVertical: 8,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  info: {
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#888',
  },
});

export default ProjectCard;
