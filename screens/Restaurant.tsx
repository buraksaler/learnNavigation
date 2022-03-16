import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { RootStackParams } from '../App';
import RestaurantCard from '../components/RestaurantCard';

type Props = NativeStackScreenProps<RootStackParams, "Restaurant">;

const RestaurantScreen = ({ route, navigation }: Props) => {
  return <View style={styles.container}>
    <Text style={styles.screenTitle}>{route.params.name}</Text>

    <Text>Related Restaurants</Text>
    <RestaurantCard name="Sushi 1" onPress={(name) => navigation.navigate("Restaurant", { name })} />
    <RestaurantCard name="Sushi 2" onPress={(name) => navigation.navigate("Restaurant", { name })} />
    <RestaurantCard name="Sushi 3" onPress={(name) => navigation.navigate("Restaurant", { name })} />
  </View>;

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

export default RestaurantScreen