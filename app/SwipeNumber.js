import React, { Component } from 'react'
import {
    Text,
    View,
    Image,
    Dimensions,
    AppRegistry
} from 'react-native'
import Swiper from 'react-native-swiper'
import ViewLoop from './ViewLoop'
const { width } = Dimensions.get('window');

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
        flex: 1
    }
};

const renderPagination = (index, total, context) => {
    return (
        <View style={{
      position: 'absolute',
      bottom: 10,
      right: 10
    }}>
            <Text style={{ color: 'grey' }}>
                <Text style={{
          color: 'white',
          fontSize: 20
        }}>{index + 1}</Text>/{total}
            </Text>
        </View>
    )
};

export default class SwipeNumber extends Component {
    render () {
        return (
            <View>
                <Swiper height={340}
                        renderPagination={renderPagination}
                        paginationStyle={{
            bottom: -23, left: null, right: 10
          }} loop={true}>
                    <ViewLoop />
                </Swiper>
            </View>
        )
    }
}

AppRegistry.registerComponent('SwipeNumber', () => SwipeNumber);