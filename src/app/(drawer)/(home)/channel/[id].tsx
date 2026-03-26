import { Stack, useLocalSearchParams } from 'expo-router';
import { View, Text } from 'react-native';
import  Channels   from '@/app/data/channels';
import messages from '../../../data/messages';
import { FlatList } from 'react-native-gesture-handler';
import MessageList from '@/app/components/MessageList';

export default function ChannelScreen() {  
    const { id } = useLocalSearchParams<{ id: string }>(); // to get the channel id from the url
    const channel = Channels.find((c) => c.id === id); // find the channel with the matching id

    if (!channel) {
        return (
            <View className='flex-1 items-center justify-center'>
                <Text className='text-2xl font-bold'>Channel not found</Text>
            </View>
        );
    }

    return (
        <>
            <Stack.Screen options={{ title: channel.name }} />
            <MessageList />
        </>
    );
}