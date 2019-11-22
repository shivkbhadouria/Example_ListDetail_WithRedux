import React, { Component } from 'react';
import {
    View,
    SafeAreaView,
} from 'react-native';


import Header from '../../Components/Header/Header';

import {
    ICON_BACK_ARROW,
} from '../../Images/index';


export default class ArticleDetail extends Component {
  
    constructor(props) {
        super(props);
    }

    goBackToList() {
        this.props.navigation.goBack();
    }

    render() {
        return(
            <SafeAreaView
            style={{
                flex:1
            }}>
                <View
                style={{
                    flex: 1,
                }}>
                    <Header
                        title={'NY Time Most Popular'}
                        leftButtonImage={ICON_BACK_ARROW}
                        leftButtonAction={() => this.goBackToList.bind(this)} 
                    />
                </View>
            </SafeAreaView>
        );
    }
}