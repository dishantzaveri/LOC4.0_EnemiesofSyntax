import VideoRecorder from 'react-native-beautiful-video-recorder';
import React, { useState, useRef } from 'react';
import {

    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Share,
} from 'react-native';
import Button from '../components/Button';
const Video = () => {
    const cameraRef = useRef(null);

    const videoRecord = async () => {
        if (cameraRef && cameraRef.current) {
            cameraRef.current.open({ maxLength: 30 }, (data) => {
                console.log('captured data', data); // data.uri is the file path
            });
        }
    }

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <VideoRecorder ref={cameraRef} />
            <Button onPress={() => videoRecord()}>Click here to record.</Button>
        </View>
    );

}

export default Video;