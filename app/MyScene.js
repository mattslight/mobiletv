import React, { Component, PropTypes } from 'react';
import { AppRegistry, View, Text, TouchableHighlight } from 'react-native';

export default class MyScene extends Component {

    nextScene() {
        /* some code */
        console.warn("hello")

    }

    backScene() {
        /* some code */
    }


    render() {
        return (
            <View>
                <Text>Current Scene: {this.props.title}</Text>

                <TouchableHighlight onPress={this.nextScene()}>
                    <Text>Tap me to load the next scene</Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={this.backScene()}>
                    <Text>Tap me to go back</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

MyScene.propTypes = {
    title: PropTypes.number.isRequired,
    //onForward: PropTypes.func.isRequired,
    //onBack: PropTypes.func.isRequired,
};

AppRegistry.registerComponent('MyScene', () => MyScene);