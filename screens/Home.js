import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { colors } from '../config/colors';
import { styles } from '../components/styles';

const Home = ({ navigation }) => {
  const topics = [
    {
      title: 'Cricket',
      url: require('../assets/cricket.jpeg'),
      background: '#FFFFFF',
      labelColor: '#000000',
    },
    {
      title: 'FOOTBALL',
      url: require('../assets/football.jpeg'),
      background: '#FFFFFF',
      labelColor: '#000000',
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
      {/* <Image
        style={styles.bgImage}
        source={require('../../../assets/images/bg2.png')}
      /> */}
      <View style={styles.headingWrapper}>
        <Text style={styles.heading}>Hey Dishant</Text>
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
