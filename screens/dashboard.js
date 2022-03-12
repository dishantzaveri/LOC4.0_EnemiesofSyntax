import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';
import PastActivity from '../components/PastActivity';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Dashboard = ({ navigation }) => {
  const pastActivities = [
    {
      id: 1,
      videoLink: 'https://youtu.be/fELk4k1pndg',
      title: 'Cover Drive',
      time: '12th January 18:00',
    },
    {
      id: 2,
      videoLink: 'https://youtu.be/fELk4k1pndg',
      title: 'Cover Drive',
      time: '12th January 18:00',
    },
    {
      id: 3,
      videoLink: 'https://youtu.be/fELk4k1pndg',
      title: 'Cover Drive',
      time: '12th January 18:00',
    },
    {
      id: 4,
      videoLink: 'https://youtu.be/fELk4k1pndg',
      title: 'Cover Drive',
      time: '12th January 18:00',
    },
  ];
  return (
    <View
      style={{
        backgroundColor: 'black',
        flex: 1,
        padding: 10,
      }}>
      <ScrollView>

        < View style={{ flexDirection: 'row' }}>

          <TouchableOpacity onPress={() => { navigation.navigate('Graph'); }}>
            <Text
              style={{
                color: 'white',
                fontSize: 25,
                fontWeight: 'bold',

                alignContent: 'center',
                justifyContent: 'center'
              }}>
              Past Activities
            </Text>
            <Icon name="card-outline" color='white' size={26} />

          </TouchableOpacity>
        </ View>
        {pastActivities.map(ac => (
          <PastActivity key={ac.id} data={ac} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({});
