import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import PastActivity from '../components/PastActivity';

const Dashboard = () => {
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
        <Text
          style={{
            color: 'white',
            fontSize: 30,
            fontWeight: 'bold',
            marginBottom: 20,
          }}>
          Past Activities
        </Text>
        {pastActivities.map(ac => (
          <PastActivity key={ac.id} data={ac} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({});
