// import React, { Component } from 'react';
// import { View, Text, StyleSheet, Dimensions } from 'react-native';
// import MapView from "react-native-maps";
// import { DrawerNavigator }from "react-navigation"
// import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
// import { Drawer } from 'native-base';
// import Family from '../Map/Family';
// import firebase from "firebase";
// // import {icon } from "react-native-vector-icons";

// class Circle extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       marker1: true,
//       location: {
//         latitude: 24.882830499999997,
//         longitude: 67.0680423,
//         latitudeDelta: 0.0002,
//         longitudeDelta: 0.0021,
//       },
//       markers: []
//       // lat: null,
//       // long: null,
//   }
// }

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
//   // alert(DataArr);
// };
// // componentDidMount() {
// // };
// componentWillMount() {
//   this.usersData.bind(this);
//   // alert(usersData)
//     console.disableYellowBox = true
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         this.setState({
//           latitude: position.coords.latitude,
//           longitude: position.coords.longitude,
//           error: null,
//         });
//         // alert(this.state.location.latitude)
//         // alert(this.state.location.longitude)
//       },
//       (error) => this.setState({ error: error.message }),
//       { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
//     );
//   }

//   saveLocation() {
//     var DataArr = [];
//   let dbRef = firebase.database().ref("Location");
//   dbRef.on("child_added", snap => {
//     DataArr = this.state.Data;
//     DataArr.push(snap.val());
//     this.setState({
//       markers: DataArr
//     });
//   });
// }

// /*
//   latitude: 24.8841584,
//   longitude: 67.1379614,
//   latitudeDelta: 0.0002,
//   longitudeDelta: 0.0021,*/

//   // onRegionChange(region) {
//   //   this.setState({ region });
//   // }
// /* initialRegion={this.state.region}
//             mapType="standard"
//             showsMyLocationButton
//             followsUserLocation={true}
//             showsUserLocation={true}
//             // showsCompass
//             moveOnMarkerPress
//             onRegionChange={this.onRegionChange}
//             toolbarEnabled */
//     logout() {
//             firebase.auth().signOut().then( () => {
//             // Sign-out successful.
//             this.props.navigation.navigate("Welcome");
//             }).catch(function(error) {
//             // An error happened.
//             });
//         }
//     closeDrawer() {
//       this.drawer._root.close();
//     }
//     openDrawer() {
//       this.drawer._root.open();
//     }
//     // onRegionChange(location) {
//     //   this.setState({ location });
//     // }
//     // onRegionChange={this.onRegionChange}
//   render() {
//     // closeDrawer = () => {
//     //   this.drawer._root.close()
//     // };
//     return (
//       <Drawer
//       ref={(ref) => { this.drawer = ref; }}
//       content={<Family navigator={this.navigator} />}
//       onClose={() => this.closeDrawer.bind(this)} >
//       <Container>
//       <Header>
//         <Left>
//           <Button transparent>
//             <Icon name='menu' />
            
//           </Button>
//         </Left>
//         <Body>
//           <Title>Family Trakcer</Title>
//         </Body>
//         <Right>
//           <Button transparent
//           onPress={this.saveLocation.bind(this)}
//           >
//             <Icon name='log-out' />
//           </Button>
//         </Right>
//       </Header>
//       <View style={styles.container}>
//       <Button transparent
//             onPress={this.saveLocation.bind(this)}>
//             <Icon name='menu' />
//             </Button>
//           <MapView style={styles.map}
//             region={this.state.location}
//             mapType="standard"
//             showsMyLocationButton
//             followsUserLocation={true}
//             showsUserLocation={true}
//             showsCompass
//             moveOnMarkerPress
//             toolbarEnabled
//             >
//             {this.state.markers.map((marker, index) => (
//           <MapView.Marker 
//             key={marker.key}
//             /* onPress={() => {
//               const marker = this.state.markers[index]
//               // marker.marker1 = !marker.marker1
//               this.setState({ markers: [
//                   ...this.state.markers.slice(0, index),
//                   marker,
//                   ...this.state.markers.slice(index + 1)
//               ]})}
//             } */
//             coordinate={marker.coordinate}         
//             /* image={marker.marker1 ? flagBlueImg : flagPinkImg} */
//             />
//             ))}
//             </MapView>
//       </View>
//     </Container>
//     </Drawer>    
//     );
//   }
// }



// const styles = StyleSheet.create({
//   container: {
//     // ...StyleSheet.absoluteFillObject,
//     height: 400,
//     width: 400,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   // map: {
//   //   ...StyleSheet.absoluteFillObject,
//   // },
//   map: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     width: Dimensions.get('window').width,
//     height: Dimensions.get('window').height
//   },
// });

// /* {this.state.markers.map(marker => (
//             <MapView.Marker 
//               coordinate={marker.latlng}
//               title={marker.title}
//               description={marker.description}
//             /> */
// const HomeScreenRouter = DrawerNavigator(
//   {
//     Home: { screen: Circle },
//     // Chat: { screen: MainScreenNavigator },
//     // Profile: { screen: Profile }
//   })

// export default (Circle, HomeScreenRouter);
