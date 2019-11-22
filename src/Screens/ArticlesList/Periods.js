import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    TouchableOpacity,
    Text,
    Modal,
    FlatList
} from 'react-native'

export default class Periods extends Component {

    periodData = [
        {
            title: 'Today\'s Most Popular',
            id: "1"
        },
        {
            title: 'Week\'s Most Popular',
            id: "7"
        },
        {
            title: 'Month\'s Most Popular',
            id: "30"
        }
    ]

    constructor(props) {
        super(props);
        this.state = {
            selectedPeriod: props.period,
        }
    }

    render(){
        return(
            <Modal animationType="slide" transparent={true}>
                <View
                style={{
                    backgroundColor:'#00000030',
                    flex:1,
                    flexDirection: 'column-reverse',
                }}>
                    <View
                    style={{
                        padding: 1,
                        shadowOffset:{  width: 3,  height: 3,  },
                        shadowColor: '#00000030',
                        shadowOpacity: 1.0,
                        elevation: 3,
                    }}>
                        <FlatList
                        style={{ width: '100%', backgroundColor: 'white'}}
                        showsVerticalScrollIndicator={false}
                        data={this.periodData}
                        renderItem={({ item, index }) => this.renderRow(item)}
                        keyExtractor={item => item.id}
                        />
                    </View>
                </View>
            </Modal>
        );
    }

    renderRow(item){
        // period -> if there is any slected sort id.
        const {
            period = "",
            changePeriod
        } = this.props;
        const rowColor = (period === item.id) ? 'red' : 'black'
        return(
            <View
            style={{
                height: 44,
                width: '100%',
                justifyContent: 'space-between',
            }}>
            <TouchableOpacity
            onPress={changePeriod(item.id)}
            style={{
                flex: 1,
                paddingHorizontal: 15,
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
            }}>
                <Text
                style={{
                    color: rowColor
                }}>{item.title}</Text>
                
            </TouchableOpacity>
            <View
            style={{
                height: 0.6,
                backgroundColor: 'gray',
            }}/>
        </View>
        );
    }
}

Periods.propType = {
    changePeriod: PropTypes.func
};