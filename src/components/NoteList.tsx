import { Note } from '@/models';
import { Theme } from '@/themes';
import { createBox } from '@shopify/restyle';
import { useCallback } from 'react';
import { FlatList, FlatListProps } from 'react-native';
import NoteListItem from './NoteListItem';
import mockNote from '@/fixtures/note';

interface Props { }

const StyledFlatList = createBox<Theme, FlatListProps<Note>>(FlatList);

const NoteList: React.FC<Props> = () => {
  const renderItem = useCallback(({ item }: { item: Note }) => {
    return <NoteListItem {...item} />;
  }, []);

  return (
    <StyledFlatList
      width="100%"
      contentInsetAdjustmentBehavior="automatic"
      data={mockNote}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

export default NoteList;
