import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import Video from '../components/Video';
import {cricketData} from '../components/data';
import Category from '../components/Category';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Cricket = ({navigation}) => {
  const [topCricketData, setCricketData] = useState([]);
  const getData = () => {
    var axios = require('axios');
    var config = {
      method: 'get',
      url: 'https://dishant.pythonanywhere.com/links/listallvideos',
      headers: {},
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setCricketData(response.data.slice(0, 4));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  const [videoId, setVideoId] = useState('');
  const [com, setCom] = useState(false);
  const [title, setTitle] = useState('');
  const categoryData = [
    {
      id: 1,
      title: 'Batting',
      image: require('../assets/batting.jpg'),
    },
    {
      id: 2,
      title: 'Balling',
      image: require('../assets/balling.jpg'),
    },
    {
      id: 3,
      title: 'Feilding',
      image: require('../assets/feilding.jpg'),
    },
  ];
  return (
    <View style={{backgroundColor: 'black', flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 10,
        }}>
        <Ionicons
          onPress={() => navigation.goBack()}
          name="arrow-back"
          color={'white'}
          size={35}
        />
        <Text
          style={{
            color: 'white',
            fontSize: 25,
            marginLeft: 20,
          }}>
          Cricket
        </Text>
      </View>
      {videoId ? (
        <Video title={title} videoId={videoId} completed={com} />
      ) : null}
      <ScrollView>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
            padding: 10,
          }}>
          Top Videos
        </Text>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          style={styles.courseContainer}>
          {topCricketData.map(ele => (
            <View style={styles.course} key={ele.id}>
              <TouchableOpacity
                onPress={() => {
                  setVideoId(ele.link.split('/')[3]);
                  setCom(ele.completed);
                  setTitle(ele.title);
                }}>
                <View
                  style={{
                    width: 200,
                    height: 200,
                  }}>
                  <Image
                    source={{
                      uri: `https://i.ytimg.com/vi/${
                        ele.link.split('/')[3]
                      }/hqdefault.jpg`,
                    }}
                    style={{
                      alignSelf: 'center',
                      resizeMode: 'stretch',
                      flex: 1,
                      width: '100%',
                    }}
                  />
                </View>
                <View
                  style={{
                    backgroundColor: 'white',
                    marginTop: -25,
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 20,
                      fontWeight: 'bold',
                      padding: 10,
                    }}>
                    {ele.title}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        <View>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              fontWeight: 'bold',
              padding: 10,
            }}>
            Categories
          </Text>
        </View>
        <ScrollView horizontal>
          <View
            style={{
              padding: 20,
              flexDirection: 'row',
            }}>
            {categoryData.map(cat => (
              <Category
                navigation={navigation}
                image={cat.image}
                title={cat.title}
                key={cat.id}
              />
            ))}
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
  },
  course: {
    elevation: 4,
    marginHorizontal: 10,
    marginVertical: 20,
    backgroundColor: 'white',
    paddingBottom: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    height: 280,
    width: 200,
  },
  courseContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  activityButton: {
    alignSelf: 'center',
    backgroundColor: '#BBF246',
    padding: 20,
    borderRadius: 30,
  },
});

export default Cricket;
