import { Theme } from '@/themes';
import { useTheme } from '@shopify/restyle';
import { StatusBar as NativeStatusBar } from 'react-native';

const StatusBar: React.FC = () => {
  const theme = useTheme<Theme>();

  return (
    <NativeStatusBar
      animated={true}
      backgroundColor={theme.colors.$windowBackground || 'white'} 
      barStyle={theme.statusBar?.barStyle}
    />
  );
};

export default StatusBar;
