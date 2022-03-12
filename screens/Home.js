import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {colors} from '../config/colors';
import {styles} from '../components/styles';

const Home = ({navigation}) => {
const topics = [
  {
    title: 'CRICKET',
    url: require('../assets/cricket.jpeg'),
    background: '#FFFFFF',
    labelColor: '#000000',
  },
  {
    title: 'FOOTBALL',
    url: require('../assets/football.jpeg'),
    background: '#FFFFFF',
    labelColor: '#000000'
  },
  {
    title: 'YOGA',
    url: require('../assets/yoga.jpeg'),
    background: '#FFFFFF',
    labelColor: '#000000',
  },
  {
    title: 'FITNESS',
    url: require('../assets/fitness.jpeg'),
    background: '#FFFFFF',
    labelColor: '#000000',
  },

];


  return (
    <View style={styles.container}>
      
      <ScrollView contentContainerStyle={styles.scrollViewWrapper}>
        <View style={styles.row}>
          <View>
            {topics.map((item, index) => {
              if (index % 2 == 0) {
                return (
                  <View
                    style={[
                      styles.card,
                      {
                        backgroundColor: item.background,
                        marginRight: 15,
                        marginBottom: 15,
                      },
                    ]}>
                    <Image style={styles.topicImage} source={item.url} />
                    <Text style={[styles.label, {color: item.labelColor}]}>
                      {item.title}
                    </Text>
                  </View>
                );
              }
            })}
          </View>
          <View style={{flex: 1}}>
            {topics.map((item, index) => {
              if (index % 2 != 0) {
                return (
                  <View
                    style={[
                      styles.card,
                      {
                        backgroundColor: item.background,
                        marginRight: 15,

                        marginBottom: 15,
                      },
                    ]}>
                    <Image style={styles.topicImage} source={item.url} />
                    <Text style={[styles.label, {color: item.labelColor}]}>
                      {item.title}
                    </Text>
                  </View>
                );
              }
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
