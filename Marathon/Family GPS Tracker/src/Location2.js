import React, { Component } from 'react';
import { View, Button, FlatList, Image, TouchableOpacity, ScrollView, ActivityIndicator, StyleSheet } from 'react-native'
import MapView from "react-native-maps";
import RNGooglePlaces from 'react-native-google-places';
import axios from 'axios';
import { Spinner } from './common';
// import { Card, ListItem  } from 'react-native-elements'
import { Container, Content, List, ListItem, Text, Separator , Item } from 'native-base';

class Location2 extends Component {
  constructor(props) {
    super(props);
    console.disableYellowBox = true;
    this.state = {
      // location: {
      // latitude: null,
      // longitude: null,
      // latitudeDelta: null,
      // longitudeDelta: null,
    // // },
    //   error: null,
      // latitude: 24.830294039871763,
      // latitudeDelta: 0.0033632258318370134,
      // longitude: 67.04754587262869,
      // longitudeDelta: 0.003080181777,
        // latitude: 24.8841584,
        // longitude: 67.1379614,
        // latitudeDelta: 0.0002,
        // longitudeDelta: 0.0021,
        // latitude: 24.882830499999997,
        // longitude: 67.0680423,
        latitude: 24.882830499999997,
        longitude: 67.0680423,
        latitudeDelta: 0.0002,
        longitudeDelta: 0.0021,
        nearbyPlaces: [],
        isLoading: false
    }
    this.renderList = this.renderList.bind(this)
  }

openSearchModal() {
    RNGooglePlaces.openAutocompleteModal()
      .then((place) => {
        console.log(place);
        this.setState({
          latitude: place.latitude,
          longitude: place.longitude
        })
        // place represents user's selection from the
        // suggestions and it is a simplified Google Place object.
      })
      .catch((error) => console.log(error));
  }

componentWillMount() {
    this.watchId = navigator.geolocation.watchPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: position.coords.latitudeDelta,
          longitudeDelta: position.coords.longitudeDelta,
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 10 },
    );
  }

getNearByPlaces() { 
    const apiKey = 'AIzaSyB-H-72X_QM7XO4D3yhWSYBV92L6PFkk6Y';
    const url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?"
    let completeUrl = `${url}location=${this.state.latitude},${this.state.longitude}&radius=500&type=restaurant&key=${apiKey}`;
    axios.get(completeUrl)
      .then(
      response => {
        console.log(response);
        this.setState({
          nearbyPlaces: response.data.results,
        })
      })
  }

renderList() {
        if (this.state.isLoading) {
            return <Spinner />
        }
        return (
        <FlatList
            data={this.state.nearbyPlaces}
            renderItem={({ item }) =>
              <View>
                <FlatList
                  data={item.photos}
                  renderItem={({ item }) =>
                    <View>
                      <Image style={{ width: 200, height: 100 }} source={{ uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${item.photo_reference}&key=AIzaSyBTeynBGQE3bjKAewueKWEVtbt9JlrUIn8` }} />
                    </View>
                  }
                />
                <Text>Name: {item.name}</Text>
                <Text>Rating: {item.rating}</Text>
              </View>
            }
          />
        )
    }

  render() {
    return (
      <View style={styles.container}>
          <ScrollView>
        <View style={{ marginBottom: 20, paddingBottom: 40 }}>
            <Button title="Enter Place for Near By Resturant" onPress={() => this.openSearchModal()} />
            <Text></Text>
          <Button title="Press for Near By Restautrants" onPress={this.getNearByPlaces.bind(this)} />
          {this.renderList()}
          {/*<Container style={styles.cont}>
          <Content style={styles.cont}>
          {this.state.nearbyPlaces.map((value, i) => {
            return <List style={styles.list} key={i}>
              <ListItem>
              <Text style={styles.text}>
              <Image style={{ width: 200, height: 100 }} source={{ uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${value.photo_reference}&key=AIzaSyBTeynBGQE3bjKAewueKWEVtbt9JlrUIn8` }} />
              </Text>
              </ListItem>
              <ListItem>
              <Text style={styles.text}>Name: {value.name}</Text>
              </ListItem>
              <ListItem>
              <Text style={styles.text}>Rating: {value.rating}</Text>
              </ListItem>
              </List>
          })}
          </Content>
          </Container>*/}
                
          {/*{this.state.nearbyPlaces ? <Card containerStyle={{ padding: 0 }} >
            {
              this.state.nearbyPlaces.map((item) => {
                return (
                  <ListItem
                    title={item.name}
                  >
                    <Text>Rating: {item.rating}</Text>
                  </ListItem>
                );
              })
            }
          </Card> : <ActivityIndicator size='large'/> }*/}
        </View>
        </ScrollView>
      </View>
    );
  }
}

export default Location2;

const styles = StyleSheet.create({
  container: {
      paddingLeft: 10,
      paddingRight: 10,
      marginRight: 10,
      marginLeft: 10,
      marginTop: 15,
      marginBottom: 20
    },
  cont: {
   backgroundColor: "white"
  },
  list: {
    borderWidth: 1
  },
  text: {
    marginTop :20,
    marginLeft :20,
    marginRight: 20
  }
});