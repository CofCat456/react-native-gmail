import { Theme } from '@/themes';
import { BoxProps } from '@shopify/restyle';
import Box from './Box';
import { StyleProp, ViewStyle } from 'react-native';

type Props = BoxProps<Theme> & {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle> | undefined;
};

const Container: React.FC<Props> = props => {
  return (
    <Box {...props} flex={1} backgroundColor="$background">
      {props.children}
    </Box>
  );
};

export default Container;
