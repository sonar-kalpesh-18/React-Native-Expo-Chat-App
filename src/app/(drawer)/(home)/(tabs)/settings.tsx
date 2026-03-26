import { Link } from 'expo-router'; 
import '../../../../../global.css'
import { View, Text, Button } from 'react-native';
import { useAuth } from '@clerk/clerk-expo';

export default function SettingsScreen() {
  const { signOut } = useAuth();
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-2xl font-bold">Settings</Text>

      <Button onPress={()=>signOut()} title="Sign Out" color="#FF3B30">
  
      </Button>
    </View>
  );
}