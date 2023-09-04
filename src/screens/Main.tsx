import { StyleSheet } from 'react-native';
import { Box, Container, Text } from '@/atoms';
import NoteList from '@/components/NoteList';
import HeaderBar from '@/components/HeaderBar';
import FeatherIcon from '@/components/Icon';
import { TouchableOpacity } from '@/atoms';
import { CompositeScreenProps } from '@react-navigation/native';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { HomeDrawerParamList, RootStackParamList } from '@/Navs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useCallback } from 'react';
import useStickyHeader from '@/hooks/useStickyHeader';

type Props = CompositeScreenProps<
  DrawerScreenProps<HomeDrawerParamList, 'Main'>,
  NativeStackScreenProps<RootStackParamList>
>;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const MainScreen: React.FC<Props> = ({ navigation }) => {
  const {
    handleNoteListLayout,
    handleScroll,
    headerBarStyle,
    headerBarHeight
  } = useStickyHeader();

  const handleSidebarToggle = useCallback(() => {
    navigation.toggleDrawer();
  }, [navigation]);

  return (
    <Container style={styles.container}>
      <NoteList contentInsetTop={headerBarHeight} onScroll={handleScroll} />
      <HeaderBar style={headerBarStyle} onLayout={handleNoteListLayout}>
        <TouchableOpacity m="xs" p="xs" onPress={handleSidebarToggle}>
          <FeatherIcon name="menu" size={22} />
        </TouchableOpacity>
        <Box flex={1} alignItems="center">
          <Text fontWeight="bold">All Notes</Text>
        </Box>
        <TouchableOpacity m="xs" p="xs">
          <FeatherIcon name="more-vertical" size={22} />
        </TouchableOpacity>
      </HeaderBar>
    </Container>
  );
};

export default MainScreen;
