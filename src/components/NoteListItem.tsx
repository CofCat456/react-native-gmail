import { Box, Text, TouchableOpacity } from '@/atoms';
import { Note } from '@/models';
import { useCallback } from 'react';
import NoteListItemActionView from './NoteListItemActionView';
import SwipeableView from './SwiperableView';

interface ListItemProps extends Note {
  onPress: (noteId: string) => void;
  onSwipeLeft?: (nodeId: string, done: () => void) => void;
}

const NoteListItem: React.FC<ListItemProps> = ({
  id,
  title,
  body,
  onPress,
  onSwipeLeft
}) => {
  const handlePress = useCallback(() => {
    onPress(id);
  }, [id, onPress]);

  const handleSwipeLeft = useCallback(
    (done: () => void) => {
      onSwipeLeft && onSwipeLeft(id, done);
    },
    [id, onSwipeLeft]
  );

  const renderBackView = useCallback(
    ({ progress }: any) => <NoteListItemActionView progress={progress} />,
    []
  );

  return (
    <SwipeableView
      bg="yellow"
      onSwipeLeft={handleSwipeLeft}
      backView={renderBackView}
    >
      <Box bg="$background">
        <TouchableOpacity
          bg="$background"
          px="lg"
          py="sm"
          onPress={handlePress}
        >
          <Text
            ellipsizeMode="tail"
            numberOfLines={1}
            fontWeight="bold"
            mb="xs"
          >
            {title}
          </Text>
          <Text
            ellipsizeMode="tail"
            numberOfLines={2}
            fontSize={14}
            opacity={0.7}
          >
            {body}
          </Text>
        </TouchableOpacity>
      </Box>
    </SwipeableView>
  );
};

export default NoteListItem;
