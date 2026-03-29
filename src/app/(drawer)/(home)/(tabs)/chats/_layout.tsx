import {Link, Stack} from "expo-router";
import { Ionicons } from '@expo/vector-icons';
export default function ChatLayout() {
  return (
    <Stack>
        <Stack.Screen 
        name='index' 
        options={({navigation}) => ({
            title: 'Chats',
            headerLargeTitle: true,
            headerTransparent: false,
            headerLeft: () => (
                <Ionicons 
                onPress ={()=>{navigation.openDrawer()}}
                name="menu-outline"
                size={40} 
                className="px-1" 
                color="gray" />
            ),
            headerRight: () => (
                <Link href="../../../new/chat" asChild>
                <Ionicons 
                name="add"
                size={40} 
                className="px-1" 
                color="gray" />
                </Link>
            )

        })} />
    </Stack>
    );
}