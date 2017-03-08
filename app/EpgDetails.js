import React, { Component } from 'react'
import { AppRegistry, Text, Image, View } from 'react-native';


var MOCK_CATEGORY_DATA = [
    {
        "categoryId": 1,
        "categoryName": "One Live",
        "epgText": "Live one brings you the best of Tely.io"
    },
    {
        "categoryId": 2,
        "categoryName": "Sport",
        "epgText": "We all love cricket, don't we? "
    },
    {
        "categoryId": 3,
        "categoryName": "Dance",
        "epgText": "Dance, Dance!"
    },
    {
        "categoryId": 4,
        "categoryName": "Nature",
        "epgText": "The best the world has to offer, by quadcopter"
    },
    {
        "categoryId": 5,
        "categoryName": "Music",
        "epgText": "Music plays all the time - just like MTV"
    },
    {
        "categoryId": 6,
        "categoryName": "Edu",
        "epgText": "You want to learn?"
    },
    {
        "categoryId": 7,
        "categoryName": "Talk",
        "epgText": "All the time, about interesting topics."
    },
    {
        "categoryId": 8,
        "categoryName": "Random",
        "epgText": "Boo!"
    },
    {
        "categoryId": 9,
        "categoryName": "Live Cam",
        "epgText": "It's alive!"
    }
]

export default class EpgDetails extends Component {
    render() {

        let channel = MOCK_CATEGORY_DATA[this.props.catid];

        return (
            <View>
                <EpgTitle label={channel.epgText} categoryid={this.props.catid} url={channel.url}/>
            </View>
        );
    }
}

class EpgTitle extends Component {
    render() {
        return (
            <Text style={{ fontSize: 36, color: 'white' }} data-url={this.props.url}>
                {epgString(this.props.categoryid)}
            </Text>

        )
    }
}

function epgString(categoryId) {
    return MOCK_CATEGORY_DATA[categoryId].epgText;
}



AppRegistry.registerComponent('EpgDetails', () => EpgDetails);