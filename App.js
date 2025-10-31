import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "./screens/HomeScreen"
import AddEditScreen from "./screens/AddEditScreen"

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#6366f1",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Mis Películas" }} />
        <Stack.Screen
          name="AddEdit"
          component={AddEditScreen}
          options={({ route }) => ({
            title: route.params?.movie ? "Editar Película" : "Agregar Película",
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
