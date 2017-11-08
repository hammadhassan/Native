import React, { Component } from 'react';
import { View, StyleSheet, ToastAndroid } from 'react-native';
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
  Item,
  Label
} from "native-base";
import * as firebase from 'firebase';

class Join extends Component {
  constructor() {
      super();
      this.state = {
        keyval: "",
        loading: false,
        circleList: [],
        avalCircle: [],
        message: "",
        joinKey: ""
      };
  }

  componentWillMount() {
    console.disableYellowBox = true
        firebase.database().ref('Circles/').on('child_added' ,(snap) => {
            var obj = snap.val();
            // console.log(obj)
            var circleList = this.state.circleList;
            circleList.push(obj);
            this.setState({
                circleList
            })
        })
    }

      joinCircle() {
        const { keyval, circleList } = this.state;
        this.setState({loading: true })
        // console.log(this.state.keyval);
        var avalCircle = [];
        let admin = firebase.auth().currentUser.uid;
        // firebase.database().ref('circles/').once('value', (data) => {
        //     let obj = data.val();
        //     // obj.keyval = data.key;
        //     console.log("obj", obj)
        //     let nodeKey;
        //     for (var key in obj) {
        //         if (joining.joinKey === key.slice(key.length - 5)) {
        //             loading = true;
        //             nodeKey = key;
        //             firebase.database().ref('Circles/' + nodeKey + '/member/').push(admin)
        //                 .then((members) => {
        //                     ToastAndroid.show('You are added', ToastAndroid.SHORT);
        //                 })
        //         }
        //     }
        //     if (loading == false) {
        //         ToastAndroid.show('Please enter your group key', ToastAndroid.SHORT);
        //     }

            // console.log("nodeKey", nodeKey)
        // })
         this.state.circleList.map( (membkey , i) => {
               // console.log(membkey);
               var m = membkey.key1.indexOf(keyval);
               // console.log(m);
               if( m === -1 ){
                    this.setState({
                        message: 'You enter wrong key' ,
                        loading: false
                    })
               } else {
                   console.log('you are a member', membkey)
                   var check = membkey.member.indexOf(admin);
                   if( check === -1 ){
                       // console.log(membkey)
                      let memberkey= membkey.key1;
                      let memb = membkey.member;
                      memb.push(admin);
                      // console.log(memb)
                      var j = firebase.database().ref('Circles/'+ memberkey)
                            j.update({member: memb})
                            this.setState({
                                message: "You are added",
                                loading: false
                            })
                            this.props.navigation.navigate("Home")    
                } else {
                    this.setState({
                        message: 'You are already a Member',
                        loading: false
                    })
                   }
               }
         })
      }
    render() {
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
            <Label>Join Circle</Label>
            <Input 
            value={this.state.keyval}
            onChangeText={(keyval)=> this.setState({keyval})}
            // placeholder='Type the key in here'
            />
          </Item>
          <Button
            style={{ marginTop: 20, alignSelf: "center" }}
            onPress={this.joinCircle.bind(this)}>
            <Text>Join Circle</Text>
          </Button>
          { this.state.loading ? <Spinner /> : 
            <Text style={{alignSelf: 'center', marginTop: 20, color: 'red' }} >
                {this.state.message}
            </Text> 
          }
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
        backgroundColor: '#2c3e50',
    },
});

export default Join;