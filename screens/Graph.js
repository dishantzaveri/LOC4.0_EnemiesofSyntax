import React, {Component} from 'react';
import {StyleSheet, ScrollView, StatusBar, Text, View} from 'react-native';
import PieChart from 'react-native-pie-chart';
import {width} from '../components/Constants';

export default function Graph({navigation}) {
  const widthAndHeight = 250;
  const series = [123, 321, 123, 789, 537];
  const sliceColor = ['#F44336', '#2196F3', '#FFEB3B', '#4CAF50', '#FF9800'];

  return (
    <ScrollView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.title}>Activities In A Month</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: width,
            marginBottom: 10,
          }}>
          <Text style={{color: 'orange'}}>January</Text>
          <Text style={{color: 'red'}}>February</Text>
          <Text style={{color: 'blue'}}>March</Text>
          <Text style={{color: 'yellow'}}>April</Text>
          <Text style={{color: 'lightgreen'}}>May</Text>
        </View>
        <PieChart
          widthAndHeight={widthAndHeight}
          series={series}
          sliceColor={sliceColor}
        />
        <Text style={styles.title}>Calories burnt in a Month</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: width,
            marginBottom: 10,
          }}>
          <Text style={{color: 'orange'}}>January</Text>
          <Text style={{color: 'red'}}>February</Text>
          <Text style={{color: 'blue'}}>March</Text>
          <Text style={{color: 'yellow'}}>April</Text>
          <Text style={{color: 'lightgreen'}}>May</Text>
        </View>
        <PieChart
          widthAndHeight={widthAndHeight}
          series={series}
          sliceColor={sliceColor}
          doughnut={true}
          coverRadius={0.45}
          coverFill={'#FFF'}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black',
    paddingBottom: 10,
  },
  title: {
    fontSize: 24,
    margin: 20,
    color: 'white',
  },
});
