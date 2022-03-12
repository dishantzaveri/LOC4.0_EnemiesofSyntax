import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const PastActivity = ({ac}) => {
  const getVideoId = link => {
    return link.split('/')[3];
  };
  return (
    <View
      style={{
        backgroundColor: '#C1F4C5',
        borderRadius: 25,
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        marginVertical: 10,
      }}>
      <Image
        source={{
          uri: `https://i.ytimg.com/vi/${getVideoId(
            ac.videoLink,
          )}/hqdefault.jpg`,
        }}
        style={{
          width: 100,
          height: 100,
          borderRadius: 100,
        }}
      />
      <View style={{marginLeft: 10}}>
        <Text style={{fontSize: 20, fontWeight: '700', color: 'black'}}>
          {ac.title}
        </Text>
        <Text>{ac.time}</Text>
      </View>
    </View>
  );
};

export default PastActivity;

const styles = StyleSheet.create({});
