import React, { Component } from "react";
import Invite from "./Invite";
import Join from "./Join";
import YourCircle from "./YourCircle";
import { TabNavigator } from "react-navigation";
import { Button, Text, Icon, Footer, FooterTab } from "native-base";
export default (MainScreenNavigator = TabNavigator(
  {
    Circles: { screen: YourCircle },
    Invite: { screen: Invite },
    Join: { screen: Join }
  },
  {
    tabBarPosition: "bottom",
    tabBarComponent: props => {
      return (
        <Footer>
          <FooterTab>
            <Button
              vertical
              active={props.navigationState.index === 0}
              onPress={() => props.navigation.navigate("Circles")}>
              <Icon name="md-globe" />
              <Text>Circles</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 1}
              onPress={() => props.navigation.navigate("Invite")}>
              <Icon name="md-person-add" />
              <Text>Invite</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 2}
              onPress={() => props.navigation.navigate("Join")}>
              <Icon name="folder-open" />
              <Text>Join</Text>
            </Button>
          </FooterTab>
        </Footer>
      );
    }
  }
));