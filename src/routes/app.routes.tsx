import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Start } from '../pages/start';
import { Home } from '../pages/home';
import { CreateTask } from '../pages/createTask';

const Stack = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Start" component={Start} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Create" component={CreateTask} />
    </Stack.Navigator>
  );
}
