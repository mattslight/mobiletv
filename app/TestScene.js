import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

export default class TestScene extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 1, backgroundColor: 'powderblue'}}/>
                    <Text>Current Scene: {this.props.title}</Text>
                <View style={{flex: 2, backgroundColor: 'skyblue'}}>
                    <TouchableHighlight onPress={this.props.onForward}>
                        <Text>Tap me to load the next scene</Text>
                    </TouchableHighlight>

                    <TouchableHighlight onPress={this.props.onBack}>
                        <Text>Tap me to go back</Text>
                    </TouchableHighlight>
                </View>
                <View style={{flex: 3, backgroundColor: 'steelblue'}}/>
            </View>
        )
    }
}

TestScene.propTypes = {
    title: PropTypes.string.isRequired,
    onForward: PropTypes.func.isRequired,
    onBack: PropTypes.func.isRequired,
};