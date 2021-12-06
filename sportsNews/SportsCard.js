import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";

import axios from "axios";

export default class PostCard extends Component {

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

    render() {
        return (
          <TouchableOpacity
            style={styles.container}
            onPress={() =>
              this.props.navigation.navigate("PostScreen", {
                post: this.props.post
              })
            }
          >
                  <View style={styles.cardContainer}>
                      <View style={styles.authorContainer}>

                          <Image source={{uri: this.state.articles.urlToImage}} style={styles.postImage} />
                          <View style={styles.authorNameContainer}>
                              <Text style={styles.authorNameText}>{this.state.articles.author == null? "none": this.state.articles.author}</Text>
                          </View>
                      </View>
                     
                      <View style={styles.captionContainer}>
                          <Text style={styles.captionText}>
                              {this.state.articles.description}
                          </Text>
                      </View>
                  </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    cardContainer: {
        margin: RFValue(13),
        backgroundColor: "#2a2a2a",
        borderRadius: RFValue(20),
        padding: RFValue(20)
    },
    authorContainer: {
        flex: 0.1,
        flexDirection: "row"
    },

    authorNameContainer: {
        flex: 0.85,
        justifyContent: "center"
    },
    authorNameText: {
        color: "white",
        fontSize: RFValue(20)
    },
    postImage: {
        marginTop: RFValue(20),
        resizeMode: "contain",
        width: "100%",
        alignSelf: "center",
        height: RFValue(275)
    },

});
