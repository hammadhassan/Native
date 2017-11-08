// import React, { Component } from 'react';
// import {  ListView, Text, View, Button, TextInput, Form} from 'react-native';
// import data from "./demoData";

// class ListViews extends Component {
//     constructor(props) {
//         super(props)
//         const ds = new ListView.DataSource({
//             rowHasChanged: (r1, r2) => r1 != r2
//         })
//         // const Patients = ["patient", "patients"]
//         this.state = {
//         //     "patient": [
//         //     name = "Hammad",
//         //     gender = "Male",
//         //     age = 24,
//         //     problem = "Floaters",
//         //     doctor = "Esha",
//         //     day = "Thursday"
//         // ],
//         data,
//         // DataSource: this.ds.cloneWithRows()
//         dataSource: ds.cloneWithRows(['row 1', 'row 2']),
//         }
//     }
//     render() {
//         return (
//             <ListView 
//             dataSource={this.state.dataSource}
//             renderRow={(data) => <View {...data} ></View>}
//             renderSeparator={(sectionId, rowId) => <View key={rowId} />}
//             >
//             {/* <Text>
//                     {this.state.Patients}
//             </Text>     */}
//             </ListView>
//         );
//     }
// }

// export default ListViews;

// import React, { Component } from 'react';
// import {StyleSheet, Text, Button, TextInput, Form} from 'react-native';
// import {Drawer, View} from "native-base";
// import { Navigator } from 'react-native-deprecated-custom-components';
// import NavigationExperimental from 'react-native-deprecated-custom-components';
// import { StackNavigator } from 'react-navigation';
// import SideMenu from "./sideMenu";

// export default class Home extends Component {
//   constructor(props) {
//     super(props)
    // this.state = {
    //   toggled: false,
    //   store: {},
    //   theme: null
    // }
//   }
//   toggleDrawer() {
//     this.state.toggled ? this._drawer.close() : this._drawer.open()
//   }
//   openDrawer() {
//     this.setState({toggled: true})
//   }
//   closeDrawer() {
//     this.setState({toggled: false})
//   }
//   renderScene(route, navigator) {
//     switch(route) {
//       default: {
//         return null
//       }
//     }
//   }
//   configureScene(route, routeStack) {
//     return Navigator.SceneConfigs.PushFromRight
//   }
//   render() {
//     return (
//       <Drawer
//         ref={(ref) => this._drawer = ref}
//         type="displace"
//         content={<SideMenu navigator={this._navigator} theme={this.state.theme} />}
//         onClose={this.closeDrawer.bind(this)}
//         onOpen={this.openDrawer.bind(this)}
//         openDrawerOffset={0.2}
//         >
//           <Navigator
//             ref={(ref) => this._navigator = ref}
//             configureScene={this.configureScene.bind(this)}
//             renderScene={this.renderScene.bind(this)}
//             />
//         </Drawer>
//     )
//   }
// }