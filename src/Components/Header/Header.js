import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { 
    View, 
    Text,
    TouchableOpacity,
    Image
} from 'react-native';

import {
    ICON_BACK_ARROW
} from '../../Images/index';

 export default class Header extends Component {
  
    constructor(props) {
        super(props);
        console.log('right button super', this.props);
    }

    render() {
        const {
            leftButtonImage = ICON_BACK_ARROW, // default should be back arrow
            rightButtonImages = [], // this array shoud contain URI for image and type
            title,
            leftButtonAction,
            rightButtonaction
        } = this.props
        console.log('right button super3', this.props);
        return(
            <View
            style={{
                height: 100,
                shadowOffset:{  width: 3,  height: 4,  },
                shadowColor: '#00000050',
                shadowOpacity: 1.0,
                elevation: 3,
                backgroundColor: 'rgb(80,227,194)',
                flexDirection: 'row',
                marginTop: -50
            }}>
                <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 50,
                    width: '100%',
                    height: 50,
                }}>
                    <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <TouchableOpacity
                        onPress={leftButtonAction()}
                        style={{
                            width: 30,
                            alignItems: 'center',
                        }}>
                            <Image
                            source={leftButtonImage}/>
                        </TouchableOpacity>
                        <Text
                        style={{
                            color: 'white',
                            fontSize: 16,
                            marginLeft: 5,
                        }}>{title}</Text>
                    </View>
                    <View
                    style={{
                        flexDirection: 'row-reverse',
                        alignItems: 'center',
                    }}>
                        {rightButtonImages.map((data, i) => {
                            console.log('this is map data', data, i);
                        return (
                            <TouchableOpacity
                            onPress={rightButtonaction(data)}
                            key={i}
                            style={{
                                width: 30,
                            }}>
                                <Image
                                source={data.URI}/>
                            </TouchableOpacity>
                        )
                        })}
                    </View>
                </View>
            </View>
        );
    }
}

Header.propType = {
    leftButtonAction: PropTypes.func,
    rightButtonaction: PropTypes.func
};