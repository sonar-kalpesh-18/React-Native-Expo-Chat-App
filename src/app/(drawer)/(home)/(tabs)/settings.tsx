import { Link } from 'expo-router'; 
import '../../../../../global.css'
import { View, Text, Button } from 'react-native';
import { useAuth } from '@clerk/clerk-expo';
import { useSupabase } from '@/providers/SupabaseProvider';

export default function SettingsScreen() {
  const { signOut } = useAuth();

  const supabase = useSupabase();
  
  const testInsert = async () => {
    const {data, error} = await supabase
    .from('Test')
    .insert({ test : 'Testing insert'});
  console.log('Insert result:', {data, error})
  };

  const testFetch = async () => {
    const {data, error} = await supabase
    .from('Test')
    .select('*');
  console.log(JSON.stringify(data,null,2))
  }

  return (
    <View className="flex-1 items-center justify-center gap-4">
      <Text className="text-2xl font-bold">Settings</Text>

      <Button onPress={()=>signOut()} title="Sign Out" color="#FF3B30">  
      </Button>
      <Button onPress={testInsert} title="Test Insert" color="#007AFF">
      </Button>
      <Button onPress={testFetch} title="Test Fetch" color="#007AFF">
      </Button>
    </View>
  );
}