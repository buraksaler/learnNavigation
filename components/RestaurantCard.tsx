import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
  name: string,
  onPress: () => void,
}

const RestaurantCard: React.FC<Props> = ({ name, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text>{name}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#efefef",
    padding: 16,
    marginTop: 8,
  },
});

export default RestaurantCard