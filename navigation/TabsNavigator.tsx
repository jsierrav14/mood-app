import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Journal } from '../screens/Journal';
import { Entry } from '../screens/Entry';

const Tab = createBottomTabNavigator();

function TabsNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Journal" component={Journal} />
      <Tab.Screen name="Entry" component={Entry} />
    </Tab.Navigator>
  );
}

export default TabsNavigator