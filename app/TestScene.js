import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper'
import randomcolor from 'randomcolor'

export default class TestScene extends Component {

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
            <Swiper horizontal={false} showsPagination={false} index={1}>
                <View style={this.viewStyle()}>
                    <TitleText label="Start Broadcast" />
                </View>
                <Swiper loop={true} showsPagination={false}>
                    <View style={this.viewStyle()}>
                        <TitleText label="Channel 1" />
                    </View>
                    <View style={this.viewStyle()}>
                        <TitleText label="Channel 2" />
                    </View>
                    <View style={this.viewStyle()}>
                        <TitleText label="Channel 3" />
                    </View>
                    <View style={this.viewStyle()}>
                        <TitleText label="Channel 4" />
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