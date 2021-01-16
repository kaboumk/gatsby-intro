import React from 'react';
import styled from '@emotion/styled';
import {css} from '@emotion/react';
import {Link } from 'gatsby';

const Footer = () => (
    <footer
        css={css`
            background: #eee;
            border-bottom: 1px solid #ddd;
            border-top: 1px solid #ddd;
            display: flex;
            position: absolute;
            width: 100%;
            bottom: 0;
            padding: 0.5rem calc((100vw - 1000px - 0.5rem) / 2);
        `}
    >
        <p>Made with ❤️ &nbsp; by &nbsp;
            <Link 
                css={css`text-decoration: none;`} 
                to="https://www.kaboum.net">
                    kaboum!!!
            </Link>
            </p>
    </footer>
)

export default Footer;