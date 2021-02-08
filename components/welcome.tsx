import React from "react";
import Image from "next/image";
import { Container } from "./container";
import { StyleHome, Button, StyleHomeSecondary } from "./styles/index.styles";

const DesignCode = () => {
  return (
    <>
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
      <StyleHomeSecondary>
        <Container className="container">
          <div className="image">
            <Image
              src="/images/all-in-one-place.png"
              height={200}
              width={350}
              sizes="(min-width: 759px) 800px"
            />
          </div>
          <div className="text">
            <h3>ALL IN ONE PLACE</h3>
            <h2>Your streaming guide</h2>
            <p>
              Get personal recommendations and see what’s new across your
              favorite streaming services.
            </p>
          </div>
        </Container>
      </StyleHomeSecondary>
      <StyleHomeSecondary>
        <Container className="container">
          <div className="text">
            <h3>ONE SEARCH</h3>
            <h2>One search to rule them all</h2>
            <p>
              Never go back and forth between your services again to find out if
              a movie or TV show is available.
            </p>
          </div>
          <div className="image">
            <Image
              src="/images/one-search.png"
              height={200}
              width={350}
              sizes="(min-width: 759px) 800px"
            />
          </div>
        </Container>
      </StyleHomeSecondary>
      <StyleHomeSecondary>
        <Container className="container">
          <div className="image">
            <Image
              src="/images/one-watchlist.png"
              height={200}
              width={350}
              sizes="(min-width: 759px) 800px"
            />
          </div>
          <div className="text">
            <h3>ONE WATCHLIST</h3>
            <h2>Combine all your watchlists</h2>
            <p>
              Keep track of all the TV shows and movies you want to watch in one
              list across all your devices
            </p>
          </div>
        </Container>
      </StyleHomeSecondary>
      <StyleHome>
        <Container className="container">
          <div className="text" style={{ textAlign: "center" }}>
            <Image
              src="/images/justwatch-logo-small.svg"
              height={40}
              width={40}
            />
            <h2>
              Get recommendations from all your favorite streaming services in
              one place
            </h2>
            <Button>
              <a>Discover movies & TV shows</a>
            </Button>
          </div>
        </Container>
      </StyleHome>
    </>
  );
};

export default DesignCode;
