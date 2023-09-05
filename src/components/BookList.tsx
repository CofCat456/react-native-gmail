import { Book } from '@/models';
import { Theme } from '@/themes';
import { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import { ColorProps, createBox } from '@shopify/restyle';
import { useCallback } from 'react';
import { FlatList, FlatListProps } from 'react-native';
import BookListItem from './BookListItem';
import mockBook from '@/fixtures/book';

const StyledFlatList = createBox<Theme, FlatListProps<Book>>(FlatList);
const StyledBootomSheetFlatList = createBox<Theme, FlatListProps<Book>>(
  BottomSheetFlatList
);

type Props = {
  inBottomSheet?: boolean;
  onPressItem: (bookId: string) => void;
  headerComponent?: React.FC<any>;
} & ColorProps<Theme>;

const BookList: React.FC<Props> = ({
  inBottomSheet,
  onPressItem,
  headerComponent,
  color
}) => {
  const renderItem = useCallback(
    ({ item }: { item: Book }) => {
      return <BookListItem {...item} onPress={onPressItem} color={color} />;
    },
    [onPressItem]
  );

  const ListComponent = inBottomSheet
    ? StyledBootomSheetFlatList
    : StyledFlatList;

  return (
    <ListComponent
      contentInsetAdjustmentBehavior="automatic"
      scrollEventThrottle={16}
      data={mockBook}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      width="100%"
      pt="sm"
      ListHeaderComponent={headerComponent}
    />
  );
};

export default BookList;
