import React, { Component } from 'react';
import {
    View,
    SafeAreaView,
    Image,
    Text,
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
        console.log('article detail props', this.props.navigation.state.params.article)
        const article = this.props.navigation.state.params.article;
        const media = article.media[0];
        const metadata = media["media-metadata"][media["media-metadata"].length - 1];
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
                        title={article.section}
                        leftButtonImage={ICON_BACK_ARROW}
                        leftButtonAction={() => this.goBackToList.bind(this)} 
                    />

                    <Text
                    style = {{
                        fontSize: 20,
                        fontWeight: 'bold',
                        margin: 10,
                    }}>{article.title}</Text>

                    <View
                    style={{
                        alignItems: 'center',
                        height: metadata.height,
                    }}>
                    <Image
                    style={{
                        height: metadata.height,
                        width: '100%'
                    }}
                    source={{uri: metadata.url}}
                    />
                    </View>

                    <Text
                    style={{
                        margin: 10
                    }}>{article.abstract}</Text>
                </View>
            </SafeAreaView>
        );
    }


}