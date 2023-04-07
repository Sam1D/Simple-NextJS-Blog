import React from "react";
import Head from "next/head";

import AllPostsComponent from "@/components/page/posts/all-posts";

import { PostData, getAllPosts } from "@/helpers/posts-util";
import { GetStaticProps } from "next";

interface AllPostsPageProps {
  posts: PostData[];
}

function AllPostsPage(props: AllPostsPageProps) {
  const { posts } = props;

  return (
    <React.Fragment>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="A list of all programming-related tutorial and posts!"
        />
      </Head>

      <AllPostsComponent data={posts} />
    </React.Fragment>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
};

export default AllPostsPage;
