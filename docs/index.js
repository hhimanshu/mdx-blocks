import React from 'react'
import { Helmet } from 'react-helmet'
import { BlocksProvider } from '../index'
import pkg from '../package.json'
import Header from './header.mdx'
import Banner from './banner.mdx'
import Intro from './intro.mdx'
import Features from './features.mdx'
import Cards from './cards.mdx'
import Centered from './centered.mdx'
import Split from './split.mdx'
import Columns from './columns.mdx'
import PhotoCredits from './photo-credits.mdx'
import Footer from './footer.mdx'

import { funk as theme } from '../themes'

export default props =>
  <BlocksProvider
    {...theme}>
    <Helmet>
      <title>MDX Blocks</title>
      <meta
        name='description'
        content={pkg.description}
      />
      <link
        rel='stylesheet'
        href='https://fonts.googleapis.com/css?family=Poppins400:700:900|Roboto+Mono|Roboto400:600:700'
      />
    </Helmet>
    <Header />
    <Banner />
    <Intro />
    <Features />
    <Cards />
    <Centered />
    <Split />
    <Columns />
    <PhotoCredits />
    <Footer />
  </BlocksProvider>