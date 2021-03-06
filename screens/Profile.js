import React from 'react';
import {
    ActivityIndicator,
    AsyncStorage,
    Button,
    StatusBar,
    StyleSheet,
    View,
    Image,
    TextInput,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import { createBottomTabNavigator, createStackNavigator, createSwitchNavigator, TabBarBottom } from 'react-navigation'; // Version can be specified in package.json
import { Ionicons } from '@expo/vector-icons'

import getTheme from '../native-base-theme/components';
import Common from '../native-base-theme/variables/commonColor';

import { Input, Item, Container, Header, Title, Content, Left, Right, Body, Icon, StyleProvider, Text } from 'native-base';

var { height, width } = Dimensions.get('window');

class ProfileScreen extends React.Component {
    static navigationOptions = {

        tabBarIcon: ({ focused, tintColor }) => (
            focused ? <Ionicons name={'ios-person'} size={25} color={'#FFFFFF'} />
                : <Ionicons name={'ios-person'} size={25} color={'#536497'} />
        ),
        tabBarPosition: 'bottom',
        tabBarOptions: {
            showLabel: false,
            activeTintColor: 'white',
            inactiveTintColor: '#536497',
            style: {
                backgroundColor: '#030e2c',
            }
        },
        animationEnabled: false,
        swipeEnabled: false,
    };

    render() {
        return (
            <StyleProvider style={getTheme(Common)}>
                <Container>
                    <Header>
                    <Left>
                    </Left>
                    <Body>
                        <Title>Profile</Title>
                    </Body>
                    <Right>
                        <Icon name='ios-settings' style={{color: '#FFFFFF', fontSize: 25,}}/>
                    </Right>
                    </Header> 
                    <Content>
                        <Button title='Sign out' onPress={() => {this._signOutAsync()}}/>
                    </Content>   
                 </Container>
            </StyleProvider>
        );
    }

    // FIX: For some reason, when signing out, the header on the login screen pops up for a split second
    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };
}

const styles = StyleSheet.create({

});

export default ProfileScreen;