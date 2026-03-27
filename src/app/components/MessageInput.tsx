import { View, TextInput, Pressable, Platform, KeyboardAvoidingView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { useSafeAreaInsets } from 'react-native-safe-area-context';



export default function MessageInput() {

    const [message, setMessage] = React.useState('');
    const insets = useSafeAreaInsets(); 
    const handleSend = () => {
        // send the message to the server or add it to the local state
        setMessage('');
    }

    return (
        <KeyboardAvoidingView
      // 3. For Android, 'height' is usually more stable for displacement
      behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 50} 
      style={{ width: '100%'}}
    >
        
        <View 
        style={{ 
          flexDirection: 'row',
          alignItems: 'center',
          gap: 16,
          paddingHorizontal: 16,
          paddingTop: 10,
          backgroundColor: 'white',
          borderTopColor: '#eee',
          borderTopWidth: 1,
          // 5. MANUAL PADDING: This is the secret.
          // It ensures the gap is exactly the safe area height when keyboard is closed,
          // and behaves like normal padding when keyboard is open.
          paddingBottom: Math.max(insets.bottom, 12), 
        }}
      >
        <Pressable className="bg-zinc-100 rounded-full p-2">
          <Ionicons name="image" size={24} color="gray" />
        </Pressable>

        <TextInput
          placeholder="Type a message..."
          value={message}
          multiline
          onChangeText={setMessage}
          className="bg-zinc-100 flex-1 rounded-3xl px-4 py-2"
        />

        <Pressable onPress={handleSend}>
           <Ionicons name="send" size={24} color={message ? "#3b82f6" : "#eee"} />
        </Pressable>
      </View>
        
        </KeyboardAvoidingView>
    );
}