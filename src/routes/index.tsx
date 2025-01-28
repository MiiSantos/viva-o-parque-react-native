import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomePage from '../pages/HomePage/home';
import Login from '../pages/Login/login';
import Register from '../pages/Register/register';

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator id={undefined} initialRouteName="home">
                <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="register" component={Register} options={{ headerShown: false }} />
                <Stack.Screen name="home" component={HomePage} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}