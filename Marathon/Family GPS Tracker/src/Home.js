// import React, { Component } from 'react';
// // import PropTypes from 'prop-types';
// import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native';
// import { TabNavigator, StackNavigator, } from 'react-navigation';
// import LoginScreen from "./Login";
// import WelcomeScreen from "./WelcomeScreen";
// import SignupScreen from "./SignUp";
// import * as firebase from 'firebase';
// import Review from "./Review"
// import GetDirection from "./GetDirection";
// import Location2 from "./Location2";

// class Home extends Component {
// // componentWillMount(){
// //   var config = {
// //     apiKey: "AIzaSyBnzrd-cOrgyo38QSkdzeb3K462L-u-6Ik",
// //     authDomain: "tourist-guide-1502027695550.firebaseapp.com",
// //     databaseURL: "https://tourist-guide-1502027695550.firebaseio.com",
// //     projectId: "tourist-guide-1502027695550",
// //     storageBucket: "",
// //     messagingSenderId: "783117883841"
// //   };
// //   firebase.initializeApp(config);
// // }
//   constructor(props){
//   super(props)
//     this.state = {
//     loggedIn: false
//     }
// }  

//   checkAuthantication() {
//     firebase.auth().onAuthStateChanged((user) => {
//       this.setState({ loggedIn: true })
//     })
//     this.setState({ loggedIn: false })
//   }
//   render() {
//     return (
     
//       <Text></Text>
//     );
//   }
// }

// const MainNavigator  = StackNavigator({
//   Welcome: { screen: WelcomeScreen , navigationOptions: {tabBarVisible: false}},
//   Login : { screen: LoginScreen, navigationOptions: {tabBarVisible: false} },
//   SignUp : { screen: SignupScreen, navigationOptions: {tabBarVisible: false} }
// });

// const MapNav = TabNavigator({
//   Main: {screen : MainNavigator , navigationOptions: {tabBarVisible: false} },
//   NearBy: { screen: Location2 },
//   Map : {screen: GetDirection }
// })
// /*
// const MainNavigator  = TabNavigator({
//   Welcome: { screen: WelcomeScreen , navigationOptions: {tabBarVisible: false}},
//   // Welcome: { screen: WelcomeScreen },
//   NearBy: { screen: Location2 },
//   Main: {
//     screen: StackNavigator({
//       Map : {screen: GetDirection },
//       Login : { screen: LoginScreen, navigationOptions: {tabBarVisible: false} },
//       SignUp : { screen: SignupScreen, navigationOptions: {tabBarVisible: false} },
//     })
//   }, //{
//     // navigationOptions: {
//     // tabBar: { visible: false }
//     // },
//   //},
// });
// */

// const styles = StyleSheet.create({
//   // container: {
//   //  //  flex: 1
//   //   },
//   // favourite: {
//   //   textAlign: 'center',
//   //   color: '#333333',
//   //   marginTop: 50,
//   //   },
// });

// export default (Home, MapNav);