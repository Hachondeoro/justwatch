import styled from "@emotion/styled";
// import BackgroundImage from "./images/background-pattern.jpg";

export const StyledIndex = styled.div`
  .page-intro {
  }
`;
export const StyledDesignPlus = styled.section`
  background: #fff url("/images/background-pattern.jpg");
  padding: 40px 0;

  p:nth-child(2) {
    margin-bottom: none;
  }

  .container {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  .container .text,
  .container .image {
    flex: 1 100%;
  }

  img {
    object-fit: cover;
  }

  h2 {
    font-size: 1.75em;
    color: #000;
    margin-bottom: 1rem;

    @media (min-width: 1024px) {
      font-size: 2.75em;
    }
  }

  p {
    color: #000;
  }

  @media (min-width: 759px) {
    .container .text,
    .container .image {
      flex: 1;
    }
    .text {
      margin-right: 5%;
    }
  }
`;
export const StyleHome = styled.section`
  padding: 40px 0;

  p:nth-child(2) {
    margin-bottom: none;
  }

  .container {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  .container .text,
  .container .image {
    flex: 1 100%;
  }

  img {
    object-fit: cover;
    margin: 0 auto;
  }

  h2 {
    font-size: 2em;
    color: #ffffff;
    margin-bottom: 1rem;

    @media (min-width: 1024px) {
      font-size: 3em;
    }
  }

  p {
    color: #999c9f;
    text-align: center;
  }

  @media (min-width: 759px) {
    .container .text,
    .container .image {
      flex: 1;
    }
    .text {
      margin-right: 5%;
    }
  }
`;
export const StyleHomeSecondary = styled.section`
  padding: 80px 0;

  p:nth-child(2) {
    margin-bottom: none;
  }

  .container {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  .container .text,
  .container .image {
    flex: 1 100%;
  }

  img {
    object-fit: cover;
  }

  h2 {
    font-size: 1em;
    color: #ffffff;
    margin-bottom: 1rem;

    @media (min-width: 1024px) {
      font-size: 1.6em;
    }
  }
  h3 {
    font-size: 0.7em;
    color: #fbc501;
    margin-bottom: 1rem;
    letter-spacing: 2px;
    @media (min-width: 1024px) {
      font-size: 1.6em;
    }
  }

  p {
    color: #999c9f;
    text-align: center;
  }

  @media (min-width: 759px) {
    .container .text,
    .container .image {
      flex: 1;
    }
    .text {
      margin-right: 5%;
    }
  }
`;

export const Button = styled("button")`
  padding: 8px;
  background-color: #e7b600;
  border-radius: 10px;
  a {
    font-family: sans-serif;
    font-weight: bold;
    font-size: 0.8em;
    text-decoration: none;
    color: #000000;
  }
`;
