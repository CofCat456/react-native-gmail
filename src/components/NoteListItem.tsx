import { Box, Text } from '@/atoms';
import { Note } from '@/models';

interface ListItemProps extends Note {}

const NoteListItem: React.FC<ListItemProps> = ({ title, body }) => {
  return (
    <Box backgroundColor="$background">
      <Box backgroundColor="$background" px="lg" py="sm">
        <Text ellipsizeMode="tail" numberOfLines={1} fontWeight="bold" mb="xs">
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
      </Box>
    </Box>
  );
};

export default NoteListItem;
