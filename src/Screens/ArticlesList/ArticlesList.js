import React, { Component } from 'react';
import {
    View,
    FlatList,
    Text,
    SafeAreaView,
    TouchableOpacity,
    Image,
    Alert
} from 'react-native';

import { connect } from 'react-redux';

import Header from '../../Components/Header/Header';

import {
    ICON_DETAIL,
    ICON_DATE,
    ICON_MENU,
    ICON_MORE,
    ICON_SEARCH
} from '../../Images/index';

import { getListApiIntegrationMethod } from '../../ActionCreator/GetListActionCreator';

import Periods from './Periods';

 class ArticlesList extends Component {
  
    period = "1";
    key='46zR2K9xs24YVsCpCFF5pLOH4Xn3OA9B';

    constructor(props) {
        super(props);

        this.state={
            isPeriodSelection: false
        }
    }

    UNSAFE_componentWillMount() {
        this.getListMethod(this.period)
    }

    getListMethod(period) {
        URL = "https://api.nytimes.com/svc/mostpopular/v2/viewed/"+period+".json?api-key="+this.key
         this.props.getListApiIntegrationMethod(URL)
    }

    // Move to detail screen 
    showArticleDetail(articleInfo){
        this.props.navigation.navigate('NListDetail',
        {
            article: articleInfo
        });
    }

    onPressRightButtons(data){
        console.log('this is item,key', data);
        switch (data.type) {
            case 'more':
                this.setState({
                    isPeriodSelection: true
                })
                break;
            default:
                Alert.alert('Action',data.type);
        }
    }

    onToggleMenu() {
        this.props.navigation.openDrawer();
    }

    onPeriodChange(period) {
        this.period = period
        this.getListMethod(this.period)
        this.setState({
            isPeriodSelection: false
        })
    }

    

    render() {
        const rightButtons = [{URI:ICON_MORE,type:'more'},{URI:ICON_SEARCH,type:'search'}];
        return(
            <SafeAreaView
            style={{
                flex: 1
            }}>
                { this.state.isPeriodSelection && 
                    <Periods
                    period={this.period}
                    changePeriod={(period) => this.onPeriodChange.bind(this, period)}/>
                }
            <View
            style={{
                flex: 1
            }}>
                <Header
                title={'NY Time Most Popular'}
                leftButtonImage={ICON_MENU}
                rightButtonImages={rightButtons}
                rightButtonaction={(data) => this.onPressRightButtons.bind(this, data)}               leftButtonAction={() => this.onToggleMenu.bind(this)} 
                />
                <FlatList
                style={{
                    backgroundColor: 'white',
                    flex: 1,
                    marginVertical: 10
                }}
                        data={this.props.responseContainer}
                        renderItem={({ item, index }) => this.articleRow(item, index)}
                        keyExtractor={(item) => item.id}
                />
            </View>
            </SafeAreaView>
        );
    }

    articleRow(item, index) {
        return(
            <View
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 10,
            }}>
                {this.articleImage(item)}
                {this.articleInfo(item)}
                {this.detailButton(index)}
            </View>
        );
    }

    articleImage(item){
        const media = item.media[0];
        const metadata = media["media-metadata"][0];
        return(
            <Image
            source={{uri: metadata.url}}
            style={{
                height: 75,
                width: 75,
                margin: 10,
            }}></Image>
        );
    }

    articleInfo(item) {
        return(
            <View
            style={{
                flex: 1
            }}>
                <Text
                numberOfLines={2}
                ellipsizeMode={'tail'}>
                    {item.abstract}
                </Text>
                <Text
                style={{
                    marginTop: 10
                }}>{item.byline}</Text>
                <View
                style={{
                    flexDirection: 'row-reverse',
                    alignItems: 'center'
                }}>
                    <Text
                    style={{
                        marginLeft: 10
                    }}>{item.published_date}</Text>
                    <Image
                    source={ICON_DATE}/>
                </View>
            </View>
        );
    }

    detailButton(index) {
        return(
        <TouchableOpacity
        onPress={() => this.showArticleDetail(this.props.responseContainer[index])}
        style={{
            width: 40,
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Image
            source={ICON_DETAIL}/>
        </TouchableOpacity>
        );
    }
}

 // For dispatching an action
 const mapDispatchToProps = dispatch => {
    return {
        getListApiIntegrationMethod: () => dispatch(getListApiIntegrationMethod(URL))
    }
  };

  // For accessing states from store
  const mapStateToProps = state => {
    return {
      responseContainer: state.GetListApiReducer.response.results,
    };
  };


  export default connect(mapStateToProps, mapDispatchToProps)(ArticlesList);