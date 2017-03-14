import React, { Component } from 'react'
import { AppRegistry, Text, Image, View } from 'react-native';


let MOCK_CATEGORY_DATA = [
    {
        "categoryId": 1,
        "categoryName": "One Live",
        "url": "http://dummy1/"
    },
    {
        "categoryId": 2,
        "categoryName": "Sport",
        "url": "http://dummy2/"
    },
    {
        "categoryId": 3,
        "categoryName": "Dance",
        "url": "http://dummy3/"
    },
    {
        "categoryId": 4,
        "categoryName": "Nature",
        "url": "http://dummy4/"
    },
    {
        "categoryId": 5,
        "categoryName": "Music",
        "url": "http://dummy5/"
    },
    {
        "categoryId": 6,
        "categoryName": "Edu",
        "url": "http://dummy6/"
    },
    {
        "categoryId": 7,
        "categoryName": "Talk",
        "url": "http://dummy7/"
    },
    {
        "categoryId": 8,
        "categoryName": "Random",
        "url": "http://dummy8/"
    },
    {
        "categoryId": 9,
        "categoryName": "Live Cam",
        "url": "http://dummy9/"
    }
]

export default class Channels extends Component {
    render() {

        let channel = MOCK_CATEGORY_DATA[this.props.catid];

        return (
            <View>
                <ChannelTitle label={channel.categoryName} url={channel.url}/>
            </View>
        );
    }
}

class ChannelTitle extends Component {
    render() {
        return (
            <Text style={{ fontSize: 48, color: 'white' }} data-url={this.props.url}>
                {this.props.label}
            </Text>

        )
    }
}

AppRegistry.registerComponent('Channels', () => Channels);