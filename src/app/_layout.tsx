import "../../global.css";
import { Stack, Slot, Tabs } from "expo-router";
import { ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from '@clerk/clerk-expo/token-cache';
import {useAuth} from '@clerk/clerk-expo';
import { ActivityIndicator } from "react-native";

function RootStack() {
  const { isSignedIn, isLoaded } = useAuth();
  // const isAuthenticated = true; // Replace with your actual authentication logic
  if (!isLoaded) {
    return <ActivityIndicator />; // or a loading spinner
  }

  return (
    <Stack screenOptions={{headerShown: false}}>
    <Stack.Protected guard={!isSignedIn}>
      <Stack.Screen name="(auth)" />
    </Stack.Protected>

    <Stack.Protected guard={!!isSignedIn}>
      <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
    </Stack.Protected>

    {/* <Stack.Screen name="(auth)" options={{ headerShown: false }} /> */}
    
  </Stack>
  );
}

export default function RootLayout() {

  return (
    <ClerkProvider tokenCache={tokenCache}>
    <RootStack />
  </ClerkProvider>
  );
}
