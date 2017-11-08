// //import liraries
// import React, { Component } from 'react';
// import { View, Text, StyleSheet, Button, TextInput, keyboardType, window } from 'react-native';
// import firebase from "firebase";
// // create a component
// class Msg extends Component {
//     constructor(props) {
//         super(props) 
//         this.state = {
//             number: ""
//         }
//     }

// sendMsg() {
//     // var window = Window;
//     firebase.auth().languageCode = 'it';
//     // To apply the default browser preference instead of explicitly setting it.
//     // firebase.auth().useDeviceLanguage();
//     window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
//         'size': 'normal',
//         'callback': function(response) {
//           // reCAPTCHA solved, allow signInWithPhoneNumber.
//           // ...
//         },
//         'expired-callback': function() {
//           // Response expired. Ask user to solve reCAPTCHA again.
//           // ...
//         }
//       });
//     var recaptchaResponse = grecaptcha.getResponse(window.recaptchaWidgetId);

//     var phoneNumber = this.setState({
//         number: number
//     });
//     alert(number);
//     var appVerifier = window.recaptchaVerifier;
//     firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
//         .then(function (confirmationResult) {
//           // SMS sent. Prompt user to type the code from the message, then sign the
//           // user in with confirmationResult.confirm(code).
//           window.confirmationResult = confirmationResult;
//         }).catch(function (error) {
//           // Error; SMS not sent
//           // ...
//         });

// //     const messaging = firebase.messaging();
// //     messaging.requestPermission()
// //     .then(function() {
// //       alert('Notification permission granted.');
// //       // TODO(developer): Retrieve an Instance ID token for use with FCM.
// //       // ...
// //     })
// //     .catch(function(err) {
// //       alert('Unable to get permission to notify.', err);
// //     });
// //     messaging.getToken()
// //     .then(function(currentToken) {
// //       if (currentToken) {
// //         sendTokenToServer(currentToken);
// //         updateUIForPushEnabled(currentToken);
// //       } else {
// //         // Show permission request.
// //         alert('No Instance ID token available. Request permission to generate one.');
// //         // Show permission UI.
// //         updateUIForPushPermissionRequired();
// //         setTokenSentToServer(false);
// //       }
// //     })
// //     .catch(function(err) {
// //         alert('An error occurred while retrieving token. ', err);
// //       showToken('Error retrieving Instance ID token. ', err);
// //       setTokenSentToServer(false);
// //     });
// //   }

// // componentDidMount() {
// //   messaging.onTokenRefresh(function() {
// //     messaging.getToken()
// //     .then(function(refreshedToken) {
// //       console.log('Token refreshed.');
// //       // Indicate that the new Instance ID token has not yet been sent to the
// //       // app server.
// //       setTokenSentToServer(false);
// //       // Send Instance ID token to app server.
// //       sendTokenToServer(refreshedToken);
// //       // ...
// //     })
// //     .catch(function(err) {
// //       console.log('Unable to retrieve refreshed token ', err);
// //       showToken('Unable to retrieve refreshed token ', err);
// //     });
// //   });
// }
//     render() {
//         return (
//             <View style={styles.container}>

//                 <Text>Msg</Text>
//                 <TextInput
//                 value={this.state.number}
//                 onChangeText={number => { this.setState({ number }) }}
//                 /* onChangeText={(text) => { this.setState({ name: text }) }} */
//                 keyboardType="numeric"
//                 ></TextInput>
//                 <Button onPress={this.sendMsg.bind(this)}
//                 title="Send msg"
//                 />
//             </View>
//         );
//     }
// }

// // define your styles
// const styles = StyleSheet.create({
//     container: {
//         // flex: 1,
//         // justifyContent: 'center',
//         // alignItems: 'center',
//         // backgroundColor: '#2c3e50',
//     },
// });

// //make this component available to the app
// export default Msg;
