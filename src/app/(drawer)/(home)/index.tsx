import { Link } from 'expo-router'; 
import '../../../../global.css'
import { View, Text } from 'react-native';

export default function IndexScreen() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-2xl font-bold">Settings</Text>
    </View>
  );
}