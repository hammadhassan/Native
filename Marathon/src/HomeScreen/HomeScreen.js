import React, { Component } from 'react';
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { DeviceEventEmitter, StatusBar } from "react-native";
import { RNLocation as Location } from "NativeModules";
import { View, StyleSheet, Dimensions } from 'react-native';
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem } from "native-base";
import firebase from "firebase";

import {
  Image,
  ActionSheetIOS,
  Linking,
  Modal,
  WebView,
  AsyncStorage,
  Alert,
  AlertIOS
} from "react-native";

let locationTracker = null;

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 24.813509;
const LONGITUDE = 67.048319;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      region: {
        latitude: 24.882830499999997,
        longitude: 67.0680423,
        latitudeDelta: 0.0002,
        longitudeDelta: 0.0021,
        radius: 200
      },
      regions: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      latitude: LATITUDE ,
      longitude: LONGITUDE,
      // markers: [{
      //   title: 'Mark I',
      //   coordinates: {
      //     latitude: 24.88283,
      //     longitude: 67.0680423
      //   },
      // }, {
      //   title: 'Mark II',
      //   coordinates: {
      //     latitude: 24.882642,
      //     longitude: 67.067921
      //   },  
      // }]
      markers: []
    }
  }

// usersData() {
//   var DataArr = [];
//   let dbRef = firebase.database().ref("Location");
//   dbRef.on("child_added", snap => {
//     DataArr = this.state.Data;
//     DataArr.push(snap.val());
//     this.setState({
//       markers: DataArr
//     });
//   });
  // alert(DataArr);
// };

componentWillMount() {
  // this.usersData.bind(this);
  // alert(usersData)
    console.disableYellowBox = true
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
        // firebase.database().ref('familyTracker/'+ firebase.auth().currentUser.uid ).update({latitude,longitude})
        // this.setState({
        //   markers: {
        //     latitude,
        //     longitude,
        //     latitudeDelta: 0.0002,
        //     longitudeDelta: 0.0021,
        //   },
        //   latitude,
        //   longitude,
        // });
        // alert(this.state.location.latitude)
        // alert(this.state.location.longitude)
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }

componentDidMount() {
  var Markers = [];
  let dbRef = firebase.database().ref("Locations/");
  dbRef.on("child_added", snap => {
    Markers = this.state.markers;
    Markers.push(snap.val());
    this.setState({
      markers: Markers
    });
    // console.log(markers)
  });
  }

  logout() {
        firebase.auth().signOut().then( () => {
        // Sign-out successful.
        this.props.navigation.navigate("Welcome");
        }).catch(function(error) {
        // An error happened.
        });
    }
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>HomeScreen</Title>
          </Body>
          <Right>
          <Button transparent
          onPress={this.logout.bind(this)}
          >
            <Icon name='log-out' />
          </Button>
        </Right>
        </Header>
        <View style={styles.container}>
      {/* <Button transparent
            onPress={this.saveLocation.bind(this)}>
            <Icon name='users' />
            </Button> */}
          <MapView style={styles.map}
            region={this.state.region}
            /*mapType="standard"
            showsMyLocationButton
            followsUserLocation={true}
            showsUserLocation={true}
            showsCompass
            moveOnMarkerPress
            toolbarEnabled*/
            enableHighAccuracy
            mapType="standard"
            showsMyLocationButton
            followsUserLocation={true}
            showsUserLocation={true}
            showsCompass
            moveOnMarkerPress
            toolbarEnabled
          >
            {this.state.markers.map(marker => (
              <MapView.Marker 
                coordinate={marker.coordinates}
                //title={marker.title}
              />
            ))}
          </MapView>
      </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // ...StyleSheet.absoluteFillObject,
    // height: 400,
    // width: 400,
    // justifyContent: 'flex-end',
    // alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
});

/*
<Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text>Chat App to talk some awesome people!</Text>
              </Body>
            </CardItem>
          </Card>
          <Button full rounded dark
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("Chat")}>
            <Text>Chat With People</Text>
          </Button>
          <Button full rounded primary
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("Profile")}>
            <Text>Goto Profiles</Text>
          </Button>
        </Content>
*/

/*
{this.state.markers.map((marker, index) => (
          <MapView.Marker 
            key={marker.key}
            /* onPress={() => {
              const marker = this.state.markers[index]
              // marker.marker1 = !marker.marker1
              this.setState({ markers: [
                  ...this.state.markers.slice(0, index),
                  marker,
                  ...this.state.markers.slice(index + 1)
              ]})}
            } */
            // coordinate={marker.coordinate}         
            /* image={marker.marker1 ? flagBlueImg : flagPinkImg} */
            // />
            // ))}
// */