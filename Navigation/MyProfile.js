import { Text, View } from 'react-native';
import Margin from '../src/Margin';

export default function MyProfile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>MyProfile!</Text>

      <Margin height={100}/>

      <Text>MyProfile!</Text>
    </View>
  );
}