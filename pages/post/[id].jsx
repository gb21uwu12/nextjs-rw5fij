import { MainLayout } from "../../layouts/main-layout";
import { endpoint } from "../../queries/api";
import { getPostById } from "../../queries/authors";
import { Box, Container } from "@chakra-ui/react";

import { request } from "graphql-request";

export default function AuthorId(post) {
  const item = post.post;
  return (
    <MainLayout title={item.author.name}>
      <Box padding="1em">
        <Box as="h1" fontSize="2xl">
          {item.title}
        </Box>
      </Box>
      <Container>
        <div dangerouslySetInnerHTML={{ __html: item.content.html }} />
      </Container>
    </MainLayout>
  );
}

export async function getServerSideProps(context) {
  const { post } = await request(endpoint, getPostById(context.params.id));
  return {
    props: { post }
  };
}
