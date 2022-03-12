import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Text,
  ImageBackground
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


export default function Events() {
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
        <ImageBackground source={require('../assets/person.png')} style={styles.avatar} />
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <View>
              <Text style={styles.name}>{item.sports}</Text>
    
            </View>
          </View>
          <Text style={styles.post}>{item.title}</Text>
          <Text style={styles.post}>{item.location}</Text>
          <ImageBackground source={{
            uri: item.photo,
          }} style={styles.postImage} resizeMode="cover" />
          <View style={{ flexDirection: "row" }}>
            <Icon name="ios-heart-outline" size={24} color="#73788B" style={{ marginRight: 16 }} />
            <Icon name="chatbox" size={24} color="#73788B" />
          </View>
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
          <TouchableOpacity
            onPress={() => {
            }}>
            <FontAwesome5
              name={"search" ? 'search' : 'refresh'}
              size={20}
              color={'white'}
            />
          </TouchableOpacity>
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
    backgroundColor:'black',
  
  },
  header: {
    paddingTop: 64,
    paddingBottom: 16,
     backgroundColor:'#3BCBFF',
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
    backgroundColor: "#FFF",
    borderRadius: 5,
    padding: 8,
    flexDirection: "row",
    margin:15,
    shadowColor: "#000000",
    shadowOffset: { height: 15 },
    shadowRadius: 15,
    shadowOpacity: 10,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
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
    color: "#838899"
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
    borderBottomColor: "white",
    color: "white",
  },
  inputCard: {
    margin: 15,
    flexDirection: 'row',
    backgroundColor: '#1f2128',
    alignItems: 'center',
    borderRadius: 5,
    zIndex: 100,
    borderColor: "white",
    borderWidth: 0.5
  },

});
