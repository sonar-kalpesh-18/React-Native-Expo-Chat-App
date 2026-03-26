import { Link } from 'expo-router'; 
// import '../../../../../../global.css'
import { View, Text, FlatList } from 'react-native';
import channels from '../../../../data/channels';
import ChannelListItem from '@/app/components/ChannelListItem';

export default function ChannelListScreen() {
  return (
      <FlatList 
      data = {channels}
      className='bg-white text-lg'
      renderItem = {({ item }) => <ChannelListItem channel={item} />}
      showsHorizontalScrollIndicator={false}
      contentInsetAdjustmentBehavior='automatic'
      />
  );
}