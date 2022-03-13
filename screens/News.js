import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    FlatList,
    Text,
    Image,
    ImageBackground
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from "axios"
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
export default function News() {
    const [filteredData, setFilteredData] = useState([]);
    useEffect(() => {
        fetchData();

    }, []);

    useEffect(() => {
        console.log(filteredData)
    }, [filteredData])
    const fetchData = async () => {
        const res = await axios.get("https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=e122cf46d6564406a135ac8588c191dd");
        console.log(res.data);
        setFilteredData(res.data.articles)
    };

    const renderItem = ({ item }) => {

        return (

            <View style={{ backgroundColor: "#00CBA9" }} >
                <Card style={{ alignContent: 'center', alignItems: 'center', justifyContent: 'center', backgroundColor: '#1E6F5C', }}>
                    <Card.Title style={{ alignContent: 'center', alignItems: 'center', justifyContent: 'center', backgroundColor: '#00CBA9', }} title={item.source.name} subtitle={item.author} />

                    <Card.Content>
                        <Title>{item.title}</Title>
                        <Paragraph>{item.description}</Paragraph>
                    </Card.Content>
                    <ImageBackground style={{ height: 300, width: 400 }} source={{ uri: item.urlToImage }} />


                </Card>
            </View>


        );
    };

    return (
        <View style={styles.container}>

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
        backgroundColor: '#1E6F5C',

    },
    header: {
        paddingTop: 64,
        paddingBottom: 16,
        backgroundColor: '#1E6F5C',
        alignItems: "center",
        justifyContent: "center",
        borderBottomWidth: 1,
        borderBottomColor: "black",

    },
    headerTitle: {
        fontSize: 20,
        fontWeight: "500",
        backgroundColor: '#1E6F5C',

    },
    feed: {
        marginHorizontal: 10,
        backgroundColor: '#1E6F5C',
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
        backgroundColor: '#1E6F5C',

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