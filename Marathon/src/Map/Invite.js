// import React, { Component } from 'react';
// import { View, StyleSheet, ToastAndroid, Dimensions } from 'react-native';
// import {
//   Button,
//   Text,
//   Container,
//   Card,
//   CardItem,
//   Body,
//   Content,
//   Header,
//   Left,
//   Right,
//   Icon,
//   Title,
//   Input,
//   InputGroup,
//   List, ListItem, Separator,
//   Tab,
//   Tabs,
//   Footer,
//   FooterTab,
//   Label,
//   Item
// } from "native-base";
// import * as firebase from 'firebase';

// class Invite extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       members: [],
//       joinKey: '',
//       code: '', 
//       loading: true,
//     };
//   }

//   getJoinCode() {
//     	console.disableYellowBox = true
//       	const { joinKey, code } = this.state;
//         // console.log("getCode")
//     	 let array = [];
//     	 firebase.database().ref('Circles/').on('child_added' ,(snap) => {
//           var obj = snap.val();
//           for (var a in obj) {
//           array.push(obj[a].joinKey)
//           }
//           obj.circleID = snap.key;
//           // this.setState({
//           //   joinKey: snap.key,
//           // })
//         // })
//         // console.log(this.state.joinKey);
//         let joinKey = snap.key.slice(snap.key.length - 5)
//         this.setState({
//           joinKey
//         })
        
//         // console.log(joinKey);
//         // const arr = [];
//         // this.state.member.map((v, i) => {
//         //     firebase.database().ref('familyTracker/' + v).on('value', (snap) => {
//         //         const keys = snap.val()
//         //         arr.push(snap.val())
//         //         this.setState({
//         //             member: arr,
//         //             loading: false,
//         //         })
//         //     })
//         });
//     }

//   render() {
//     // const { navigate } = this.props.navigation;
//     const { members } = this.state;
//     return (
//       <Container>
//         <Header>
//           <Left>
//             <Button
//               transparent
//               onPress={() => this.props.navigation.navigate("DrawerOpen")}
//             >
//               <Icon name="menu" />
//             </Button>
//           </Left>
//           <Body style={{flex: 1}}>
//             <Title>Invites</Title>
//           </Body>
//           <Right />
//         </Header>
//         <Content padder>
//           <Item floatingLabel style={{ marginTop: 20 }}>
//             <Label>Invite Code</Label>
//             <Text>
//               {this.state.joinKey}
//             </Text>
//           </Item>
//           <Button
//             style={{ marginTop: 20, alignSelf: "center" }}
//             onPress={this.getJoinCode()}
//             >
//             <Text>Get Key</Text>
//           </Button>
//         </Content>
//       </Container>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

// export default Invite;