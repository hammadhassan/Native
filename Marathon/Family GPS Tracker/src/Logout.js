// import React, { Component } from 'react';
// import { View, Text } from 'react-native';
// import * as firebase from 'firebase';
// import { Spinner } from './common';
// import { Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';

// export default logout extends Component {

// logout() {
//         firebase.auth().signOut().then( () => {
//         // Sign-out successful.
//         this.props.navigation.navigate("Welcome");
//         }).catch(function(error) {
//         // An error happened.
//         });
//     }
//     render() {
//         return (
//         	<Button onPress={this.logout.bind(this)} />
//        )
//     }
// }