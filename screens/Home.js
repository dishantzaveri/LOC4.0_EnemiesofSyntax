import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { styles } from '../components/styles';
import Icon from 'react-native-vector-icons/Ionicons';

const Home = ({ navigation }) => {
  const topics = [
    {
      title: 'Cricket',
      url: require('../assets/cricket.jpeg'),
      background: '#FFFFFF',
      labelColor: '#000000',
    },
    {
      title: 'Football',
      url: require('../assets/football.jpeg'),
      background: '#FFFFFF',
      labelColor: '#000000',
    },
    {
      title: 'Yoga',
      url: require('../assets/yoga.jpeg'),
      background: '#FFFFFF',
      labelColor: '#000000',
    },
    {
      title: 'Fitness',
      url: require('../assets/fitness.jpeg'),
      background: '#FFFFFF',
      labelColor: '#000000',
    },
  ];

  return (
    <View style={styles.container}>

      <View style={styles.headingWrapper}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.heading}>Hey Dishant</Text>
          <Icon name="add-circle-outline" color='white' size={40} style={{
            color: 'white', marginLeft: 150,

          }} onPress={() => navigation.navigate('Video')} />
        </View>
        <Text style={styles.subHeading}>Hope,you are doing well:)</Text>
        <Text style={styles.title}>Choose a sport you want to explore:</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewWrapper}>
        <View style={styles.row}>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            {topics.map((item, index) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    console.log('Hello');
                    navigation.navigate(item.title);
                  }}>
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
                    <Text style={[styles.label, { color: item.labelColor }]}>
                      {item.title}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
