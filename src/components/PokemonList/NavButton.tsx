import { As, Button, ButtonProps, HStack, Icon, Text } from "@chakra-ui/react";
import Link from "next/link";

interface NavButtonProps extends ButtonProps {
  icon: As;
  href: string;
  label: string;
}

export const NavButton = (props: NavButtonProps) => {
  const { icon, label, href, ...buttonProps } = props;
  return (
    <Button variant="ghost" justifyContent="start" {...buttonProps}>
      <Link href={href}>
        <HStack spacing="3">
          <Icon as={icon} boxSize="6" color="subtle" />
          <Text>{label}</Text>
        </HStack>
      </Link>
    </Button>
  );
};
