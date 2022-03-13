import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Text,
  ImageBackground,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


export default function Events({ navigation }) {
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [masterData, setMasterData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {

    var axios = require('axios');

    var config = {
      method: 'get',
      url: 'http://dishant.pythonanywhere.com/links/listevents',
      headers: {
        'Cookie': 'csrftoken=1vysuJDGtT2croq0GWTtKJBQOJXrS7Z8oCDvlbuOzIdEnnHV6FxVXkvT934h8row'
      }

    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setFilteredData(response.data);
        setMasterData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

  };

  const searchFilter = (text) => {
    if (text) {
      const newData = masterData.filter((item) => {
        const itemData = item.sports
          ? item.sports.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });

      setFilteredData(newData);
      setSearch(text);
    }
    if (text) {
      const newData = masterData.filter((item) => {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });

      setFilteredData(newData);
      setSearch(text);
    }
    if (text) {
      const newData = masterData.filter((item) => {
        const itemData = item.location
          ? item.location.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });

      setFilteredData(newData);
      setSearch(text);
    }

    else {
      setFilteredData(masterData);
      setSearch(text);
    }
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.feedItem} elevation={15}>
        <Image source={require('../assets/person.png')} style={styles.avatar} />
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <View style={{ flexDirection: "row" }}>

              <Text style={styles.name}>SPORT - {item.sports}</Text>
              <Icon name="qr-code-outline" onPress={() => {

                navigation.navigate('QRCode');
              }} size={30} color="#73788B" style={{ marginLeft: 100 }} />

            </View>
          </View>
          <Text style={styles.post}>NAME - {item.title}</Text>
          <Text style={styles.post}>LOCATION - {item.location}</Text>
          <ImageBackground source={{
            uri: item.photo,
          }} style={styles.postImage} resizeMode="stretch" />


        </View>
      </View>

    );
  };

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.inputCard} >
          <TextInput
            style={styles.input}
            placeholder={'SEARCH'}
            placeholderTextColor="white"
            clearButtonMode="always"
            value={search}
            onChangeText={(text) => searchFilter(text)}
          />

        </View>
      </View>

      <FlatList
        data={filteredData}
        keyExtractor={({ id }) => id}
        contentContainerStyle={{}}
        renderItem={renderItem}

      />

    </View>

  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#019267',

  },
  header: {
    paddingTop: 64,
    paddingBottom: 16,
    backgroundColor: '#3BCBFF',
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#EBECF4",

  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "500"
  },
  feed: {
    marginHorizontal: 10
  },
  feedItem: {
    backgroundColor: "#00CBA9",
    borderRadius: 5,
    padding: 8,
    flexDirection: "row",
    margin: 25,
    shadowColor: "#000000",
    shadowOffset: { height: 15 },
    shadowRadius: 15,
    shadowOpacity: 10,
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 20,
    marginRight: 16
  },
  name: {
    fontSize: 15,
    fontWeight: "500",
    color: "#454D65"
  },
  timestamp: {
    fontSize: 11,
    color: "#C4C6CE",
    marginTop: 4
  },
  post: {
    marginTop: 16,
    fontSize: 14,
    color: "white"
  },
  postImage: {
    width: undefined,
    height: 150,
    borderRadius: 5,
    marginVertical: 16
  },
  input: {
    padding: 10,
    flex: 1,
    borderBottomColor: "black",
    backgroundColor: '#00CBA9',
  },
  inputCard: {
    margin: 25,
    flexDirection: 'row',
    backgroundColor: "#000000",
    alignItems: 'center',
    borderRadius: 5,
    zIndex: 100,
    borderColor: "white",
    borderWidth: 0.5
  },

});
