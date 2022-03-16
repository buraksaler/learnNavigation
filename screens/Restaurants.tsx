import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { RootStackParams } from '../App';
import Menu from '../components/Menu';
import RestaurantCard from '../components/RestaurantCard';

type Props = NativeStackScreenProps<RootStackParams, "Restaurants">;

const RestaurantsScreen = ({ navigation }: Props) => {
  return <View style={styles.container}>
    <Text style={styles.screenTitle}>Restaurants Screen</Text>
    <ScrollView>
      <RestaurantCard name='Sushi Restaurant' onPress={(name) => {
        navigation.navigate("Restaurant", { name });
      }} />
      <RestaurantCard name='Burger Restaurant' onPress={(name) => {
        navigation.navigate("Restaurant", { name });
      }} />
      <RestaurantCard name='Fine dining Restaurant' onPress={(name) => {
        navigation.navigate("Restaurant", { name });
      }} />
      <RestaurantCard name='Sushi Restaurant' onPress={(name) => {
        navigation.navigate("Restaurant", { name });
      }} />
      <RestaurantCard name='Burger Restaurant' onPress={(name) => {
        navigation.navigate("Restaurant", { name });
      }} />
      <RestaurantCard name='Fine dining Restaurant' onPress={(name) => {
        navigation.navigate("Restaurant", { name });
      }} />
    </ScrollView>
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

export default RestaurantsScreen