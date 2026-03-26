import {Stack, Tabs, Slot} from "expo-router";
export default function AuthLayout() {
  return (
  <Stack>
    <Stack.Screen 
    name="sign-in" 
    options={{ 
      title: 'Sign In',
      headerLargeTitle: true
    }} 
    />
    
    <Stack.Screen 
    name="sign-up" 
    options={{ 
      title: 'Sign Up',
      headerLargeTitle: true
    }} />
  </Stack>
  );
}