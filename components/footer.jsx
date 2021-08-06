import { Box } from '@chakra-ui/react';
import { Home, SettingsAutomation } from 'tabler-icons-react';

export const Footer = () => {
  return (
    <Box
      height="64px"
      position="fixed"
      bottom={0}
      width="100vw"
      backgroundColor="teal"
      padding="1em"
      display="flex"
      flexDirection="row"
      justifyContent="space-around"
      zIndex={1000}
    >
      <Box>
        <Home />
      </Box>
      <Box>
        <SettingsAutomation />
      </Box>
    </Box>
  );
};
