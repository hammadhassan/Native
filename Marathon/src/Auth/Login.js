import React, { Component } from 'react';
import { StyleSheet, View, Text, ActivityIndicator, AsyncStorage, Alert, ToastAndroid } from 'react-native';
import * as firebase from 'firebase';
import {FormLabel, Button, FormInput, FormValidationMessage } from 'react-native-elements';
// import { Button } from "native-base";

export default class LoginScreen extends Component {

static navigationOptions = {
    title: 'Login',
    // headerRight: <Button title="Logout" onPress={ () => this.logout()} />,
    // headerLeft: false,
    // header: { visible: false }
    // header: null
    // header: {
    //     style: {
    //     alignItems: 'center',
    //  },
 // }
    // header: ({ navigate }) => ({
    //   visible: true,
    //   title: 'Discussion',
    //   left: (
    //     <Button onPress={() => navigate('PageTwo')} >Prev</Button>
    //   ),
    //   right: (
    //     <Button onPress={() => navigate('PageThree')} >Next</Button>
    //   ),
    //   style: {
    //     paddingLeft: 5,
    //     paddingRight: 0,
    //     backgroundColor: '#000',
    //   },
    //   tintColor: '#ffffff'
    // })
  };
    constructor(props) {
        super(props)
        this.state = {
        email: 'hammad@gmail.com',
        password: '123456',
        error: '',
        isLoading: false
    }
    this.logout = this.logout.bind(this)
}

    // componentWillMount() {
    //     console.disableYellowBox = true
    // //    AsyncStorage.setItem("userid","")
    //     this.checkstorage()
    // }
    
    // checkstorage() {
    //     AsyncStorage.getItem("userid").then((respon) => {
    //      userUid = respon    
    //        if (userUid !== null){
    //         this.props.navigation.navigate("Home") 
    //         }
    //     })
    // }

    navig(){
        this.props.navigation.navigate('MenuRoute')
    }

    Login() {
        const { email, password } = this.state;
        this.setState({ 
            error: '',
            isLoading: true
        });

    firebase.auth().signInWithEmailAndPassword(email, password)
    // Handle respnse here
    .then((responce) => {
        const uid = responce.uid
        
        this.nowLoginSuccess(),
        ToastAndroid.show('Login', ToastAndroid.BOTTOM, 25, 50);
       this.props.navigation.navigate("Home") 
    })
    // Handle Errors here.
    .catch((error) => {
        var errorMessage = error.message;
        alert(errorMessage);
        this.setState({
            error: errorMessage,
            isLoading: false
        });
    });
    // this.props.navigation.navigate("NearBy");
}

logout() {
        firebase.auth().signOut().then( () => {
        ToastAndroid.show('Logout', ToastAndroid.SHORT);
        // Sign-out successful.
        this.props.navigation.navigate("Welcome");
        }).catch(function(error) {
        // An error happened.
        });
    }

    nowLoginSuccess() {
        // alert("Login");
        this.setState({
            email: '',
            password: '',
            isLoading: false
        })
    };

    renderButtonAndLoader() {
        if (this.state.isLoading) {
            return <ActivityIndicator size="large" />
        }
        return (
            <Button 
            onPress={this.Login.bind(this)}
            title="Login"
            raised
            backgroundColor= "#009688"
            fontSize={24}
            //borderRadius= {5}
            fontWeight="bold"
            // buttonStyle={{flex: 1}}
            />
        )
    }

    errorMessage() {
        if (this.state.email === "") {
            return <FormValidationMessage>
            {'This field is required'}
            </FormValidationMessage>
        }
    }

    render() {
        return (
            <View>
                    <FormLabel h3>
                        Email:
                    </FormLabel>
                        <FormInput 
                            value={this.state.email}
                            onChangeText={email => { this.setState({ email }) }}
                            placeholder="Please enter your Email"
                        />
                    <FormValidationMessage>
                        {'This field is required'}
                    </FormValidationMessage>    
                    <FormLabel h3>
                        Password:
                    </FormLabel>
                        <FormInput
                            secureTextEntry={true}
                            placeholder="Please enter your Password"
                            value={this.state.password}
                            onChangeText={password => { this.setState({ password }) }}
                        />
                        <FormValidationMessage>
                            {'This field is required'}
                        </FormValidationMessage>
                    <FormLabel>
                        <Text style={styles.errorStyle}>
                           {this.state.error}
                        </Text>
                    </FormLabel>
                        {this.renderButtonAndLoader()}
            </View>
        )
    }
}


const styles = StyleSheet.create({
    errorStyle : {
    color: 'red'
    },
    login: {
    backgroundColor: "#03A9F4",
    fontSize: 24,
    borderRadius: 5
    },
    // button: {
    //     alignItems: "center",
    //     justifyContent: "center",
    //     fontWeight: "bold",
    //     color: "white",
    //     flex: 1
    //   },
});

/*
// AsyncStorage.setItem("userid", uid, JSON.stringify(responce), (error, result) => {
        //     if (error) {
        //         alert("error", error)
        //     } else {
        //         AsyncStorage.getItem("userid", (error, result) => {
        //             if (result) {
        //                 alert(result)
        //                 result = JSON.parse(result);
        //                 ToastAndroid.show('Thanks for Login', ToastAndroid.SHORT);
        //                 this.nowLoginSuccess(),
        //                 this.props.navigation.navigate("Home") 
        //             } else {
        //                 alert(error)
        //             }
        //         })
        //     }
        // });
        AsyncStorage.setItem("useruid", uid)
        .then(() => {
            this.nowLoginSuccess(),
            ToastAndroid.show('Login', ToastAndroid.BOTTOM, 25, 50);
               this.props.navigation.navigate("Home") 
        })
    })
        //     .then(() => {
        //     })
*/