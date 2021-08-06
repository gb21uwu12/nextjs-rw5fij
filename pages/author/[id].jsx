import { MainLayout } from "../../layouts/main-layout";
import { endpoint } from "../../queries/api";
import { getPostByAuthorsId, listAuthorId } from "../../queries/authors";
import { Box, Text, Image, SimpleGrid, Flex, Badge } from "@chakra-ui/react";
import Link from "next/link";

import { request } from "graphql-request";

export default function AuthorId({ posts }) {
  return (
    <MainLayout title="Home">
      <Box padding="1em">
        <Box as="h1" fontSize="2xl">
          {posts[0].author.name}
        </Box>
      </Box>
      <SimpleGrid>
        {posts.map((item) => (
          <ProductSimple item={item} key={item.title} />
        ))}
      </SimpleGrid>
    </MainLayout>
  );
}

const ProductSimple = (props) => {
  return (
    <Link href={`/post/${props.item.id}`}>
      <Box
        p="5"
        maxW="320px"
        borderWidth="1px"
        _hover={{ backgroundColor: "teal.800", cursor: "pointer" }}
      >
        <Image
          borderRadius="md"
          src={props.item.coverImage.url}
          fallbackSrc="https://via.placeholder.com/150"
        />
        <Flex align="baseline" mt={2}>
          <Badge colorScheme="pink">{props.item.title}</Badge>
        </Flex>
        <Text mt={2} fontSize="sm" fontWeight="semibold" lineHeight="short">
          {props.item.excerpt}
        </Text>
      </Box>
    </Link>
  );
};

export async function getStaticPaths() {
  const { authors } = await request(endpoint, listAuthorId);
  const path = [];
  authors.map((item) => {
    return path.push({ params: { id: item.id } });
  });
  return {
    paths: path,
    fallback: false
  };
}

export async function getStaticProps(context) {
  const { posts } = await request(
    endpoint,
    getPostByAuthorsId(context.params.id)
  );
  console.log(posts);
  return {
    props: { posts }
  };
}
