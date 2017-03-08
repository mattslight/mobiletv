//import MobileTVApp from './app/MobileTVApp';
import React, { Component } from 'react'
import { AppRegistry, View, Text, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper'
import randomcolor from 'randomcolor'
import Channels from './app/Channels'

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
                    <Text>
                        Please log in to start a broadcast.
                    </Text>
                </View>
                <Swiper horizontal={true} loop={true} showsPagination={false}>
                    <View style={this.viewStyle()}>
                        <Channels catid={0} />
                    </View>
                    <View style={this.viewStyle()}>
                        <Channels catid={1} />
                    </View>
                    <View style={this.viewStyle()}>
                        <Channels catid={3} />
                    </View>
                    <View style={this.viewStyle()}>
                        <Channels catid={4} />
                    </View>
                    <View style={this.viewStyle()}>
                        <Channels catid={5} />
                    </View>
                    <View style={this.viewStyle()}>
                        <Channels catid={6} />
                    </View>
                    <View style={this.viewStyle()}>
                        <Channels catid={7} />
                    </View>
                    <View style={this.viewStyle()}>
                        <Channels catid={8} />
                    </View>
                </Swiper>
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


AppRegistry.registerComponent('mobiletv', () => MobileTVApp);






