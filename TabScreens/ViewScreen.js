import React from "react";
import { Component } from "react";
import {Text, View, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, Image, FlatList} from "react-native";

export default class ViewScreen extends Component {

  constructor(){
    super();

    this.state = {
      view: {

      }
    }
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
            <TouchableOpacity style={styles.newsCard}>
                
                <Text style={styles.newsTitleText}>
                  abcf
                </Text>    
            </TouchableOpacity>
          </View>
      
      </View>
    )
  }

  keyExtractor =(item, index) => index.toString();


  show_views() {
    return (
      <View style={styles.container2}>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.state.views}
          renderItem={this.renderItem}
        />
      </View>
    )
  }

  render() {
    
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <TextInput
          style={styles.inputBox}
          placeholder="state your view on something"
          placeholderTextColor="white"
          
          onChangeText={(text)=> {
            this.setState({
              view: text
            })
          }}
          />

          <TouchableOpacity style={styles.button} onPress={()=> {
            this.show_views
          }}>
            <Text style={styles.buttonText}>
              Submit
            </Text>
        </TouchableOpacity>
    
        </View>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  },
  textContainer: {
    flex: 1,
  },
  inputBox: {
    width: 360,
    height: 70,
    backgroundColor: "#2a2a2a",
    marginTop: 20,
    borderRadius: 25,
    color: "white",
    paddingLeft: 15,
    fontSize: 18
  },
  button: {
    backgroundColor: "black",
    borderRadius: 10,
    marginLeft: 260,
    marginTop: -60,
    height: 50,
    width: 80,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 18,
  },
  buttonText: {
    color: "white",
    fontSize: 20
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
    container2: {
      marginTop: 100,
      backgroundColor: "black"
    }

})