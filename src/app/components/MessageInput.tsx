import { View, Alert, TextInput, Pressable, Platform, KeyboardAvoidingView, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useState } from "react";
import * as ImagePicker from 'expo-image-picker';
import { set } from "date-fns";


export default function MessageInput() {
    const [image, setImage] = useState<string | null>(null);
    const [message, setMessage] = React.useState('');
    const insets = useSafeAreaInsets(); 
    const handleSend = () => {
        // send the message to the server or add it to the local state
        setMessage('');
        setImage(null);
    }
      const pickImage = async () => {
    // No permissions request is necessary for launching the image library.
    // Manually request permissions for videos on iOS when `allowsEditing` is set to `false`
    // and `videoExportPreset` is `'Passthrough'` (the default), ideally before launching the picker
    // so the app users aren't surprised by a system dialog after picking a video.
    // See "Invoke permissions for videos" sub section for more details.
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      Alert.alert('Permission required', 'Permission to access the media library is required.');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images', 'videos'],
      allowsEditing: true,
      aspect: [3, 4],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const isMessageEmpty = message.trim() === '' && !image;

    return (
        <KeyboardAvoidingView
      // 3. For Android, 'height' is usually more stable for displacement
      behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 50} 
      style={{ width: '100%'}}
    >
        
        <View 
        className="items-center gap-2 px-4 pt-2.5 bg-white border-t border-gray-200"
  style={{
    paddingBottom: Math.max(insets.bottom, 12)
  }}
         
        
      >
        {image && <View className="w-32  h-32 self-start relative">
          <Image source ={{ uri: image }} className="w-full h-full" />
          <Pressable onPress={()=>setImage(null)} className="absolute w-12 h-12 top-1 right-[-4] items-center">
            <Ionicons name="close-circle" size={25} color="gray" />
          </Pressable>
          </View>}


        <View className="flex-row items-center gap-4">
        <Pressable onPress={pickImage} className="bg-zinc-100 rounded-full p-2">
          <Ionicons name="image" size={24} color="gray" />
        </Pressable>

        <TextInput
          placeholder="Type a message..."
          value={message}
          multiline
          onChangeText={setMessage}
          className="bg-zinc-100 flex-1 rounded-3xl px-4 py-2"
        />

        <Pressable onPress={handleSend}
          disabled={isMessageEmpty}>
           <Ionicons name="send" size={30} color={isMessageEmpty ? "#eee" : "#3b82f6"} />
        </Pressable>
        </View>
      </View>
        
        </KeyboardAvoidingView>
    );
}