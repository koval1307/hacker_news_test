import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Auth0Provider } from "react-native-auth0";
import RootStack from "./src/navigation/RootStack";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AUTH0_DOMAIN, AUTH0_CLIENT_TOKEN } from "@env";

export default function App() {
  const queryClient = new QueryClient();
  const Stack = createStackNavigator();
  return (
    <QueryClientProvider client={queryClient}>
      <Auth0Provider domain={AUTH0_DOMAIN} clientId={AUTH0_CLIENT_TOKEN}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            {<Stack.Screen name="Root" component={RootStack} />}
          </Stack.Navigator>
        </NavigationContainer>
      </Auth0Provider>
    </QueryClientProvider>
  );
}
