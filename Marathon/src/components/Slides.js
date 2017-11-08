import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get("window").width;

class Slides extends Component {
    renderLastSlides(index) {
        if (index === this.props.data.length -1) {
            return (
                <View>
                {/* <Button 
                title="Your Circle"
                buttonStyle={styles.buttonStyle}
                onPress={this.props.onCompleteCircle}
                ></Button> */}
                <Button 
                title="Login"
                buttonStyle={styles.buttonStyle}
                onPress={this.props.onCompleteLogin}
                ></Button>
                <Text></Text>
                <Button 
                title="SignUp"
                buttonStyle={styles.buttonStyle}
                onPress={this.props.onCompleteSignUp}
                >
                </Button>
                </View>
            );
        }
    }

    renderSlides() {
        return this.props.data.map((slide, index) => {
            return (
                <View 
                key={slide.text}
                style={[styles.slideStyles, {backgroundColor: slide.color}]}
                >
                <Text style={styles.slideText}>{slide.text}</Text>
                {this.renderLastSlides(index)}
                </View>
            );
        }); 
    }
    
    
    render () {
        return (
            <ScrollView
            horizontal={true}
            style={{ flex: 1}}
            pagingEnabled
            >
            {this.renderSlides()}
            </ScrollView>    
        );
    }
}

const styles = StyleSheet.create({
    slideStyles: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: SCREEN_WIDTH,
        // alignSelf: "center"
    },
    slideText: {
        fontSize: 30,
        color: "white",
        // justifyContent: "center",
        // alignItems: "center",
    },
    buttonStyle: {
        backgroundColor: "#0288D1",
        marginTop: 20
    },
})

export default Slides;