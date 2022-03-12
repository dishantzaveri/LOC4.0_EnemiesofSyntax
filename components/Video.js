import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import YoutubeIframe from 'react-native-youtube-iframe';

const Video = ({videoId, completed, title}) => {
  return (
    <View>
      <YoutubeIframe height={230} videoId={videoId} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          alignItems: 'center',
        }}>
        <Text style={styles.titleText}>{title}</Text>
        {completed ? (
          <TouchableOpacity style={styles.activityCompletedButton}>
            <Text
              style={{
                fontSize: 16,
                color: 'white',
              }}>
              Completed
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.activityIncompleteButton}>
            <Text
              style={{
                fontSize: 16,
                color: 'white',
              }}>
              Complete
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Video;

const styles = StyleSheet.create({
  activityCompletedButton: {
    alignSelf: 'center',
    backgroundColor: '#65C18C',
    padding: 15,
    borderRadius: 30,
  },
  activityIncompleteButton: {
    alignSelf: 'center',
    backgroundColor: '#573391',
    padding: 15,
    borderRadius: 30,
  },
  titleText: {
    fontSize: 20,
    paddingRight: 10,
    fontWeight: 'bold',
    color: 'white',
  },
});
