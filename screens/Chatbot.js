import React, { useState } from 'react';
import {
    View,
    Text,
    FlatList,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import { styles } from '../components/styles';
import Msg from '../components/msg';

const data = [
    {
        question: 'hi',
        answer: 'Hello',
    },
    {
        question: 'hello',
        answer: 'Hi',
    },
    {
        question: 'hi bot',
        answer: 'Hello',
    },
    {
        question: 'hello bot',
        answer: 'Hi',
    },
    {
        question: 'how are you',
        answer: 'I am fine',
    },
    {
        question: 'what is your age',
        answer: 'I was developed yesterday',
    },
    {
        question: 'what is your name',
        answer: 'I am bot',
    },
    {
        question: 'how to use hand gesture tool?',
        answer: 'Open the tool , Try to maintain a distance of 1 m from the camera and keep a mark hands are properly visible and make gesture you want',
    },

];

let chats = [];
const ChatBot = () => {
    const [msg, setMsg] = useState('');
    const [chatList, setChatList] = useState([]);

    const getAnswer = q => {
        for (let i = 0; i < data.length; i++) {
            if (data[i].question.toLowerCase().includes(q.toLowerCase())) {
                chats = [...chats, { msg: data[i].answer, incomingMsg: true }];
                setChatList([...chats].reverse());
                return;
            }
        }

        chats = [
            ...chats,
            { msg: "Didn't recognise your question", incomingMsg: true },
        ];
        setChatList([...chats].reverse());
        return;
    };

    const onSendMsg = () => {
        chats = [...chats, { msg: msg, sentMsg: true }];
        setChatList([...chats].reverse());
        setTimeout(() => {
            getAnswer(msg);
        }, 1000);
        setMsg('');
    };

    return (
        <View>
            <FlatList
                style={{ height: '87%', bottom: '3%' }}
                inverted={true}
                keyExtractor={(_, index) => index.toString()}
                data={chatList}
                renderItem={({ item }) => (
                    <Msg
                        incomingMsg={item.incomingMsg}
                        msg={item.msg}
                        sentMsg={item.sentMsg}
                    />
                )}
            />
            <View style={styles.typeMsgContainer}>
                <TextInput
                    style={styles.typeMsgBox}
                    value={msg}
                    placeholder="Type Here ..."
                    onChangeText={val => setMsg(val)}
                />
                <TouchableOpacity
                    style={[styles.sendBtn, { backgroundColor: msg ? 'orange' : 'grey' }]}
                    disabled={msg ? false : true}
                    onPress={() => onSendMsg()}>
                    <Text style={styles.sendTxt}>send</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ChatBot;