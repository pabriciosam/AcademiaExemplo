import { Input as GluestackInput, InputField } from "@gluestack-ui/themed";
import { KeyboardTypeOptions } from "react-native";

type Props = {
  placeHolder:string;
  keyboardType?:KeyboardTypeOptions;
  secureTextEntry?:boolean;
}

export function Input({placeHolder, keyboardType='default', secureTextEntry=false}:Props){
  return (
    <GluestackInput
      bg="$trueGray700"
      h={52}
      px={4}
      borderWidth={0}
      variant="outline"
      size="md"
      mb={10}
      $focus-borderColor="$green500"
      $focus-borderWidth={1}
      isDisabled={false}
      isInvalid={false}
      isReadOnly={false}
    >
      <InputField
        placeholder={placeHolder}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        placeholderTextColor={"$trueGray300"}
        color="$white"
        fontSize={"$md"}
        fontFamily="$body"
      />
    </GluestackInput>
  );
}