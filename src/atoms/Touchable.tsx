import React from 'react';
import Pressable, { PressableProps } from './Pressable';
import { Platform } from 'react-native';
import {
  backgroundColor,
  BackgroundColorProps,
  backgroundColorShorthand,
  BackgroundColorShorthandProps,
  border,
  BorderProps,
  composeRestyleFunctions,
  opacity,
  OpacityProps,
  useRestyle
} from '@shopify/restyle';
import { Theme } from '@/themes';

type RestyleProps = BackgroundColorProps<Theme> &
  BackgroundColorShorthandProps<Theme> &
  BorderProps<Theme> &
  OpacityProps<Theme>;

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  backgroundColorShorthand,
  backgroundColor,
  border,
  opacity
]);

interface Props extends PressableProps {
  pressed?: RestyleProps;
}

const Touchable = ({ pressed, style, ...rest }: Props) => {
  // @ts-ignore
  const { style: pressedStyle } = pressed
    ? useRestyle(restyleFunctions, pressed)
    : { style: undefined };

  return (
    <Pressable
      {...rest}
      // @ts-ignore
      style={({ pressed: isPressed }) =>
        isPressed ? [style, pressedStyle] : style
      }
    />
  );
};

export const TouchableOpacity: React.FC<Props> = props => (
  <Touchable {...props} pressed={{ opacity: Platform.select({ ios: 0.6 }) }} />
);

export default Touchable;
