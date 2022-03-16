import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RootStackParams } from '../App';
import Menu from '../components/Menu';
import RestaurantCard from '../components/RestaurantCard';

type Props = NativeStackScreenProps<RootStackParams, "Explore">;

const ExploreScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Restaurants</Text>
      <View>
        <Text style={styles.sectionTitle}>Restaurants Near You</Text>
        <RestaurantCard name='Sushi Restaurant' onPress={(name) => {
          navigation.navigate("Restaurant", { name });
        }} />
        <RestaurantCard name='Burger Restaurant' onPress={(name) => {
          navigation.navigate("Restaurant", { name });
        }} />
        <RestaurantCard name='Fine dining Restaurant' onPress={(name) => {
          navigation.navigate("Restaurant", { name });
        }} />

        <Text>Most Popular Restaurants</Text>
        <RestaurantCard name='Sushi Restaurant' onPress={(name) => {
          navigation.navigate("Restaurant", { name });
        }} />
        <RestaurantCard name='Fine dining Restaurant' onPress={(name) => {
          navigation.navigate("Restaurant", { name });
        }} />
      </View>
      <Menu />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 24,
  },
  restaurantCard: {
    backgroundColor: "#efefef",
  },
  sectionTitle: {
    fontSize: 16,
    marginTop: 16,
  },
  screenTitle: {
    fontSize: 24,
    marginTop: 8,
    fontWeight: 'bold',
  },
});

export default ExploreScreen