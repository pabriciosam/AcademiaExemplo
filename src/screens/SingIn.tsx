import { Center, Heading, ScrollView, Text, VStack } from '@gluestack-ui/themed';
import BackgroundImg from '@assets/background2x.png';
import { Image } from 'react-native';
import LogoSVG from '@assets/logo.svg';
import { Input } from '@components/Input';
import { Button } from '@components/Button';

export function SingIn(){
  return(
    <ScrollView contentContainerStyle={{ flexGrow:1 }} showsVerticalScrollIndicator={false}>
      <VStack flex={1} bg='$trueGray700' paddingHorizontal={20} pb={32}>
        <Image
          source={BackgroundImg}
          alt='Imagem Background'
          resizeMode='contain'
          position='absolute'
        />

        <Center my='$24'>
          <LogoSVG />
          
          <Text color='$trueGray100' fontSize={'$sm'}>
            Treine sua mente e seu corpo
          </Text>
        </Center>

        <Center>
          <Heading color='$trueGray100' fontSize={'$xl'} mb={6} fontFamily='$heading'>
            Acesse sua conta
          </Heading>

          <Input
            placeHolder='E-mail'
            keyboardType='email-address'
          >
          </Input>
          <Input
            placeHolder='Senha'
            secureTextEntry={true}
          >
          </Input>

          <Button
            title='Acessar'
          ></Button>
        </Center>

        <Center mt={124}>
          <Text color='$trueGray100' fontSize={'$sm'} fontFamily='$body'>
            Ainda não tem acesso?
          </Text>

          <Button
            title='Criar conta'
            variant='outline'
          ></Button>
        </Center>
      </VStack>
    </ScrollView>
  );
}