import React from "react";
import Image from "next/image";
import { Layout, Cards } from "../components";
import { Container } from "../components/container";
import { StyleHome, Button } from "../components/styles/index.styles";
import { gql, useQuery } from "@apollo/client";

const DesignCode = () => {
  const PageQueryOptions = {
    options: {
      paginate: {
        page: 1,
        limit: 100,
      },
    },
  };

  const PHOTO_QUERY = gql`
    query($options: PageQueryOptions) {
      photos(options: $options) {
        data {
          id
          title
          thumbnailUrl
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(PHOTO_QUERY, {
    variables: PageQueryOptions,
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;

  return (
    <Layout pageTitle="Popular">
      <StyleHome>
        <Container className="container">
          <div className="text">
            <h2>All your streaming services in one app</h2>
            <p>
              Get personal recommendations for movies and TV shows available on
              Netflix, Amazon Prime Video, hayu and many more.
            </p>
            <Button>
              <a>Discover movies & TV shows</a>
            </Button>
            <Button>
              <a>Features</a>
            </Button>
          </div>
          <div className="image">
            <Image
              src="/images/Justwatch-movies.png"
              height={200}
              width={350}
              sizes="(min-width: 759px) 800px"
            />
          </div>
        </Container>
      </StyleHome>
      <div className="photosContainer">
        {data.photos.data.map((item) => (
          <Container>
            <div>
              <p>
                {item.id} - {item.title}
              </p>
              <Image src={item.thumbnailUrl} height={300} width={350} />
            </div>
          </Container>
        ))}
      </div>
    </Layout>
  );
};

export default DesignCode;
