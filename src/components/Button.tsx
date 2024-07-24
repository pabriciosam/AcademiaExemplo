import { Button as GluestackButton, ButtonText } from "@gluestack-ui/themed";

type Props = {
  title: string;
  variant?: "outline" | "solid";
  mt?:number;
}

export function Button({title, variant = 'solid', mt}:Props){
  return(
    <GluestackButton
      w={"$full"}
      h={52}
      bg={variant === "outline" ? "transparent" : "$green700"}
      borderWidth={variant === "outline" ? 1 : 0}
      borderColor="$green500"
      mt={mt}
      rounded={"$md"}
      variant={variant}
      isDisabled={false}
      isFocusVisible={false}
    >
      <ButtonText
        color={variant === "outline" ? "$green500" : "$white"}
        fontFamily="$heading"
        fontSize={"$sm"}
      >
        {title}
      </ButtonText>
    </GluestackButton>
  );
}