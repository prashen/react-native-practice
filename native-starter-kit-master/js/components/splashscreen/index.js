'use strict';

import React, { Component, Dimensions } from 'react';
import { Text, Image } from 'react-native';
import { connect } from 'react-redux';
import { Container, View } from 'native-base';

import myTheme from '../../themes/base-theme';
import styles from './styles';


export default class SplashPage extends Component {

    componentWillMount () {
        var navigator = this.props.navigator;
        setTimeout (() => {
            navigator.replace({
                id: 'index',
            });
        }, 1500);
    }
    render () {
      return (
           <Container theme={myTheme}>
              <View style={styles.container}>
                <Image source={require('../../../images/big-splash.jpg')} style={styles.imageCon} />
              </View>
           </Container>
        );
    }
}
