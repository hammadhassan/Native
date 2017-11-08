import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Slides from "./Slides";
import { TabNavigator, StackNavigator, } from 'react-navigation';
import LoginScreen from "./Login";
// import WelcomeScreen from "./WelcomeScreen";
import SignupScreen from "./SignUp";
import * as firebase from 'firebase';
import Review from "./Review"
import GetDirection from "./GetDirection";
import Location2 from "./Location2";

const SLIDES_DATA = [
    { text: "Welcome to Tourist Guide App" , color: '#03A9F4' },
    { text: "Let me show you how it's work" , color: '#009688' },
    { text: "Set you Location, then swipe away" , color: '#03A9F4' }
];

class WelcomeScreen extends Component {
   static navigationOptions = {
    header: null,
    tabBarVisible: false
    }
    constructor(props){
        super(props)
          this.state = {
          loggedIn: false
          }
    }   
    checkAuthantication() {
        firebase.auth().onAuthStateChanged((user) => {
        this.setState({ loggedIn: true })
        })
        this.setState({ loggedIn: false })
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
  
  const MapNav = TabNavigator({
    Main: {screen : MainNavigator , navigationOptions: {tabBarVisible: false} },
    NearBy: { screen: Location2 },
    Map : {screen: GetDirection }
  })

export default (WelcomeScreen, MapNav);