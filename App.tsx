import { StatusBar } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import { Loading } from '@components/Loading';
import { THEME } from 'src/theme';
import { SingUp } from '@screens/SingUp';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  
  return (
    <GluestackUIProvider config={config} globalStyles={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      
      {fontsLoaded ? <SingUp/> : <Loading/>}
    </GluestackUIProvider>
  );
}