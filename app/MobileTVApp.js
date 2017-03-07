/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { AppRegistry, Navigator } from 'react-native';

import TestScene from './TestScene';

export default class MobileTVApp extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{ title: 'My Initial Scene', index: 0 }}
                renderScene={(route, navigator) =>
                    <TestScene/>
                }
            />
        )
    }
}

AppRegistry.registerComponent('mobiletv', () => MobileTVApp);
