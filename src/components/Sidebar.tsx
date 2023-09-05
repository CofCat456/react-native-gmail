import { Box, Text } from '@/atoms';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { useCallback } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import BookList from './BookList';
import GmailLogo from './GmailLogo';

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

const Sidebar: React.FC<DrawerContentComponentProps> = ({ navigation }) => {
  const handleBookListItemPress = useCallback(() => {
    navigation.closeDrawer();
  }, [navigation]);

  return (
    <Box bg="$sidebarBackground" style={styles.container}>
      <SafeAreaView>
        <Box
          flexDirection="row"
          alignItems="center"
          gap="sm"
          mt="xs"
          pl="md"
          pb="sm"
          borderBottomColor="$sidebarSeparator"
          borderBottomWidth={1}
        >
          <GmailLogo width={28} height="100%" color="$sidebarForeground" />
          <Text variant="sidebar" fontSize={20} fontWeight="500">
            Gmail
          </Text>
        </Box>
      </SafeAreaView>
      <BookList onPressItem={handleBookListItemPress} />
    </Box>
  );
};

export default Sidebar;
