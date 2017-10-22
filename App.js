/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

import data from './data.json';
import Dimensions from 'Dimensions';
//var  Dime = require('Dimensions');
var screenWidth = Dimensions.get('window').width;


var clo = 3;
var  boxW = 100;
var vMargin = (screenWidth - clo * boxW) / (clo + 1);
var hMargin = 25;

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
          {this.renderAllBadge()}
      </View>
    );
  }

    renderAllBadge(){
        var allBadge = [];
        for(var i = 0; i < data.data.length; i++) {
            var badge = data.data[i];
            allBadge.push(
                <View key = {i} style={styles.contentViewStyle}>
                    <Image source={{uri : badge.icon}} style={styles.imageStyle}/>

                    <Text style={styles.mainTitleStyle}>
                        {badge.title}
                    </Text>
                </View>
            )
        }
        return allBadge;
    }
}


const styles = StyleSheet.create({
    container: {
        marginTop:0,
        flex: 1,
        backgroundColor: '#F5FCFF',
        flexDirection:'row',
        flexWrap:'wrap'
    },

    contentViewStyle:{
        width : boxW,
        height:boxW,
        alignItems:'center',
        backgroundColor:'green',
        marginTop : hMargin,
        marginLeft: vMargin
    },

    imageStyle:{
        width:80,
        height:80,
        backgroundColor:'blue'
    },

    mainTitleStyle:{
        alignSelf:'center',
        //width: 80,

        backgroundColor:'yellow'
    },
});
