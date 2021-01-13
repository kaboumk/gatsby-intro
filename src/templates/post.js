import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/react';
import Layout from '../components/layout';
import ReadLink from '../components/read-link'; 

const PostTemplate = () => (
    <Layout>
        <h1>post title</h1>
        <p
            css={css`
                front-size: 0.75rem;
            `}
        >
            Posted by Author
        </p>
        <p>Post body goes here</p>
        <ReadLink to="/">&larr; back to all posts</ReadLink>
    </Layout>
)

export default PostTemplate;