import React, { Component } from 'react'
import { AppRegistry, View, Text, StyleSheet,Button } from 'react-native'
import Counter from './Counter';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Counter color={'lightblue'} size={16} />
        <Counter color={'skyblue'} size={32} />
        <Counter color={'steelblue'} size={80} />
        <Counter color={'darkblue'} size={140} />
       
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

AppRegistry.registerComponent('App', () => App)
