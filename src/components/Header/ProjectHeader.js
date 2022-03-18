import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () => (
    <Container>
        <Div1>
            <Link href="/">
                <a style={{ display: 'flex', alignItems: 'center', color: "white" }}>
                    <DiCssdeck size="3rem" /> <span>Portfolio</span>
                </a>
            </Link>
        </Div1>
        <Div3>
            <SocialIcons href="https://github.com/irfan378">
                <AiFillGithub size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://www.linkedin.com/in/irfan-farooq-707664214/">
                <AiFillLinkedin size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://twitter.com/irfan31345678">
                <AiFillTwitterCircle size="3rem" />
            </SocialIcons>
        </Div3>
    </Container >
);

export default Header;
