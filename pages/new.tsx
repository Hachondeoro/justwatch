import React from "react";
import Image from "next/image";
import { Layout } from "../components";
import { Container } from "../components/container";
import {
  StyleHome,
  Button,
  StyleHomeSecondary,
} from "../components/styles/index.styles";

const DesignCode = () => {
  return (
    <Layout pageTitle="New">
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
    </Layout>
  );
};

export default DesignCode;
