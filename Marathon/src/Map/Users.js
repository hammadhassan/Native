import React, { Component } from 'react';
import {StyleSheet } from 'react-native';
import { AppRegistry, View, StatusBar, TouchableOpacity } from "react-native";
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
  Spinner,
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
  Label
} from "native-base";
import HomeScreen from "../HomeScreen";
import {Actions} from 'react-native-router-flux';
import * as firebase from 'firebase' ;
import Invite from "./Invite"

export default class Users extends Component {
    constructor(props) {
        super(props)
        this.state = {
        circlesList: [],
        circles: [],
        loading: true
      };
    }

  //   openUser() {
  //     let currentUser = firebase.auth().currentUser.uid;
  //     firebase.database().ref('Circles/' + currentUser + '/').on('value', (data) => {
  //       let obj = data.val();
  //       obj.groupId = data.key;
  //       alert(data);
  //       alert(currentUser);
  //       // dispatch(SeletedGroupData(obj));
  //       // if (obj.Admin === currentUser) {
  //       //     Actions.adminright();
  //       // } else {
  //       //     Actions.groupJoin()
  //       // }
  //   })
  // }

componentWillMount() {
    // var circles = [];
    firebase.database().ref('Circles/').on('child_added' ,(snap) => {
      let obj = snap.val();
      var circlesList = this.state.circlesList;
      circlesList.push(obj);
      this.setState({
        circlesList,
        loading: false
      });
      this.checkUser();
    });
    this.setState({
        loading: false
    })
  }

  checkUser() {
    var circles = [];
    let admin = firebase.auth().currentUser.uid;
    this.state.circlesList.map((memberKey , i) => {
            // console.log(memkey);
        // var m = memkey.member.indexOf(admin) ;
        if( memberKey === -1 ) {
            // console.log("Not a Member")
        } else {
            // console.log('you are a member', memkey)
            circles.push(memberKey) ;
            this.setState({
                circles
            })
        }
    })
  }

  onClick() {
    this.props.navigation.navigate("Invite");
  }

  render() {
    const { navigate } = this.props.navigation;
    // const {Circle} = this.props;
    // alert(Circle)
    // let AllGroups = Object.keys(this.props.Group).map((key, index) => {
    // let val = this.props.Group[key];
    // let GroupId = key;
    const { circles } = this.state ;
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
            <Title>Your Circle</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          {this.state.circlesList.map((value, i) => {
            return <List style={styles.list} key={i}>
              <ListItem avatar>
              <Left>
              <Icon name="md-people" />
              </Left>
              <Body>
              <Text style={styles.text}>Circle Name: {value.name}</Text>
              </Body>
              <Right>
              <Button onPress={this.onClick.bind(this)}>
              <Icon name="add" />
              </Button>
              </Right>
              </ListItem>
            </List>
          })}
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    container: {
    backgroundColor: "white"
    },
    list: {
      borderWidth: 1
    },
    text: {
      // marginRight: 20
    },
  })

//   /*
// <Container>
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
//             <Title>{this.state.Data.name}</Title>
//             <Title>Your Circle</Title>
//           </Body>
//           <Right />
//         </Header>
//         <Content>
//         {this.state.Data.map((value, i) => {
//             return <List style={styles.list} key={i}>
//               <ListItem avatar>
//               <Left>
//               <Icon name="md-people" />
//               </Left>
//               <Body>
//               <Text style={styles.text}>Circle Name: {value.Circle.name}</Text>
//               </Body>
//               <Right>
//               <Icon name="settings" />
//               <Button onPress={this.openUser.bind(this, GroupId)} bordered >
//               <Text>
//                   Open
//               </Text>
//             </Button>
//             </Right>
//             </ListItem>
//           </List>
//         })}
//       </Content>
//     </Container>
//     <Button onPress={this.openUser.bind(this, currentUser)} bordered >
//                 <Text>
//                     Open
//                 </Text>
//               </Button>
//   */