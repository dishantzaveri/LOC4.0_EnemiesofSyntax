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
import axios from "axios"
export default function News() {
    const [filteredData, setFilteredData] = useState([]);
    useEffect(() => {
        fetchData();

    }, []);

    useEffect(() => {
        console.log(filteredData)
    }, [filteredData])
    const fetchData = async () => {

        // var axios = require('axios');
        // var FormData = require('form-data');
        // var data = new FormData();

        // var config = {
        //     method: 'get',
        //     url: 'https://newsapi.org/v2/everything?q=tesla&from=2022-02-12&sortBy=publishedAt&apiKey=e122cf46d6564406a135ac8588c191dd',

        //     data: data
        // };

        // axios(config)
        //     .then(function (response) {
        //         //console.log(JSON.stringify(response.data));
        //         setFilteredData(JSON.stringify(response.data))

        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
        const res = await axios.get("https://newsapi.org/v2/everything?q=tesla&from=2022-02-12&sortBy=publishedAt&apiKey=e122cf46d6564406a135ac8588c191dd");
        console.log(res.data);
        setFilteredData(res.data.articles)
    };

    // const renderItem = ({ item }) => {

    //     return (
    //         <View style={styles.feedItem} elevation={15}>
    //             <ImageBackground source={require('../assets/person.png')} style={styles.avatar} />
    //             <View style={{ flex: 1 }}>
    //                 <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
    //                     <View>
    //                         <Text style={styles.name}>{item.author}</Text>

    //                     </View>
    //                 </View>
    //                 <Text style={styles.post}>{item.author}</Text>
    //                 <ImageBackground source={{
    //                     uri: item.photo,
    //                 }} style={styles.postImage} resizeMode="cover" />
    //                 <View style={{ flexDirection: "row" }}>
    //                     <Icon name="ios-heart-outline" size={24} color="#73788B" style={{ marginRight: 16 }} />
    //                     <Icon name="chatbox" size={24} color="#73788B" />
    //                 </View>
    //             </View>
    //         </View>

    //     );
    // };

    return (
        <View style={styles.container}>

            {/* <FlatList
                data={filteredData}
                keyExtractor={({ id }) => id}
                contentContainerStyle={{}}
                renderItem={renderItem}

            /> */}
            {
                filteredData.map(ele => (
                    <View style={styles.feedItem} elevation={15}>
                        <ImageBackground source={require('../assets/person.png')} style={styles.avatar} />
                        <View style={{ flex: 1 }}>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                <View>
                                    <Text style={styles.name}>{ele.author}</Text>

                                </View>
                            </View>
                            <Text style={styles.post}>{ele.author}</Text>
                            <ImageBackground source={{
                                uri: ele.photo,
                            }} style={styles.postImage} resizeMode="cover" />
                            <View style={{ flexDirection: "row" }}>
                                <Icon name="ios-heart-outline" size={24} color="#73788B" style={{ marginRight: 16 }} />
                                <Icon name="chatbox" size={24} color="#73788B" />
                            </View>
                        </View>
                    </View>
                ))
            }
        </View>

    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#3BCBFF',

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
        backgroundColor: "#FFF",
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
    }

});