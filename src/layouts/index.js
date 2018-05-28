import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SearchBar from '../components/SearchBar'
import styled, { ThemeProvider, injectGlobal } from 'styled-components'
import Img from 'gatsby-image'
import { Icon } from '../components/utils/common-elements'
import theme from '../theme'

injectGlobal`
  html, body, #___gatsby,  #___gatsby>div {
    height:100vh;
    width: 100vw;
    padding: 0;
    margin:0;
    background-color: ${theme.backgroundColor};
}
`
const Container = styled.div`
  margin: auto;
  height: 100%;
  color: ${props => props.theme.color};
  font-size: ${props => props.theme.fontSize};
  font-family: ${props => props.theme.fontPrimary};
  background-color: ${props => props.theme.backgroundColor};
`
const Grid = styled.div`
  display: grid;
  min-height: 100%;
  max-width: 960px;
  grid-gap: 1.5rem;
  grid-template-rows: auto auto 1fr;
  margin: auto;
  padding: 0 4rem;
`
const ContentWrapper = styled.div``

const TemplateWrapper = ({ children, data }) => (
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
        <SearchBar />
        <ContentWrapper>{children()}</ContentWrapper>

        {/* <Footer siteMetadata={data.site.siteMetadata} profileImage={data.profileImage}/> */}
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
    profileImage: imageSharp(id: { regex: "/profile-image/" }) {
      resolutions(width: 64) {
        ...GatsbyImageSharpResolutions_withWebp_tracedSVG
      }
    }
    site {
      siteMetadata {
        title
        tagline
        welcomeMessage
      }
    }
  }
`
