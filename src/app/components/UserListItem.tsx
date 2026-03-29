import { View, Text, Image, Pressable } from "react-native";
import  users  from '../data/users';
import { User } from "../types";
type UserListItemProps = {
    user: User;
    onPress?: (user: User) => void;
}

export default function UserListItem({user, onPress}: UserListItemProps) {
    const randomHex = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    return (
        <Pressable 
        onPress={() => onPress?.(user)}
        className=" text-gray-800 p-4 border-b border-gray-200 flex-row items-center gap-4" >
            <View className="w-12 h-12 rounded-full bg-gray-300 items-center justify-center">
            {user.avatar_url ? 
            <Image 
                source={{ uri: user.avatar_url }} 
                className="w-12 h-12 rounded-full" /> : 
                    <View style={{ backgroundColor: randomHex }} className={`w-12 h-12 rounded-full items-center justify-center`}>
                        <Text className="self-center text-3xl font-bold text-white" >
                            {user.first_name.charAt(0).toUpperCase()}
                        </Text>
                    </View> }
                    </View>
            <Text className="text-lg font-semibold">{user.first_name} {user.last_name}</Text>
        </Pressable>
    );
}