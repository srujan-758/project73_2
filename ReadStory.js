import React from 'react';
import { Text, View, FlatList, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import db from '../config'
import { ScrollView } from 'react-native-gesture-handler';



export default class Searchscreen extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        books: [],
        lastVisibleBook: null,
        search:''
      }
    }

    fetchMoreBooks = async ()=>{
      var text = this.state.search.toUpperCase()
      var enteredText = text.split("")

    if (enteredText[0]){
      const query = await db.collection("OwnStory").where('OwnStory','==',text).startAfter(this.state.lastVisibleBook).limit(10).get()
      query.docs.map((doc)=>{
        this.setState({
          books: [...this.state.allTransactions, doc.data()],
          lastVisibleBook: doc
        })
      })
    }
      

  }

    searchBooks= async(text) =>{
      var enteredText = text.split("")
      text = text.toUpperCase()
  
      
      if (enteredText[0]){
        const book =  await db.collection("OwnStory").where('OwnStory','==',text).get()
        book.docs.map((doc)=>{
          this.setState({
            books:[...this.state.allTransactions,doc.data()],
            lastVisibleBook: doc
          })
        })
      }
      
    }

    componentDidMount = async ()=>{
      const query = await db.collection("OwnStory").limit(10).get()
      query.docs.map((doc)=>{
        this.setState({
          books: [],
          lastVisibleBook: doc
        })
      })
    }
    render() {
      return (
        <View style={styles.container}>
          <View style={styles.searchBar}>
        <TextInput 
          style ={styles.bar}
          placeholder = "Enter Story Name"
          onChangeText={(text)=>{this.setState({search:text})}}/>
          <TouchableOpacity
            style = {styles.searchButton}
            onPress={()=>{this.searchBooks(this.state.search)}}
          >
            <Text>Search</Text>
          </TouchableOpacity>
          </View>
        <FlatList
          data={this.state.allTransactions}
          renderItem={({item})=>(
            <View style={{borderBottomWidth: 2}}>
              <Text>{"Story: " + item.OwnStory}</Text>
              <Text>{"Date: " + item.date.toDate()}</Text>
            </View>
          )}
          keyExtractor= {(item, index)=> index.toString()}
          onEndReached ={this.fetchMoreBooks}
          onEndReachedThreshold={0.7}
        /> 
        </View>
      );
    }
  }


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 20
    },
    searchBar:{
      flexDirection:'row',
      height:40,
      width:'auto',
      borderWidth:0.5,
      alignItems:'center',
      backgroundColor:'grey',
  
    },
    bar:{
      borderWidth:2,
      height:30,
      width:300,
      paddingLeft:10,
    },
    searchButton:{
      borderWidth:1,
      height:30,
      width:50,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'green'
    }
  })