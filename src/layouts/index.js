import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SearchBar from '../components/SearchBar'
import styled, {ThemeProvider, injectGlobal} from 'styled-components'
import Img from 'gatsby-image'
import {Icon} from '../components/utils/common-elements'
import theme from '../theme'

injectGlobal `
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

/*
background-image: repeating-linear-gradient(transparent, transparent 50px, rgba(0,0,0,.4) 50px, rgba(0,0,0,.4) 53px, transparent 53px, transparent 63px, rgba(0,0,0,.4) 63px, rgba(0,0,0,.4) 66px, transparent 66px, transparent 116px, rgba(0,0,0,.5) 116px, rgba(0,0,0,.5) 166px, rgba(255,255,255,.2) 166px, rgba(255,255,255,.2) 169px, rgba(0,0,0,.5) 169px, rgba(0,0,0,.5) 179px, rgba(255,255,255,.2) 179px, rgba(255,255,255,.2) 182px, rgba(0,0,0,.5) 182px, rgba(0,0,0,.5) 232px, transparent 232px),
repeating-linear-gradient(270deg, transparent, transparent 50px, rgba(0,0,0,.8) 50px, rgba(0,0,0,.8) 53px, transparent 53px, transparent 63px, rgba(0,0,0,.4) 63px, rgba(0,0,0,.4) 66px, transparent 66px, transparent 116px, rgba(0,0,0,.5) 116px, rgba(0,0,0,.5) 166px, rgba(255,255,255,.2) 166px, rgba(255,255,255,.2) 169px, rgba(0,0,0,.5) 169px, rgba(0,0,0,.5) 179px, rgba(255,255,255,.2) 179px, rgba(255,255,255,.2) 182px, rgba(0,0,0,.5) 182px, rgba(0,0,0,.5) 232px, transparent 232px),
repeating-linear-gradient(125deg, transparent, transparent 2px, rgba(0,0,0,.8) 2px, rgba(0,0,0,.2) 3px, transparent 3px, transparent 5px, rgba(0,0,0,.2) 5px); 
*/
}
`
const Container = styled.div `
  margin: auto;
  height: 100%;
  color: ${props => props.theme.color};
  font-size: ${props => props.theme.fontSize};
  font-family: ${props => props.theme.fontPrimary};




`
const Grid = styled.div `
  display: grid;
  min-height: 100%;
  max-width: 960px;
  grid-gap: 1.5rem;
  grid-template-rows: auto auto 1fr;
  margin: auto;
  padding: 0 4rem;
`
const ContentWrapper = styled.div ``

const TemplateWrapper = ({children, data}) => (
  <ThemeProvider theme={theme}>
    <Container>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
        {
          name: 'description',
          content: 'Sample'
        }, {
          name: 'keywords',
          content: 'sample, something'
        }
      ]}/>
      <Grid>
        <Header siteMetadata={data.site.siteMetadata} headerData={data.headerData}/>
        <SearchBar/>
        <ContentWrapper>{children()}</ContentWrapper>

        {/* <Footer siteMetadata={data.site.siteMetadata} profileImage={data.profileImage}/> */}
      </Grid>
    </Container>
  </ThemeProvider>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper

//Query
export const query = graphql `
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
