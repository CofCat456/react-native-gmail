import { Box, Text } from '@/atoms';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { useCallback } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import BookList from './BookList';

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

const Sidebar: React.FC<DrawerContentComponentProps> = ({ navigation }) => {
  const handleBookListItemPress = useCallback(() => {
    navigation.closeDrawer()
  }, [navigation])

  return (
    <Box bg="$sidebarBackground" style={styles.container}>
      <SafeAreaView>
        <Text variant="sidebar" m="lg">
          Im Yu
        </Text>
      </SafeAreaView>
      <BookList onPressItem={handleBookListItemPress} />
    </Box>
  );
};

export default Sidebar;
