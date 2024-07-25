import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { AuthRoutes } from './auth.routes'
import { THEME } from 'src/theme';
import { Box } from '@gluestack-ui/themed';

export function Routes(){
  const theme = DefaultTheme;
  const { colors } = THEME;

  theme.colors.background = colors.gray[700];

  return(
    <Box flex={1} bg="$trueGray700">
      <NavigationContainer theme={theme}>
        <AuthRoutes />
      </NavigationContainer>
    </Box>
  )
}