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

injectGlobal`
  html, body, #___gatsby,  #___gatsby>div {
    height:100vh;
    width: 100vw;
    padding: 0;
    margin:0;
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
  grid-gap: ${props => props.theme.gridGap};
  grid-template-columns: repeat(12, [col] 1fr);
  grid-template-rows: [row] auto [row] auto [row] 1fr [row] auto [row];
  margin: auto;
`
const HeaderWrapper = styled.div`
  grid-column: col 2 / col 12;
  grid-row: row 1 / row 2;
`
const SearchWrapper = styled.div`
  grid-column: col 6 / col 8;
  grid-row: row 2 / row 3;
`
const ContentWrapper = styled.div`
  grid-column: col 3 / col 11;
  grid-row: row 3 / row 4;
`
const FooterWrapper = styled.div`
  grid-column: col 2 / col 12;
  grid-row: row 4 / row 5;
`
const TemplateWrapper = ({ children, data }) => (
  <ThemeProvider theme={theme}>
    <Container>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <Grid>
        <HeaderWrapper>
          <Header
            title={data.site.siteMetadata.title}
            tagline={data.site.siteMetadata.tagline}
          />
        </HeaderWrapper>
        <SearchWrapper>
          <SearchBar />
        </SearchWrapper>
        <ContentWrapper>{children()}</ContentWrapper>
        <FooterWrapper>
          <Footer
            profileImage={data.profileImage}
            welcomeMessage={data.site.siteMetadata.welcomeMessage}
          />
        </FooterWrapper>
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
