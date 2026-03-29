import { FlatList } from 'react-native';
import { View, Text } from "react-native";
import  users  from '../data/users';
import UserListItem from './UserListItem';
import { User } from '../types';
type UserListProps = {
    // you can add props here if needed, such as an onPress handler for when a user is selected
        onPress?: (user: User) => void;
}

export default function UserList({onPress}: UserListProps) {
    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            data={users}
            renderItem={({item}) => <UserListItem user={item} onPress={onPress} />}     
        />
    );
}