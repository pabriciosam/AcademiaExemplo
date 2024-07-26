import { Heading, HStack, Text, VStack } from "@gluestack-ui/themed";
import { UserPhoto } from "./UserPhoto";

export function HomeHeader(){
  return(
    <HStack
      bg="$trueGray700"
      pt={"$16"}
      pb={"$5"}
      px={"$8"}
      alignItems="center"
      gap={"$4"}
    >
      <UserPhoto
        alt="Imagem do usuário"
        w="$16"
        h="$16"
        source={{uri: "https://github.com/pabriciosam.png"}}
      />
      <VStack>
        <Text color="$trueGray100" fontSize={"$sm"}>
          Olá,
        </Text>
        <Heading color="$trueGray100" fontSize={"$md"}>
          Pabrício Samagaio
        </Heading>
      </VStack>
    </HStack>
  );
}