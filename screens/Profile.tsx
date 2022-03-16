import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Menu from '../components/Menu';

const ProfileScreen = () => {
  return <View style={styles.container}>
    <Text style={styles.screenTitle}>Profile Screen</Text>
    <Text>Name: John Doe</Text>
    <TouchableOpacity>
      <Text>Edit Profiles</Text>
    </TouchableOpacity>
    <Menu />
  </View>
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  screenTitle: {
    fontSize: 24,
    marginTop: 8,
    fontWeight: 'bold',
  },
});

export default ProfileScreen