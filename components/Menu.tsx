import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { RootStackParams } from '../App';

const Menu = () => {


  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return <View style={styles.container}>
    <Text style={styles.title}>Navigation</Text>
    <TouchableOpacity onPress={() => {
      // go to explore
      navigation.push('Explore');
    }}>
      <Text style={styles.link}>Explore</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => {
      // go to Restaurants
      navigation.push('Restaurants');
    }}>
      <Text style={styles.link}>Restaurants</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => {
      // go to Profile
      navigation.push('Profile');
    }}>
      <Text style={styles.link}>Profile</Text>
    </TouchableOpacity>
  </View>
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#efefef",
    padding: 16,
    marginTop: 8,
  },
  link: {
    fontSize: 16,
    marginTop: 4,
    color: '#097ade',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  }
});

export default Menu