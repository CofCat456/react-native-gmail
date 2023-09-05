import { Box, Text, TouchableOpacity } from '@/atoms';
import activeThemeId from '@/states/theme';
import { ThemeMeta, ThemeNames } from '@/themes';
import { useAtom } from 'jotai';
import { selectAtom } from 'jotai/utils';
import { useCallback, useMemo } from 'react';
import FeatherIcon from './Icon';

interface Props {
  theme: ThemeMeta;
  onPress: (theme: ThemeNames) => void;
}

const ThemeListItem: React.FC<Props> = ({ theme, onPress }) => {
  const [isActive] = useAtom(
    useMemo(() => selectAtom(activeThemeId, v => v === theme.id), [theme])
  );

  const handlePress = useCallback(() => {
    onPress(theme.id);
  }, [theme, onPress]);

  return (
    <TouchableOpacity
      minHeight={44}
      flexDirection="row"
      alignItems="center"
      px="lg"
      onPress={handlePress}
    >
      <Box width={32} justifyContent="center" alignItems="center">
        {isActive ? (
          <FeatherIcon name="check" size={20} color="$primary" />
        ) : null}
      </Box>
      <Text>{theme.name}</Text>
    </TouchableOpacity>
  );
};

export default ThemeListItem;
