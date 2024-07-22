import { Center, Spinner } from "@gluestack-ui/themed";
import { THEME } from 'src/theme';

export function Loading(){
  return(
    <Center flex={1} bg='$trueGray700'>
      <Spinner color={THEME.colors.green[500]}/>
    </Center>
  );
}