import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SearchBar from '../components/SearchBar'
import styled, { ThemeProvider, injectGlobal } from 'styled-components'
import Img from 'gatsby-image'
import { Icon } from '../components/Utils/common-elements'
import theme from '../theme'
import { media } from '../utils/style-utils'

injectGlobal`
  html, body, #___gatsby,  #___gatsby>div {
    height:100vh;
    width: 100vw;
    padding: 0;
    margin:0;
    background-color: ${theme.backgroundColor};

    background:
      radial-gradient(black 15%, transparent 16%) 0 0,
      radial-gradient(black 15%, transparent 16%) 8px 8px,
      radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 0 1px,
      radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 8px 9px;
      background-color:#282828;
      background-size:16px 16px;
}
`
const Container = styled.div`
  margin: auto;
  height: 100%;
  color: ${props => props.theme.color};
  font-size: ${props => props.theme.fontSize};
  font-family: ${props => props.theme.fontPrimary};
`
const Grid = styled.div`
  display: grid;
  min-height: 100%;
  max-width: 960px;
  grid-gap: 1.5rem;
  grid-template-rows: auto auto 1fr;
  margin: auto;
  padding: 0 40px;
  ${media.desktop`padding: 0 40px;`}
  ${media.tablet`
  grid-gap: 1rem;
  padding: 0 40px;
  `}
  ${media.phone`padding: 0 10px;`}
`
const ContentWrapper = styled.div``

const TemplateWrapper = ({ children, data, location }) => (
  <ThemeProvider theme={theme}>
    <Container>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          {
            name: 'description',
            content: 'Sample',
          },
          {
            name: 'keywords',
            content: 'sample, something',
          },
        ]}
      />
      <Grid>
        <Header
          siteMetadata={data.site.siteMetadata}
          headerData={data.headerData}
        />
        <SearchBar location={location} />
        <ContentWrapper>{children()}</ContentWrapper>
      </Grid>
    </Container>
  </ThemeProvider>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

//Query
export const query = graphql`
  query ImageQuery {
    site {
      siteMetadata {
        title
        tagline
        welcomeMessage
      }
    }
  }
`
