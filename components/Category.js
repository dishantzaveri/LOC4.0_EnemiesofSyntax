import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const Category = ({image, title, navigation}) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('CategoryScreen', {
          title,
        })
      }>
      <View style={styles.container}>
        <Image
          source={image}
          style={{
            width: 150,
            height: 150,
          }}
          resizeMode="stretch"
        />
        <Text
          style={{
            padding: 10,
            fontSize: 18,
            fontWeight: 'bold',
            marginTop: 10,
          }}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    elevation: 3,
    backgroundColor: 'white',
    marginHorizontal: 10,
    marginVertical: 20,
    paddingBottom: 20,
  },
});
