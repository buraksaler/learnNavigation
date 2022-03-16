import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ExploreScreen from './screens/Explore';
import ProfileScreen from './screens/Profile';
import RestaurantsScreen from './screens/Restaurants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RestaurantScreen from './screens/Restaurant';

export type RootStackParams = {
  Explore: any;
  Restaurants: any;
  Profile: any;
  Restaurant: {
    name: string
  }
}

const RootStack = createNativeStackNavigator<RootStackParams>();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Restaurants">
        <RootStack.Screen name="Explore" component={ExploreScreen} />
        <RootStack.Screen name="Restaurants" component={RestaurantsScreen} />
        <RootStack.Screen name="Profile" component={ProfileScreen} />
        <RootStack.Screen name="Restaurant" component={RestaurantScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 150,

  }
});
