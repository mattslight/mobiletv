import React, { Component } from 'react'
import { AppRegistry, Text, Image, View } from 'react-native';


var MOCK_CATEGORY_DATA = [
    {
        "categoryId": 1,
        "categoryName": "One Live"
    },
    {
        "categoryId": 2,
        "categoryName": "Sport"
    },
    {
        "categoryId": 3,
        "categoryName": "Dance"
    },
    {
        "categoryId": 4,
        "categoryName": "Nature"
    },
    {
        "categoryId": 5,
        "categoryName": "Music"
    },
    {
        "categoryId": 6,
        "categoryName": "Edu"
    },
    {
        "categoryId": 7,
        "categoryName": "Talk"
    },
    {
        "categoryId": 8,
        "categoryName": "Random"
    },
    {
        "categoryId": 9,
        "categoryName": "Live Cam"
    }
]

export default class Channels extends Component {
    render() {

        let channel = MOCK_CATEGORY_DATA[this.props.catid];

        return (
            <View>
                <TitleText label={channel.categoryName} />
            </View>
        );
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

AppRegistry.registerComponent('Channels', () => Channels);