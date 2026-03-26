import { Stack } from "expo-router";
import '../../../global.css'
import { View, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-2xl font-bold">About Page</Text>
    </View>
  );
}