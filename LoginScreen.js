import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet,TextInput,Alert } from 'react-native';
import WriteStory from './WriteStory'
import * as firebase from 'firebase'


export default class LoginScreen extends React.Component {
    constructor(){
        super();
        this.state={
          emailId : '',
          password: ''
        }
      }
      login=async(email,password)=>{
        if (email && password){
          try{
            const response = await firebase.auth().signInWithEmailAndPassword(email,password)
            if(response){
              this.props.navigation.navigate(WriteStory)
            }
          }
          catch(error){
            switch (error.code) {
              case 'auth/user-not-found':
                Alert.alert("user dosen't exists")
                console.log("doesn't exist")
                break
              case 'auth/invalid-email':
                Alert.alert('incorrect email or password')
                console.log('invaild')
                break
            }
          }
        }
        else{
            Alert.alert('enter email and password');
        }
      }    
  render(){
   return(
    <View>
    <Text style={styles.HeadingText}>LOGIN</Text>

      <TextInput
      placeholder="abc@example.com"
      style={styles.TitleinputBox}
      keyboardType='email-address'/>

      <TextInput
      placeholder="password"
      secureTextEntry = {true}
      style={styles.TitleinputBox}
      onChangeText={(text)=>{
        this.setState({
          password: text
        })
      }}/> 
     
     <TouchableOpacity style={styles.LoginButton}
     onPress={()=>{this.login(this.state.emailId,this.state.password)}}>
        
      <Text style={styles.buttonText}>Login</Text>
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
      backgroundColor: '#1F618D',
     }, 
    HeadingText: {
      fontSize: 20,
      backgroundColor: '',
      marginLeft: 690,
      marginTop: 140
     },
     TitleinputBox:{
        width: 200,
        height: 40,
        borderWidth: 3,
        borderRightWidth: 0,
        fontSize: 20,
        backgroundColor: '#3498DB',
        marginTop: 50,
        marginLeft: 620,
      },
      buttonText:{
        fontSize: 15,
        textAlign: 'center',
        marginTop: 10
      },
      LoginButton:{
        backgroundColor: '#1F618D',
        padding: 10,
        marginLeft: 660,
        marginTop:50,
        borderRadius: 15,
        borderWidth: 3,
        fontWeight: 'bold',
        width:100
      }, 
    })  

    

    