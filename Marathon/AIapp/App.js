import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
// const FilePickerManager = require('NativeModules')
import FilePickerManager from 'FilePickerManager'
// var encodedData = base64.encode(input);
var base64 = require('base-64');
// var utf8 = require('utf8');
// const Blob = RNFetchBlob.polyfill.Blob
// const fs = RNFetchBlob.fs
// window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
// window.Blob = Blob

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: ""
    };
  }


getFile(){
  // .then((res) => RNFetchBlob.fs.scanFile([ { path : res.path(), mime : 'audio/flac' } ]))
  FilePickerManager.showFilePicker(null, (response) => {
  console.log('Response = ', response);

  if (response.didCancel) {
    console.log('User cancelled file picker');
  }
  else if (response.error) {
    console.log('FilePickerManager Error: ', response.error);
  }
  else {
    let source = { uri: response.uri };
    this.setState({
      file: response.uri
    });
  }
});
}

// uploadImage  (uri, audio, mime = 'File_Ainsley_Harriott_voice/flac') {
//     return new Promise((resolve, reject) => {
//       const uploadUri =  this.state.imagePath
//         let uploadBlob = null
//         const imageRef = firebase.storage().ref('posts').child("123")
//         fs.readFile(uploadUri, 'base64')
//         .then((data) => {
//           return Blob.build(data, { type: `${mime};BASE64` })
//         })
//         .then((blob) => {
//           uploadBlob = blob
//         return imageRef.put(blob, { contentType: mime })
//         })
//         // .then(() => {
//         //   uploadBlob.close()
//         //   return imageRef.getDownloadURL()
//         // })
//         .then((url) => {
//           console.log(url)
//           resolve(url)
//         })
//         .catch((error) => {
//           reject(error)
//         })
//     })
//   }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Button onPress={this.getFile()}
        title="upload file"
        />
      </View>
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
