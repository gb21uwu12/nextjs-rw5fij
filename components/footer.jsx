import { Box } from "@chakra-ui/react";
import { Home, SettingsAutomation } from "tabler-icons-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <Box
      height="38px"
      position="fixed"
      bottom={0}
      width="100vw"
      backgroundColor="teal"
      padding="1em"
      display="flex"
      flexDirection="row"
      justifyContent="space-around"
      alignItems="center"
      zIndex={1000}
    >
      <Box>
        <Link href="/">
          <Home />
        </Link>
      </Box>
      <Box>
        <SettingsAutomation />
      </Box>
    </Box>
  );
};
