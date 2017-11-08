import React, { Component } from 'react';
import { View, StyleSheet, ToastAndroid, Dimensions } from 'react-native';
import {
  Button,
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Left,
  Right,
  Icon,
  Title,
  Input,
  InputGroup,
  List, ListItem, Separator,
  Tab,
  Tabs,
  Footer,
  FooterTab,
  Label,
  Item
} from "native-base";
import * as firebase from 'firebase';

class Invite extends React.Component {
  constructor() {
    super();
    this.state = {
      members: [],
      joinKey: '',
      circleID: [], 
      obj: [],
      loading: true,
    };
  }

// componrntWillMount() {
// 		this.setState({
//             joinKey: this.props.circleID
//        });
  //       alert(joinKey);
		// console.disableYellowBox = true
		// const arr = [];
  //       this.state.members.map((v, i) => {
  //           firebase.database().ref('familyTracker/' + v).on('value', (snap) => {
  //               const keys = snap.val();
  //               arr.push(snap.val());
  //               this.setState({
  //                   members: arr,
  //                   loading: false,
  //               });
  //           });
  //       });
//}

  componentWillMount() {
    console.disableYellowBox = true
    const { obj } = this.state;
    firebase.database().ref("Circles/").on("child_added" , (snap) => {
      var obj = snap.val();
      this.setState({
        obj
      })
      // console.log(obj);
      // console.log(obj.circleID);
      let joinkey = obj.circleID;
      // joinkey.slice(joinkey.length - 5);
      // obj.joinKey = snap.circleID;
      console.log(joinkey);
    })
}

  getJoinCode() {
      	const { joinKey, obj } = this.state;
      	// this.setState({
       //      joinKey: obj.circleID
       //  });
       //  console.log(joinKey)
     //    alert(joinKey);
    // 	 let array = [];
    // 	 // let db = firebase.database(); 
    // 	  firebase.database().ref('Circles/').on('child_added' ,(snap) => {
    //       let obj = snap.val();
    //       // for (var a in obj) {
    //       // array.push(obj[a].joinKey)
    //       // }
    //       // array = this.state.joinKey;
    //       // array.push(snap.val());
    //       obj.circleID = snap.key;
    //       this.setState({
    //         joinKey: snap.key,
    //       })
    //     // })
    //     // console.log(this.state.joinKey);
    //     // });
    //     let joinkey = joinKey.slice(joinKey.length - 5)
    //     this.setState({
    //       joinkey: joinKey
    //     })
    // });
        // alert(joinKey);
        // console.log(joinKey);
        // let code = this.state.joinKey;
        // let joinkey = code.slice(code.length - 5)
        // this.setState({
        //   joinkey: joinKey
        // })
    }

  render() {
    const { navigate } = this.props.navigation;
    const { members } = this.state;
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body style={{flex: 1}}>
            <Title>Invites</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Item floatingLabel style={{ marginTop: 20 }}>
            <Label>Invite Code</Label>
            <Text>
              {this.state.joinKey}
            </Text>
          </Item>
          <Button
            style={{ marginTop: 20, alignSelf: "center" }}
            onPress={this.getJoinCode()}
            >
            <Text>Get Key</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default Invite;