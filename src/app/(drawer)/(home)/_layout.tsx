import {Stack} from "expo-router";
export default function HomeLayout() {
  return (
    <Stack>
        <Stack.Screen 
        name='(tabs)' 
        options={{headerShown: false, title: 'Home'}} 
        />
        <Stack.Screen 
        name='channel/[id]' 
        options={{
          // headerShown: true, 
          title: 'Channel',
          headerBackButtonDisplayMode: 'minimal',
          headerLargeTitle: true
        }} 
        />
          <Stack.Screen
        name='new/chat'
        options={{
          title: 'New Chat',
          presentation: 'transparentModal', // ✅ key fix
          animation: 'fade_from_bottom',
          headerShown: false
        }}
        />
    </Stack>
    );
}