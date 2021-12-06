import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import TabNavigator from "./TabNavigator";
import BusinessFeed from "../businessNews/BusinessFeed";
import TechFeed from "../techNews/TechFeed";
import EntertainmentFeed from "../entertainmentNews/EntertainmentFeed";
import WeatherFeed from "../Weather";
import Ionicons from "react-native-vector-icons/Ionicons"

const Drawer = createDrawerNavigator();

const DrawerNavigator = ()=> {

  return (

    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={TabNavigator}/>
      <Drawer.Screen name="Business" component={BusinessFeed}/>
      <Drawer.Screen name="Tech" component={TechFeed}/>
      <Drawer.Screen name="Entertainment" component={EntertainmentFeed}/>
 
    </Drawer.Navigator>
  )
}

export default DrawerNavigator;