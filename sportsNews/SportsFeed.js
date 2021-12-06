import React from "react";
import { Component } from "react";
import {Text, View, StyleSheet, Image, FlatList, SafeAreaView, TouchableOpacity, Linking, Platform, StatusBar} from "react-native";
import axios from "axios";
import { RFValue } from "react-native-responsive-fontsize";
import AppLoading from "expo-app-loading";
import Ionicons from "react-native-vector-icons/Ionicons";


export default class SportsFeed extends Component {
  
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
          .get("https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=fd1c64e155744fb595e54f79c96b3a46")
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
    let icon_name = "american-football";
   
    return (
      
      <View style={styles.container}>
        <View style={styles.appTitle}>
      
          <View style={styles.appTitleTextContainer}>
          
            <Ionicons name={icon_name} size={RFValue(40)} style={styles.icon}/>
            <Text style={styles.appTitleText}>Sports News</Text>
          </View>          
        </View>
      
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
  appTitleTextContainer: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 50,
    marginRight: 80,

  },
  appTitle: {
    flex: 1,
    flexDirection: "row"
  },


  icon: {
    color: "black",
    marginBottom: 550,
    paddingLeft: 75,
    backgroundColor: "white",
    height: 50,
    width: 170
  },

   appTitleText: {
    color: "black",
    fontSize: 25,
    marginBottom: 550,
    backgroundColor: "white",
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    height: 50,
    width: 170,
    marginRight: 50
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
    appIcon: {
      flex: 1,
      flexDirection: "row"
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

    container2: {
      marginTop: 100,
      backgroundColor: "black"
    }
});

