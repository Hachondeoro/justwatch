import React from "react";
import {
  StyledFooterSection,
  GitHubIcon,
  CodepenIcon,
  TwitterIcon,
} from "./styles/footer.styles";
import { Container } from "./container";

const Footer = () => (
  <StyledFooterSection>
    <Container>
      <p className="about-site">
        Built with NextJS, TypeScript Emotion and Vercel.
      </p>
    </Container>
  </StyledFooterSection>
);

export default Footer;
