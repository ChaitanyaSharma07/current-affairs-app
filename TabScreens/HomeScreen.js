import React, {useState} from "react";
import { Component } from "react";
import {Text, View, StyleSheet, Image, FlatList, SafeAreaView, TouchableOpacity, Linking, Platform, StatusBar, TextInput} from "react-native";
import axios from "axios";
import { RFValue } from "react-native-responsive-fontsize";
import AppLoading from "expo-app-loading";
import Ionicons from "react-native-vector-icons/Ionicons";
import Searchbar from "../components/Searchbar";

export default class BusinessFeed extends Component {
  
  constructor() {
    super();

    this.state = {
      articles: {
        
      }
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData(){

      axios
          .get("https://newsapi.org/v2/top-headlines?country=in&apiKey=fd1c64e155744fb595e54f79c96b3a46")
          .then(response => {
            this.setState({
              articles: response.data.articles,
            }).catch(error => { 
                  alert(error.message)
            })
          })
    
  }




  renderItem =({item}) => {
    return (
    /*
    <TouchableOpacity
          style={styles.container}
          onPress={()=> Linking.openURL(item.url).catch(err => console.error("Couldn't load page", err))}
        >

      <View style={styles.container}>
        <Image source={{uri: item.imageToUrl}} style-{styles.newsImage}/>

        <View style={styles.captionContainer}>
          <Text style={styles.captionText}>
              {item.caption}
          </Text>
        </View>
        <View style-{styles.authorContainer}>
          <View style={styles.authorNameContainer}>
            <Text style={styles.authorNameText}>author = {item.author}</Text>
          </View>
        </View>
      </View>
jh
    */


      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea}/>
          <View style={styles.cardContainer}>
            <TouchableOpacity style={styles.newsCard} onPress={()=> Linking.openURL(item.url).catch(err => console.error("Couldn't load page", err))}>
              
              <Image
                source={{uri: item.urlToImage}}
                style={styles.storyImage}/>
           

                
                <Text style={styles.newsTitleText}>
                  {item.description}    
                </Text>    
               
               <View>
                <Text style={styles.newsAuthorText}>
                 Author - {item.author}
                </Text>
              </View>
              </TouchableOpacity>
          </View>
      
      </View>
    )
  }

  keyExtractor =(item, index) => index.toString();

  render() {
    let color = "black";
    let iconName = "bicycle-outline";
   
    return (
      
      <View style={styles.container}>

        <TextInput
          style={styles.inputBox}

        />

        <View style={styles.container2}>
          <FlatList
            keyExtractor={this.keyExtractor}
            data={this.state.articles}
            renderItem={this.renderItem}
          />  
        </View>
       
        
      </View>
    )
    }
}

const styles = StyleSheet.create({


  container2: {
    marginTop: 50
  },


  container: {
      flex: 1,
      backgroundColor: "black"
  },
  cardContainer: {
      margin: RFValue(25),
      backgroundColor: "#2a2a2a",
      borderRadius: RFValue(20),
      padding: RFValue(20)
  },


  storyImage: {
    width: 275,
    resizeMode: "contain",
    height: 275,
    borderRadius: 20,
    marginTop: 255
  },

  newsCard: {
    width: 500,
    height: 420,
    marginTop: 60,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    padding: 10
  },

  newsTitleText: {
    color: "white",
    marginBottom: 100,
    marginLeft: 100,
    marginRight: 100,
    fontSize: 15
  },
  newsAuthorText: {
    color: "white",
    marginBottom: 375,
    fontSize: 15,
    marginLeft: 100,
    marginRight: 100
  },

});

