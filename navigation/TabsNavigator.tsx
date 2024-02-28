import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Journal} from '../screens/Journal';
import {Entry} from '../screens/Entry';
import RoutesProps from '../types/RoutesProps';
import {Icon} from 'react-native-elements';
import {colors} from '../styles/colors';
import {Dashboard} from '../screens/Dashboard';

const Tab = createBottomTabNavigator<RoutesProps>();

function TabsNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          paddingVertical: 5,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          backgroundColor: 'white',
          position: 'absolute',
          height: 80,
        },
        tabBarLabelStyle: {paddingBottom: 3},
      }}>
      <Tab.Screen
        name="Home"
        component={Dashboard}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" type="ant-design" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Entry"
        component={Entry}
        options={{
          tabBarLabel: 'New Entry',
          tabBarIcon: ({color, size}) => (
            <Icon
              name="heart-plus-outline"
              type="material-community"
              color={color}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Journal"
        component={Journal}
        options={{
          tabBarLabel: 'History',
          tabBarIcon: ({color, size}) => (
            <Icon name="book" type="ant-design" color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabsNavigator;
