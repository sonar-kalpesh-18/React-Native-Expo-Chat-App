import { useLocalSearchParams } from 'expo-router';
import { View, Text } from 'react-native';
import  Channels   from '@/app/data/channels';
import { Stack } from 'expo-router';

export default function ChannelScreen() {  
    const { id } = useLocalSearchParams(); // to get the channel id from the url
    const channel = Channels.find((c) => c.id === id); // find the channel with the matching id

    if (!channel) {
        return (
            <View className='flex-1 items-center justify-center'>
                <Text className='text-2xl font-bold'>Channel not found</Text>
            </View>
        );
    }

    return (
        <View className='flex-1 items-center justify-center'>
            <Stack.Screen options={{ title: channel.name }} />
            <Text className='text-2xl font-bold'>Channel Screen : {channel.name}</Text>
        </View>
    );
}