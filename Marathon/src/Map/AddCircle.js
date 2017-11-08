import React, { Component } from 'react';
import { Alert, ToastAndroid, View, StatusBar, ActivityIndicator } from "react-native";
import { Container, Body, Content, Header, Spinner, Left, Right, Icon, Title, Input, Item, Label, Button, Text } from "native-base";
import HomeScreen from "../HomeScreen";
import * as firebase from 'firebase' ;

export default class AddCircle extends Component {
  constructor(props) {
    super(props)
    this.state = {
        name: '' ,
        loading: false 
    }
}
createCircle() {
  this.setState({loading: true })
  const {name } = this.state ;
  var user = firebase.auth().currentUser.uid;
  var key= firebase.database().ref('Circles/').push().key ;
    var circle = {
          name,
          admin: user,
          circleID: key,
          members: [ user ]
      }
      firebase.database().ref('Circles/' + key).set(circle).then(()=>{
            this.setState({loading: false })
            ToastAndroid.show("Your Circle has been Saved", ToastAndroid.SHORT);
        })
      this.setState({
        name: ""
      })
}
  render() {
    const { navigate } = this.props.navigation;
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
            <Title>Add Circle</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Item floatingLabel style={{ marginTop: 20 }}>
            <Label>Circle Name</Label>
            <Input 
            value={this.state.name}
            onChangeText={name => { this.setState({ name }) }}
            />
          </Item>
          <Button
            style={{ marginTop: 20, alignSelf: "center" }}
            onPress={this.createCircle.bind(this)}>
            <Text>Save Your Circle</Text>
          </Button>
          { this.state.loading ? <ActivityIndicator size="large" /> : <Text /> }
        </Content>
      </Container>
    );
  }
}