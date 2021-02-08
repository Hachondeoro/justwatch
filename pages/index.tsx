import React, { FC, useState, useEffect } from "react";
import { useRouter } from "next/router";

import { Layout, Container, Cards } from "../components";
import { StyledIndexPage } from "../components/styles/home.styles";
import { getContentList } from "../lib/content";
import DesignCode from "../components/design-code";
import ExperimentsSection from "../components/experiments";
import Welcome from "../components/welcome";

import Link from "next/link";
import { gql, useQuery } from "@apollo/client";

//@ts-ignore
const Index: FC = ({ selectedWorks }) => {
  const { pathname } = useRouter();
  const [items, setItems] = useState([]);

  const PageQueryOptions = {
    options: {
      paginate: {
        page: 1,
        limit: 20,
      },
    },
  };

  const PLAYGROUND_QUERY = gql`
    query($options: PageQueryOptions) {
      posts(options: $options) {
        data {
          id
          title
        }
        meta {
          totalCount
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(PLAYGROUND_QUERY, {
    variables: PageQueryOptions,
  });

  if (loading) return "Loading...";
  if (error) return "Something Bad Happened";

  return (
    <Layout pathname={pathname} pageTitle="Nextjs Starter Peacock">
      <StyledIndexPage>
        {/* {data.posts.data.slice(0, 2).map((item) => (
          <p>
            {item.id} - {item.title}
          </p>
        ))} */}
        <Welcome />
        <DesignCode />
        <ExperimentsSection />
      </StyledIndexPage>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const works = await getContentList("work");
  const selectedWorks = works.filter((work) => work.selectedWork);

  return {
    props: {
      selectedWorks,
    },
  };
};

export default Index;
