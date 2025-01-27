import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from '../pages/HomePage';
import Login from '../pages/Login';

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator id={undefined}>
            <Stack.Screen name="HomePage" component={HomePage} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    );
}