import { Box, Text } from '@/atoms';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { SafeAreaView, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

const Sidebar: React.FC<DrawerContentComponentProps> = () => {
  return (
    <Box bg="$sidebarBackground" style={styles.container}>
      <SafeAreaView>
        <Text variant="sidebar" m="lg">
          Im Yu
        </Text>
      </SafeAreaView>
    </Box>
  );
};

export default Sidebar;
