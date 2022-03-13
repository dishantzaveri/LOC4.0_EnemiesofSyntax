import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {cricketData} from '../components/data';
import Video from '../components/Video';
import Ionicons from 'react-native-vector-icons/Ionicons';
const CategoryScreen = ({route, navigation}) => {
  const [allData, setAllData] = useState([]);
  const [videoId, setVideoId] = useState('');
  const [com, setCom] = useState(false);
  const [title, setTitle] = useState('');
  const getData = () => {
    var axios = require('axios');
    var config = {
      method: 'get',
      url: `http://dishant.pythonanywhere.com/links/list${route.params.sport.toLowerCase()}`,
      headers: {},
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setAllData(
          response.data.filter(ele => ele.sports_type === route.params.title),
        );
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    getData();
  });
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
          {route.params.title}
        </Text>
      </View>
      {videoId ? (
        <Video title={title} videoId={videoId} completed={com} />
      ) : null}
      <ScrollView horizontal style={styles.courseContainer}>
        {allData.map(ele => (
          <View style={styles.course} key={ele.id}>
            <TouchableOpacity
              onPress={() => {
                setVideoId(ele.link.split('/')[3]);
                setCom(ele.completed);
                setTitle(ele.title);
              }}>
              <Image
                source={{
                  uri: `https://i.ytimg.com/vi/${
                    ele.link.split('/')[3]
                  }/hqdefault.jpg`,
                }}
                style={{
                  width: 200,
                  height: 200,
                  resizeMode: 'stretch',
                }}
              />
              <View
                style={{
                  marginTop: -25,
                  backgroundColor: 'white',
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
    </View>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  headerText: {
    fontSize: 30,
    color: 'white',
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
