import { Center, Heading, ScrollView, Text, VStack, Image } from '@gluestack-ui/themed';
import BackgroundImg from '@assets/background2x.png';
import LogoSVG from '@assets/logo.svg';
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { useNavigation } from '@react-navigation/native';

export function SingUp(){
  const navigation = useNavigation();

  function handleGoBack(){
    navigation.goBack();
  }

  return(
    <ScrollView contentContainerStyle={{ flexGrow:1 }} showsVerticalScrollIndicator={false}>
      <VStack flex={1}>
        <Image
          source={BackgroundImg}
          w='$full'
          h={624}
          defaultSource={BackgroundImg}
          alt='Pessoas treinando'
          position='absolute'
        />

        <VStack flex={1} px='$10' pb={'$16'}>
          <Center my='$24'>
            <LogoSVG />
            
            <Text color='$gray100' fontSize={'$sm'}>
              Treine sua mente e seu corpo
            </Text>
          </Center>

          <Center flex={1} gap={'$2'}>
            <Heading color='$gray100' fontSize={'$xl'} mb={6} fontFamily='$heading'>
              Acesse sua conta
            </Heading>

            <Input
              placeholder='Nome'
            />
            <Input
              placeholder='E-mail'
              keyboardType='email-address'
              autoCapitalize='none'
            />
            <Input
              placeholder='Senha'
              secureTextEntry
            />

            <Button title='Criar e acessar'/>
          </Center>

          <Button
            title='Voltar para o login'
            variant='outline'
            onPress={handleGoBack}
          />
        </VStack>
      </VStack>
    </ScrollView>
  );
}