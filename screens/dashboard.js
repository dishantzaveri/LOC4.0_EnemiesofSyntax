import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';
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
      videoLink: 'https://youtu.be/W90mt_Y2NtU',
      title: 'Defending',
      time: '10th January 14:00',
    },
    {
      id: 3,
      videoLink: 'https://youtu.be/3p8EBPVZ2Iw',
      title: 'Abs',
      time: '6th January 19:00',
    },
    {
      id: 4,
      videoLink: 'https://youtu.be/IvAx7q2LKqk',
      title: 'Yoga',
      time: '1st January 22:00',
    },
    {
      id: 5,
      videoLink: 'https://youtu.be/eVF_m_GaT1Y',
      title: 'Square Drive',
      time: '4th January 22:00',
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
        <TouchableOpacity onPress={() => { navigation.navigate('Graph'); }}>

          < View style={{ flexDirection: 'row' }}>


            <Text
              style={{
                color: 'white',
                fontSize: 20,
                fontWeight: 'bold',
                margin: 20
              }}>
              Past Activities
            </Text>
            <Icon name="pie-chart-outline" color='white' size={26} style={{
              color: 'white', marginLeft: 130, marginTop: 20

            }} />


          </ View>
        </TouchableOpacity>
        {pastActivities.map(ac => (
          <PastActivity key={ac.id} data={ac} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({});
