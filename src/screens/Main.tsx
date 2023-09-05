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
import { useCallback, useRef, useState } from 'react';
import useStickyHeader from '@/hooks/useStickyHeader';
import MoveNoteSheet from '@/components/MoveNoteSheet';
import ThemePicker from '@/components/ThemePicker';

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
  const refThemePicker = useRef<ThemePicker>(null);
  const refMoveNoteSheet = useRef<MoveNoteSheet>(null);

  const {
    handleNoteListLayout,
    handleScroll,
    headerBarStyle,
    headerBarHeight
  } = useStickyHeader();

  const [concealNoteListItem, setConcealNoteListItem] = useState<
    (() => void) | null
  >(null);

  const handleSidebarToggle = useCallback(() => {
    navigation.toggleDrawer();
  }, [navigation]);

  const handleMenuToggle = useCallback(() => {
    const { current: menu } = refThemePicker;
    if (menu) menu.show();
  }, []);

  const handleNoteListItemPress = useCallback((noteId: string) => {
    navigation.navigate('Detail', {
      noteId
    });
  }, []);

  const handleNoteListItemSwipeLeft = useCallback(
    (_noteId: string, conceal: () => void) => {
      const { current: menu } = refMoveNoteSheet;

      if (menu) {
        menu.show();
        setConcealNoteListItem(() => conceal);
      }
    },
    []
  );

  const handleMoveNoteSheetClose = useCallback(() => {
    if (concealNoteListItem) {
      concealNoteListItem();
      setConcealNoteListItem(null);
    }
  }, [concealNoteListItem]);

  return (
    <Container style={styles.container}>
      <NoteList
        contentInsetTop={headerBarHeight}
        onScroll={handleScroll}
        onItemPress={handleNoteListItemPress}
        onItemSwipeLeft={handleNoteListItemSwipeLeft}
      />
      <HeaderBar style={headerBarStyle} onLayout={handleNoteListLayout}>
        <TouchableOpacity m="xs" p="xs" onPress={handleSidebarToggle}>
          <FeatherIcon name="menu" size={22} />
        </TouchableOpacity>
        <Box flex={1} alignItems="center">
          <Text fontWeight="bold">All Notes</Text>
        </Box>
        <TouchableOpacity m="xs" p="xs" onPress={handleMenuToggle}>
          <FeatherIcon name="more-vertical" size={22} />
        </TouchableOpacity>
      </HeaderBar>
      <MoveNoteSheet
        ref={refMoveNoteSheet}
        onClose={handleMoveNoteSheetClose}
      />
      <ThemePicker ref={refThemePicker} />
    </Container>
  );
};

export default MainScreen;
