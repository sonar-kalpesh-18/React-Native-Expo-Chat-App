import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { NativeTabs } from 'expo-router/unstable-native-tabs';

export default function TabsLayout() {
  return (
  <Tabs >
    <Tabs.Screen name="chats" 
    options={{ 
      headerShown: false,
      title: 'Chats', 
      tabBarIcon:({color, size}) => 
      <Ionicons name="chatbox" size={size} color={color} /> }} />

    <Tabs.Screen name="settings"
     options={{ 
      headerShown: false,
      title: 'Settings',
       tabBarIcon:({color, size}) => 
      <Ionicons name="settings-sharp" size={size} color={color} /> }} />

      <Tabs.Screen name="search"
     options={{ 
      headerShown: false,
      title: 'Search',
       tabBarIcon:({color, size}) => 
      <Ionicons name="search" size={size} color={color} /> }} />
  </Tabs>

  
  );
}