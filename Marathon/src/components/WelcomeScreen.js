import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, StatusBar } from 'react-native';
import Slides from "./Slides";
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation';
import LoginScreen from "../Auth/Login";
import SignupScreen from "../Auth/SignUp";
import HomeScreen from "../HomeScreen/index.js";

const SLIDES_DATA = [
    // { text: "Welcome to Family Tracker" , color: '#009688' },
    // { text: "Locate your Family & Friends" , color: '#03A9F4' },
    { text: "Invite your Family & Friends" , color: '#009688' }
];

class WelcomeScreen extends Component {
   static navigationOptions = {
    header: null,
    tabBarVisible: false
    }
    // constructor(props){
    //     super(props)
    //       this.state = {
    //       loggedIn: false
    //       }
    // }   

    onSlidesCompleteCircle() {
        this.props.navigation.navigate("Home")
    }
    onSlidesCompleteLogin() {
        this.props.navigation.navigate("Login")
    }
    onSlidesCompleteSignUp() {
        this.props.navigation.navigate("SignUp")
    }
    render() {
        return (
        <Slides data={SLIDES_DATA} 
        onCompleteCircle={this.onSlidesCompleteCircle.bind(this)}
        onCompleteLogin={this.onSlidesCompleteLogin.bind(this)}
        onCompleteSignUp={this.onSlidesCompleteSignUp.bind(this)}
        />
        );
    }
}

const MainNavigator  = StackNavigator({
    Welcome: { screen: WelcomeScreen , navigationOptions: {tabBarVisible: false}},
    Login : { screen: LoginScreen, navigationOptions: {tabBarVisible: false} },
    SignUp : { screen: SignupScreen, navigationOptions: {tabBarVisible: false} }
  });
  
  const MainNav = TabNavigator({
    Main: {screen : MainNavigator , navigationOptions: {tabBarVisible: false} },
    // Home: {screen: Circle , navigationOptions: {tabBarVisible: false} }
    // Home: {screen: HomeScreen , navigationOptions: {tabBarVisible: false} }
    
  },
  //   {tabBarVisible: false}
)
const Draw = DrawerNavigator({
    // Map: {screen : MainNav , navigationOptions: {tabBarVisible: false} },
    Home: {screen: HomeScreen , navigationOptions: {tabBarVisible: false} }
})

export default (WelcomeScreen, Draw);