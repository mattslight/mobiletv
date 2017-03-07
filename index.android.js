import React, { Component } from 'react';
import { AppRegistry, View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper'
import randomcolor from 'randomcolor'


export default class MobileTVApp extends Component {

    viewStyle() {
        return {
            flex: 1,
            backgroundColor: randomcolor(),
            justifyContent: 'center',
            alignItems: 'center',
        }
    }

    render() {
        return (
            <Swiper horizontal={false} showsPagination={false} loop={false} index={1}>
                <View style={this.viewStyle()}>
                    <TitleText label="Start Broadcast" />
                </View>
                <View style={this.viewStyle()}>
                    <TitleText label="Channels" />
                </View>
                <View style={this.viewStyle()}>
                    <TitleText label="EPG / Info" />
                </View>
            </Swiper>

        )
    }
}

class TitleText extends React.Component {
    render() {
        return (
            <Text style={{ fontSize: 48, color: 'white' }}>
                {this.props.label}
            </Text>
        )
    }
}

AppRegistry.registerComponent('MobileTVApp', () => MobileTVApp);