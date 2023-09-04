import { StyleSheet } from 'react-native';
import { Container } from '@/atoms';
import NoteList from '@/components/NoteList';
import HeaderBar from '@/components/HeaderBar';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const MainScreen = () => {
  return (
    <Container style={styles.container}>
      <NoteList />
      <HeaderBar />
    </Container>
  );
};

export default MainScreen;
