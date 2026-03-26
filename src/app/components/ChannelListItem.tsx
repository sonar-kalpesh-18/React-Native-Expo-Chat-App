import { Text, View, Image } from 'react-native';
import { Channel } from '../types';
import { formatDistanceToNow } from 'date-fns';
type ChannelListItemProps = {
    channel: Channel
}

export default function ChannelListItem({ channel }: ChannelListItemProps) {
    return (
        <View className='flex-row gap-1 p-4 border-b border-gray-200 items-center'>
            {/*channel image*/}
            <Image source={{ uri: channel.avatar }} className='w-12 h-12 rounded-full' />

            {/*channel name and last message*/}
            <View className='ml-4 flex-1'>
                <Text className='text-gray-900 font-bold text-lg flex-1' numberOfLines={1}>
                    {channel.name}</Text>
                <Text className='text-sm text-gray-500' numberOfLines={1}>
                    {channel.lastMessage?.content || 'No messages yet'}
                </Text>
            </View>

            {/*timestamp of last message*/}
            {channel.lastMessage && (
                <Text className='text-xs text-gray-500'>
                    {formatDistanceToNow(new Date(channel.lastMessage.createdAt), 
                    { addSuffix: true })}
                </Text>
            )}
        </View>
    )
}