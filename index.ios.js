//import MobileTVApp from './app/MobileTVApp';
import React, { Component } from 'react'
import { AppRegistry, View, Text, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper'
import randomcolor from 'randomcolor'
import Channels from './app/Channels'
import EpgDetails from './app/EpgDetails'
import SwipeNumber from './app/SwipeNumber'

let pageId = 0;

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
                    <Text style={{ color: 'white'}}>
                        Please log in to start a broadcast.
                    </Text>
                </View>
                <SwipeNumber />
                <View style={this.viewStyle()}>
                    <EpgDetails catid={pageId} />
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

AppRegistry.registerComponent('mobiletv', () => MobileTVApp);






