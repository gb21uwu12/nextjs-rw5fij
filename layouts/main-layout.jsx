import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import { Footer } from '../components/footer';

export const MainLayout = props => {
  return (
    <>
      <Head>
        <title>{props.title} - Reds</title>
        <link rel="icon" href="https://emojicdn.elk.sh/🐙" />
      </Head>

      {props.children}
      <Box margin="64px" />
      <Footer />
    </>
  );
};
