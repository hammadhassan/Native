import React, { Component } from "react";
import HomeScreen from "./HomeScreen.js";
import MainScreenNavigator from "../ChatScreen/index.js";
import Profile from "../ProfileScreen/index.js";
import SideBar from "../SideBar/SideBar.js";
import { DrawerNavigator } from "react-navigation";
import Location from "../Map/Location";
import YourCircles from "../Map/YourCircles";
import Invite from "../Map/Invite";
import Join from "../Map/Join";
import Member from "../Map/Member";
import AddCircle from "../Map/AddCircle";

const HomeScreenRouter = DrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Circles: { screen: MainScreenNavigator },
    AddCircle: { screen: AddCircle },
    Location: { screen: Location},
    // YourCircle: { screen: YourCircles },
    // Invite: { screen: Invite },
    // Join: { screen: Join},
    Member: { screen: Member},
    // MembersMap: { screen: MembersMap}
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);

export default HomeScreenRouter;