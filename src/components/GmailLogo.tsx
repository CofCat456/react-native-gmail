import LogoSVG from '@/images/gmail-logo.svg';
import { Theme } from '@/themes';
import { ColorProps, useResponsiveProp, useTheme } from '@shopify/restyle';
import { SvgProps } from 'react-native-svg';

type Props = Omit<SvgProps, 'color'> & ColorProps<Theme>;

const GmailLogo: React.FC<Props> = ({ color = '$foreground', ...rest }) => {
  const theme = useTheme<Theme>();
  const colorProp = useResponsiveProp(color);
  const vColor = theme.colors[colorProp || '$foreground'];

  return <LogoSVG {...rest} color={vColor} />;
};

export default GmailLogo;
