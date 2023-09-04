import { Theme } from '@/themes';
import RNBottomSheet, { BottomSheetProps } from '@gorhom/bottom-sheet';
import { ColorProps, useTheme } from '@shopify/restyle';
import { forwardRef } from 'react';

type Props = BottomSheetProps & ColorProps<Theme>;

const BottomSheet = forwardRef<RNBottomSheet, Props>(({ ...rest }, ref) => {
  const theme = useTheme<Theme>();
  // const handleColor = theme.colors['$background'];
  const bgColor = theme.colors['$background'];

  return (
    <RNBottomSheet
      {...rest}
      ref={ref}
      // handleStyle={{
      //   backgroundColor: handleColor,
      //   opacity: 0.8
      // }}
      backgroundStyle={{
        backgroundColor: bgColor
      }}
    />
  );
});

export default BottomSheet;
