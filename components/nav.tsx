import React, { useContext } from "react";
import Link from "next/link";

import { NavSection, StyledHamburger } from "./styles/nav.styles";
import Logo from "./logo";
import { Container } from "./container";
import SiteConfig from "../config/index.json";
import { MenuContext } from ".";
import Image from "next/image";

const Nav = () => {
  const menuContext = useContext(MenuContext);

  const { toggleMenuOpen, menuOpen } = menuContext;

  return (
    <NavSection>
      <Container>
        <nav className="navWrapper">
          <div className="navLeft">
            <Link href="/">
              <a className="no-underline">
                <div className="image">
                  <Image
                    src="/images/JustWatch-logo-large.png"
                    height={45}
                    width={300}
                  />
                </div>
              </a>
            </Link>
          </div>

          <div className="navRight">
            <StyledHamburger
              menuOpen={menuOpen}
              onClick={toggleMenuOpen}
            ></StyledHamburger>

            <ul className="navLinkList">
              <li className="navLinkItem">
                <Link href="/popular">
                  <a>Popular</a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </Container>
    </NavSection>
  );
};

export default Nav;
