import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { height } from '../components/Constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../components/Button';

const Profile = ({ navigation }) => {
    return (
        <View style={{ backgroundColor: '#1B1A17', flex: 1 }}>
            <View
                style={{
                    width: '100%',
                    height: height / 2.5,
                    backgroundColor: 'white',
                    borderBottomLeftRadius: 30,
                    borderBottomRightRadius: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Image
                    source={{
                        uri: 'https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg',
                    }}
                    style={{
                        width: 150,
                        height: 150,
                        borderRadius: 50,
                    }}
                />
                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20 }}>
                    Manan Shah
                </Text>
                <Text style={{ color: 'grey', fontWeight: 'bold', fontSize: 20 }}>
                    shahmanan@gmail.com
                </Text>
            </View>
            <View style={{ padding: 20 }}>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                    }}>
                    <View
                        style={{
                            backgroundColor: 'white',
                            padding: 20,
                            borderRadius: 20,
                            flex: 0.5,
                            marginHorizontal: 10,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}>
                        <View>
                            <Text style={{ color: 'black', fontSize: 16 }}>Activities</Text>
                            <Text style={{ color: 'green', fontSize: 18 }}>50</Text>
                        </View>
                        <Ionicons name="ios-analytics" size={35} color="green" />
                    </View>
                    <View
                        style={{
                            marginHorizontal: 10,
                            backgroundColor: 'white',
                            padding: 20,
                            borderRadius: 20,
                            flex: 0.5,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}>
                        <View>
                            <Text style={{ color: 'black', fontSize: 16 }}>Points</Text>
                            <Text style={{ color: 'darkblue', fontSize: 18 }}>20</Text>
                        </View>
                        <MaterialCommunityIcons
                            name="star-four-points"
                            size={35}
                            color="#F0A500"
                        />
                    </View>
                </View>
                <Text style={styles.infoText}>Age : 18</Text>

                <Text style={styles.infoText}>Weight : 56Kg</Text>
                <Text style={styles.infoText}>Height : 184cm</Text>
                <Text style={styles.infoText}>Phone No. 7021579939</Text>
                <Button
                    mode="contained"
                    onPress={() => navigation.navigate('Login')}
                    style={{ marginTop: 6, color: "#000000" }}>
                    LOGOUT
                </Button>

            </View>
        </View>
    );
};

export default Profile;

const styles = StyleSheet.create({
    infoText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        marginVertical: 15,
    },
});