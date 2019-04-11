/*
    Index file for Main tab navigator
*/

import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './HomeStackNav/Home';
import BarDetails from './HomeStackNav/BarDetails';
import SearchScreen from './Search.js';
import MessageScreen from './Message.js';
import PlansScreen from './PlansStackNav/Plans';
import CardDetails from './PlansStackNav/CardDetails'

import SearchBar from '../../components/SearchBar'

import SelectedUserProfileScreen from '../ProfileScreens/SelectedUserProfileScreen';
import CurrentUserProfileScreen from '../ProfileScreens/CurrentUserProfileScreen';
import DeleteAlert from '../Delete.js';

import Friends from '../Friends'
import FriendsHeader from '../../components/Friends/FriendsHeader'

import COLORS from '../../config/Colors.js';
import CustomDrawer from '../../components/CustomDrawer'

import { TouchableOpacity, Text, Image } from 'react-native'
import { createBottomTabNavigator, createStackNavigator, createDrawerNavigator, withNavigation, DrawerActions  } from 'react-navigation';
import CustomIcon from '../../components/CustomIcon'

const homeStackContainer = createStackNavigator({
    Home: HomeScreen,
    BarDetails: BarDetails,
},
{ 
    gestureResponseDistance: {
        horizontal: 1000,
    },
    initialRouteName: 'Home', 
    headerMode: 'float',
    defaultNavigationOptions: ({ navigation }) => ({
        headerTitle: navigation.state.routeName === 'Home' ? (<Text style={{fontFamily: 'HkGrotesk_Bold', fontSize: 20, color: 'white'}}>Home</Text>) : '',
        headerRight: navigation.state.routeName === 'BarDetails' ? (
            <TouchableOpacity onPress={() => {alert('You would join a bar here!')}}>
                <Text style={{color: 'white', fontFamily: 'HkGrotesk_Bold', fontSize: 20, marginRight: 15}}>Join</Text>
            </TouchableOpacity>) : '',
        headerLeft: navigation.state.routeName === 'Home' ? (<CustomIcon />) : '',
        headerStyle: {
          backgroundColor: '#111E6C',
        },
        headerTitleStyle: {
          fontFamily: 'HkGrotesk_Bold',
          color: '#FFFFFF',
        },
        headerTintColor: '#fff',
    })
});


const plansStackContainer = createStackNavigator({
    Plans: PlansScreen,
    SelectedProfile: SelectedUserProfileScreen,
    CardDetails: CardDetails
},
{ 
    initialRouteName: 'Plans', 
    headerMode: 'float',
    defaultNavigationOptions: ({ navigation }) => ({
        headerTitle: `Plans`,
        headerStyle: {
          backgroundColor: COLORS.HEADER_COLOR,
        },
        headerTitleStyle: {
          fontFamily: 'HkGrotesk_Bold',
          color: '#FFFFFF',
        },
        headerTintColor: '#fff',
        headerRight: (navigation.state.routeName == 'Plans' ? <TouchableOpacity><Ionicons name={'ios-add'} size={35} color={'#FFFFFF'} style={{paddingRight: 20}}/></TouchableOpacity> : null)
    })
});

// Only really used to give a header to the search screen
const searchStackContainer = createStackNavigator({
    Search: SearchScreen
},
{
    
    initialRouteName: 'Search', 
    headerMode: 'float',
    defaultNavigationOptions: ({ navigation }) => ({
        headerTitle: <SearchBar />,
        headerStyle: {
          backgroundColor: COLORS.HEADER_COLOR,
        },
        headerTintColor: 'rgba(16, 13, 100, 1)',
    })
});

const friendsStackNavigator = createStackNavigator({
    Friends: Friends,
    SelectedFriend: Friends,
},
{
    
    initialRouteName: 'Friends', 
    headerMode: 'float',
    defaultNavigationOptions: ({ navigation }) => ({
        headerTitle: <FriendsHeader />,
        headerStyle: {
          backgroundColor: COLORS.GRADIENT_COLOR_1,
          borderBottomWidth: 0,
        },
        headerTintColor: 'rgba(16, 13, 100, 1)',
    })
});

const Main = createBottomTabNavigator(
{
    Home: homeStackContainer,
    Search: searchStackContainer,
    Plans: plansStackContainer,
    Message: MessageScreen,
},
{
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused }) => {
            const { routeName } = navigation.state;
            if(routeName === 'Home') {
                return (focused ? <Ionicons name={"ios-beer"} size={25} color={"#FFFFFF"}/> : <Ionicons name={"ios-beer"} size={25} color={"#536497"} />)
            }
            else if(routeName === 'Search') {
                return (focused ? <Ionicons name={"ios-search"} size={25} color={"#FFFFFF"}/> : <Ionicons name={"ios-search"} size={25} color={"#536497"} />)
            }
            else if(routeName === 'Plans') {
                return (focused ? <Ionicons name={"ios-people"} size={25} color={"#FFFFFF"}/> : <Ionicons name={"ios-people"} size={25} color={"#536497"} />)
            }
            else if(routeName === 'Message') {
                return (focused ? <Ionicons name={"ios-text"} size={25} color={"#FFFFFF"}/> : <Ionicons name={"ios-text"} size={25} color={"#536497"} />)
            }
        },
    }),
    tabBarPosition: "bottom",
    tabBarOptions: {
        activeTintColor: 'white',
        inactiveTintColor: '#536497',
        showLabel: true,
        style: {
            backgroundColor: "#111E6C"
        }
    },
    animationEnabled: false,
    swipeEnabled: true
});


const DrawerContainer = createDrawerNavigator({
    Home: Main,
    Profile: CurrentUserProfileScreen,
    Friends: friendsStackNavigator,
    Delete: DeleteAlert,
},
{
    drawerType: 'slide',
    contentComponent: CustomDrawer,
    drawerBackgroundColor: '#302c9e',
    contentOptions: {
        activeBackgroundColor: '#302c9e'
    }
})


export default withNavigation(DrawerContainer);