import { MainLayout } from "../layouts/main-layout";
import { endpoint } from "../queries/api";
import { getAuthors } from "../queries/authors";
import { request } from "graphql-request";
import {
  Box,
  Text,
  Image,
  SimpleGrid,
  Flex,
  Badge,
  AspectRatio
} from "@chakra-ui/react";
import Link from "next/link";

export default function Home({ authors }) {
  return (
    <MainLayout title="Home">
      <Box padding="1em">
        <Box as="h1" fontSize="4xl">
          bABeS
        </Box>
      </Box>
      <SimpleGrid columns={{ base: 2, sm: 3, md: 6 }} spacing={2}>
        {authors.map((item) => (
          <ProductSimple item={item} key={item.name} />
        ))}
      </SimpleGrid>
    </MainLayout>
  );
}

const ProductSimple = (props) => {
  return (
    <Link href={`/author/${props.item.id}`}>
      <Box
        p="5"
        maxW="320px"
        borderWidth="1px"
        _hover={{ backgroundColor: "teal.800", cursor: "pointer" }}
      >
        <AspectRatio maxW="400px" ratio={10 / 21}>
          <Image
            borderRadius="md"
            src={props.item.picture.url}
            fallbackSrc="https://via.placeholder.com/150"
          />
        </AspectRatio>
        <Flex align="baseline" mt={2}>
          <Badge colorScheme="pink">{props.item.title}</Badge>
        </Flex>
        <Text mt={2} fontSize="sm" fontWeight="semibold" lineHeight="short">
          {props.item.name}
        </Text>
      </Box>
    </Link>
  );
};

export async function getServerSideProps(context) {
  const { authors } = await request(endpoint, getAuthors);

  return {
    props: { authors }
  };
}
