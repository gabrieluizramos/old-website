import React from "react"

import { Layout } from '@gabrieluizramos/preferences/components';

import SEO from "../components/seo"
import Content from '../components/content';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" lang="en" />
    <Content lang="en" />
  </Layout>
);

export default IndexPage
