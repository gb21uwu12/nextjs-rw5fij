import { MainLayout } from '../layouts/main-layout';
import { endpoint } from '../queries/api';
import { getAuthors } from '../queries/authors';
import { request } from 'graphql-request';
import { Box, Text, Image, SimpleGrid, Flex, Badge } from '@chakra-ui/react';

export default function Home({ authors }) {
  return (
    <MainLayout title="Home">
      <Box padding="1em">
        <Box as="h1" fontSize="4xl">
          bABeS
        </Box>
      </Box>
      <SimpleGrid columns={{ base: 2, sm: 3, md: 6 }} spacing={2}>
        {authors.map(item => (
          <ProductSimple item={item} key={item.name} />
        ))}
      </SimpleGrid>
    </MainLayout>
  );
}

const IMAGE =
  'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';

const ProductSimple = props => {
  return (
    <Box
      p="5"
      maxW="320px"
      borderWidth="1px"
      _hover={{ backgroundColor: 'teal.800', cursor: 'pointer' }}
    >
      <Image borderRadius="md" src={props.item.picture.url} />
      <Flex align="baseline" mt={2}>
        <Badge colorScheme="pink">{props.item.title}</Badge>
      </Flex>
      <Text mt={2} fontSize="sm" fontWeight="semibold" lineHeight="short">
        {props.item.name}
      </Text>
    </Box>
  );
};

export async function getStaticProps(context) {
  const { authors } = await request(endpoint, getAuthors);

  return {
    props: { authors }
  };
}
