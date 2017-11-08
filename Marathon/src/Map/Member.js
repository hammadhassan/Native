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

class Member extends Component {
  constructor() {
      super();
      this.state = {
            member: [],
            groupKey: '',
            random: '', 
            loading: true,
        }
  }

  componentWillMount() {
    console.disableYellowBox = true
        // this.setState({
        //     groupKey: this.state.key1,
        // })
        // console.log(this.props.circleName)
        const arr = [];
        this.state.member.map((v, i) => {
            firebase.database().ref('familyTracker/' + v).on('value', (snap) => {
              this.setState({
              groupKey: this.state.key1,
              })
              console.log(groupKey)
                const keys = snap.val()
                arr.push(snap.val())
                this.setState({
                    member: arr,
                    loading: false,
                })
            })
        });
    }

    joinKey(k) {
      var jK = "-Kwud2cz0_BGMnnJaf2I";
      // var jkL = this.state.groupKey.length;
      // var Key = k + 5 ;
      // var res = jK.slice( k , Key );
      var res = jK.slice(jK.length - 5)
        this.setState({
            random: res
        })
    }

render() {
    const { navigate } = this.props.navigation;
    const { member } = this.state ;
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
            <Title>Members</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          {this.state.member.map((value, i) => {
            return <List style={styles.list} key={i}>
              <ListItem avatar>
              <Icon name="person" />
              <Text>{value.userFullName}</Text>
              </ListItem>
            </List>
          })}
          <Text style={{ fontSize: 23, color: 'black', opacity: .5 ,}} >{this.state.random}</Text>
            <Button
            style={{ marginTop: 20, alignSelf: "center" }}
            onPress={()=> this.joinKey(Math.floor((Math.random() * 10)+ 8))}
            >
            <Text>Generate Key</Text>
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

export default Member;