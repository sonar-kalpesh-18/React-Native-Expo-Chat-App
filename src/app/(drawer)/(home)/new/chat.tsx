import BottomSheet from "@gorhom/bottom-sheet";
import { useMemo, useRef } from "react";
import { Pressable, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
// import { router } from '.expo/types/router';
import { useRouter } from "expo-router";
import UserList from "@/app/components/UserList";
import { User } from "@/app/types";

export default function NewChat() {
  const sheetRef = useRef(null);
  const snapPoints = useMemo(() => ["80%"], []);
  const router = useRouter();
  const handleUserPress = (user:User) => {
    console.log("Selected user:", user.first_name);
    // Here you can navigate to the chat screen with the selected user
    // For example: router.push(`/chat/${user.id}`);
  }

  return (
    <View className="flex-1 justify-end bg-black/10 backdrop-blur-md">
      {/* BACKDROP CLICK TO CLOSE */}

      <Pressable onPress={() => router.back()} className="absolute inset-0" />

      {/* MODAL CARD */}
      <View className="bg-white rounded-t-3xl p-4 h-[85%]">
        {/* 🔥 TOP DRAG LINE (CLICKABLE) */}
        <Pressable
          onPress={() => router.back()}
          className="items-center mb-3 py-2"
        >
          <View className="w-12 h-1.5 bg-gray-300 rounded-full" />
        </Pressable>
        {/* Your UI */}

        <UserList onPress={handleUserPress}/>
      </View>
    </View>
  );
}
