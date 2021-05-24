import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet,TextInput,KeyboardAvoidingView,ToastAndroid,Alert } from 'react-native';
import ReadStory from './ReadStory';
import db from '../config'
import firebase from 'firebase'
//import * as Permissions from 'expo-permissions';

export default class WriteStory extends React.Component {

  SubmitStory(){
    /*db.collection("OwnStory").doc("StoryId").update({
        
     })*/ 
     alert("Story Submitted")
     var SubmitStory = "story submitted"
     ToastAndroid.show(SubmitStory, ToastAndroid.SHORT);
   }

   render(){
    return(
     <View style={styles.container}>
      <Text style={styles.HeadingText}>MAKE YOUR OWN STORY</Text>
      <View >
        <TextInput
        placeholder="TITLE"
        style={styles.TitleinputBox}/>
        <KeyboardAvoidingView/>
        <TextInput
        placeholder="AUTHOR"
        style={styles.TitleinputBox}/>
        <KeyboardAvoidingView/>
        <TextInput
        placeholder="STORY"
        style={styles.StoryinputBox}/> 
        <KeyboardAvoidingView/> 
      </View>

      <TouchableOpacity
       style={styles.SubmitButton}
       onPress={this.SubmitStory}>
         
       <Text style={styles.buttonText}>SUBMIT</Text>   
      </TouchableOpacity>   
     </View>

    )   
   } 
}

const styles = StyleSheet.create({
  container:  {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D68910',
   }, 
  HeadingText: {
    fontSize: 20,
    backgroundColor: '#C0392B',
   },
  TitleinputBox:{
    width: 200,
    height: 40,
    borderWidth: 3,
    borderRightWidth: 0,
    fontSize: 20,
    backgroundColor: '#E59866',
    marginTop: 10,
    marginLeft: 120,
  },
  StoryinputBox:{
    width: 450,
    height: 450,
    borderWidth: 3,
    borderRightWidth: 0,
    fontSize: 20,
    backgroundColor: '#E59866',
    marginTop: 10,
    textAlign: 'center'
  },
  buttonText:{
    fontSize: 15,
    textAlign: 'center',
    marginTop: 10
  },
  SubmitButton:{
    backgroundColor: '#C0392B',
    padding: 10,
    margin: 10,
    borderRadius: 15,
    borderWidth: 3,
    fontWeight: 'bold',
  }, 
})