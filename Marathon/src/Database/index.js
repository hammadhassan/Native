import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import firebase from "firebase";

class Database extends Component {
    
        static setUserLocation(userId, lat, lng, timestamp) {
          console.log("sending new user location");
          let userLocationPath = "/user/" + userId + "/location";
      
          return firebase.database.ref(userLocationPath).set({
            lat: lat,
            lng: lng,
            timestamp: timestamp
          });
        }
      
        static setUserTwitterName(userId, twitterUsername) {
          let userLocationPath = "/user/" + userId;
      
          // We have to set it as a hash, as otherwise it sets the string as an array
          return firebase.database.ref(userLocationPath).set({
            twitterUsername: twitterUsername
          });
        }
      
        static hideUser(userId) {
          let userLocationPath = "/user/" + userId + "/location";
      
          firebase.database.ref(userLocationPath).remove();
        }
      
        static stopListening() {
          if (this._usersRef) {
            console.log("unsubscribing from changes");
            this._usersRef.off();
            this._usersRef = null;
          }
        }
      
        static getUser(userId, callback) {
          let userLocationRef = firebase.database.ref("/user/" + userId);
          userLocationRef.once("value").then(function(snapshot) {
            let snap = snapshot.val();
            callback(snap);
          });
        }
      
        static listenToUsers(callback) {
          start = new Date();
          console.log("subscribing to changes");
          if (this._usersRef == null) {
            this._usersRef = firebase.database.ref("/user/");
          }
      
          let usrRef = this._usersRef;
          // Get a list of all existing users
          usrRef.once("value").then(function(snapshot) {
            let snap = snapshot.val();
            for (var userId in snap) {
              var data = snap[userId];
              let userLocation = data.location;
              if (userLocation) {
                callback(
                  userId,
                  userLocation.lat,
                  userLocation.lng,
                  userLocation.timestamp,
                  data.twitterUsername,
                  false // shouldSetState
                );
              }
            }
            // to setState and re-render
            callback(userId, null, null, null, null, true);
      
            console.log("Launch up time: " + (new Date() - start));
      
            // and from now on: listen to new users
            usrRef.on("child_changed", function(data) {
              console.log("Child changed");
              let userId = data.key;
              let userLocation = data.val().location;
              if (userLocation) {
                callback(
                  userId,
                  userLocation.lat,
                  userLocation.lng,
                  userLocation.timestamp,
                  data.val().twitterUsername,
                  true // shouldSetState
                );
              } else {
                // This happens when the user stopped sharing their location
                callback(userId, null, null, null, null, true);
              }
            });
          });
        }


    render() {
        return (
            <View style={styles.container}>
                <Text>Database</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
});

export default Database;