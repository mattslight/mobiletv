import React, { Component } from 'react'
import { AppRegistry, Text, Image, View, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

const views = [
    {
        "numberOfLines": 1,
        "text": "Aussie tourist dies at Bali hotel",
        "imgSrc": "../img/1.jpg"
    },
    {
        "numberOfLines": 1,
        "text": "Big lie behind Nine’s new show",
        "imgSrc": "../img/2.jpg"
    },
    {
        "numberOfLines": 1,
        "text": "Why Stone split from Garfield",
        "imgSrc": "../img/3.jpg"
    },
    {
        "numberOfLines": 1,
        "text": "Learn from Kim K to land that job",
        "imgSrc": "../img/4.jpg"
    },

];

const styles = {
    wrapper: {
    },

    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },

    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },

    image: {
        width,
        flexGrow: 1
    }
};

export default class ViewLoop extends Component {
    render() {
        return (
            <ViewList views={views} />
        );
    }
}


function ViewList(props) {
    const views = props.views;
    const listItems = views.map((view, index) =>
        <View key={index} style={styles.slide} title={<Text numberOfLines={view.numberOfLines}>{view.text}</Text>}>
            <Image style={styles.image} source={require("../img/1.jpg")} />
        </View>
    );
    return (
        <View>{listItems}</View>
    );
}

AppRegistry.registerComponent('ViewLoop', () => ViewLoop);
