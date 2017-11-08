import React, { Component } from "react";
import { Image, StatusBar } from "react-native";
import { Container, Content, Text, List, ListItem } from "native-base";
// const routes = ["Home", "AddCircle", "Profile", "Location", "YourCircle"];
// const routes = ["Home", "AddCircle", "YourCircle", "Invite", "Join", "Member", "Location"];
const routes = ["Home", "Circles", "AddCircle", "Location", "Member"];

export default class SideBar extends Component {
  render() {
    return (
      <Container>
        <Content>
          <List
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data)}>
                  <Text>{data}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}