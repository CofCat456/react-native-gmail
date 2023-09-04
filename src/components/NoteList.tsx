import { Note } from '@/models';
import { Theme } from '@/themes';
import { createBox } from '@shopify/restyle';
import { useCallback } from 'react';
import {
  FlatListProps,
  NativeScrollEvent,
  NativeSyntheticEvent
} from 'react-native';
import NoteListItem from './NoteListItem';
import mockNote from '@/fixtures/note';
import Animated, { AnimateProps } from 'react-native-reanimated';
import { Box } from '@/atoms';

interface Props {
  contentInsetTop: number;
  onScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
  onItemPress: (noteId: string) => void;
  onItemSwipeLeft: (noteId: string, cancel: () => void) => void;
}

const StyledFlatList = createBox<Theme, AnimateProps<FlatListProps<Note>>>(
  Animated.FlatList
);

const NoteList: React.FC<Props> = ({
  onScroll,
  onItemPress,
  onItemSwipeLeft,
  contentInsetTop
}) => {
  const renderItem = useCallback(
    ({ item }: { item: Note }) => {
      return (
        <NoteListItem
          {...item}
          onPress={onItemPress}
          onSwipeLeft={onItemSwipeLeft}
        />
      );
    },
    [onItemPress, onItemSwipeLeft]
  );

  return (
    <StyledFlatList
      width="100%"
      contentInsetAdjustmentBehavior="automatic"
      data={mockNote}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      onScroll={onScroll}
      scrollEventThrottle={16}
      ListHeaderComponent={<Box width="100%" height={contentInsetTop} />}
    />
  );
};

export default NoteList;
