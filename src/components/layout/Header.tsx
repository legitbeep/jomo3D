import { Box, Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";

import ThemeToggle from "./ThemeToggle";
import ConnectBtn from "components/connector";

const Header = () => (
  <Flex as="header" width="full" align="center">
    <Heading as="h1" size="md">
      <Link href="/">Jomo3D</Link>
    </Heading>

    <Box marginLeft="auto">
      <ConnectBtn mr="16px" />
      <ThemeToggle />
    </Box>
  </Flex>
);

export default Header;
