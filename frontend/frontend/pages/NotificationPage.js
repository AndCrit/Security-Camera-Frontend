import {StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import ProfileBlock from '../components/ProfileBlock'
import NotificationBlock from '../components/NotificationBlock';

export default function NotificationPage(props) {

    const[query, onChangeQuery] = React.useState('Useless Multiline Placeholder');
    return (
      <View style={styles.overture_container}>
          <Text style={[styles.text, styles.big_text, styles.bold_text ]}> Notifications </Text>
            <View style={styles.text_input}>
              <TextInput editable maxLength={20}  onChangeQuery={text => onChangeQuery(text)} style={styles.text_input} > Search for notif</TextInput>
              <TouchableOpacity>
                <Image style={styles.icon} source={require('../assets/Search.png')}/>
              </TouchableOpacity>
            </View>
        <NotificationBlock/>
        <NotificationBlock/>
      </View>
    )
  }

  const styles = StyleSheet.create({
    overture_container: {
      backgroundColor: '#535354',
      height: '100%',
      alignItems: 'center',
    },
    

    text:{
      color:'white',
      fontSize: 16,
      fontWeight: "400",
      textAlign:'center',
    },
    text_input:{
      justifyContent: 'space-between',
      flexDirection: 'row',
      color: 'white',
      backgroundColor: '#a7a4f0',
      width:'70%',
      borderRadius: 5,
    },
    text_input_text:{
      justifyContent:'flex-start',
    },
    text_input_icon:{
      justifyContent:'flex-end',
    },

    icon:{
      height: 30,
      width:30,
    },
    

    bold_text:{
      fontWeight:"700",
    },

    big_text:{
      fontSize: 50,
    },
  });

