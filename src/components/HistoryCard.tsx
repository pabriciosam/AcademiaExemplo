import { Heading, HStack, Text, VStack } from "@gluestack-ui/themed";

export function HistoryCard() {
  return (
    <HStack w="$full" px="$5" py="$4" bg="$gray600" rounded="$md"
      alignItems="center" justifyContent="space-between"
    >
      <VStack mr="$5">
        <Heading
          color="$white"
          fontSize="$md"
          textTransform="capitalize"
          fontFamily="$heading"
        >
          Costas
        </Heading>

        <Text color="$gray100" fontSize="$lg" numberOfLines={1}>Puxada Frontal</Text>
      </VStack>

      <Text color="$gray300" fontSize="$sm">
        08:56
      </Text>
    </HStack>
  );
}