import { RootStackParamList } from '@/Navs';
import { Box, Text, TouchableOpacity } from '@/atoms';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, 'Detail'>;

const DetailScreen: React.FC<Props> = ({ navigation, route }) => {
  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      <Text>Detail Screen</Text>
      <Text m="lg">{JSON.stringify(route.params)}</Text>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ padding: 12 }}
      >
        <Text>Go Back</Text>
      </TouchableOpacity>
    </Box>
  );
};

export default DetailScreen;
