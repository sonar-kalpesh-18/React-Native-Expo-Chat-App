import { View, Text, Image } from 'react-native'
import { Message } from '../types'

type MessageListItemProps = {
    message: Message;
    isOwnMessage?: boolean;
}
export default function MessageListItem({message, isOwnMessage}: MessageListItemProps) {
    return (
        <View className={`flex-row mb-2 ${isOwnMessage ? 'justify-end' : 'justify-start'} `}>
        <View className={`max-w-[75%] gap-2 ${isOwnMessage ? 'items-end' : 'items-start'} `}>

            {/*image sent*/}
            {message.image && (
            <Image 
                source ={{ uri: message.image }} 
                className='w-48 h-48 rounded-lg' 
            />
            )}

            {/* text bubble */}

            {message.content && (
            <View 
            className=
            {`px-4 py-4 rounded-2xl 
            ${isOwnMessage ? 'bg-blue-500 rounded-br-sm' : 'bg-zinc-300 rounded-tl-sm'} `
            }>

                <Text 
                className=
                {`text-base ${isOwnMessage ? 'text-white' : 'text-neutral-900'}`}>{message.content}</Text>
            </View>
            )}
        </View>
        </View>
    );
}