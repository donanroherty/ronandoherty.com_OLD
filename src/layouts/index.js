import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styled, { ThemeProvider, injectGlobal } from 'styled-components'

const theme = {
  brandColor: '#619DD2',
  textPrimaryColor: '#2A2A2A',
  textSecondaryColor: '#616161',
  linkColor: '#FF6600',

  fontPrimary: 'dosis',
  fontSecondary: 'roboto',
  backgroundColor: '#F8F8F8',

  fontSizePostLink: '1.4rem',
  fontSizeBrand: '1.6rem',
  fontSizePrimary: '1rem',
  fontSizeSecondary: '1rem',
  fontSizeTitle1: '2rem',
  fontSizeTitle2: '1.4rem',
}

injectGlobal`
  html, body, #___gatsby,  #___gatsby>div {
    /* width: 100vw; */
    min-height:100vh !important;
    padding: 0;
    margin:0;
  a {
      text-decoration: none;
      
      color: ${theme.linkColor};
      :hover {
        filter: brightness(120%);
      }   
  }
}
`
const Container = styled.div`
  color: ${props => props.theme.textPrimaryColor};
  font-family: ${props => props.theme.fontSecondary};
  margin: auto;
  max-width: 960px;
`
const Grid = styled.div`
  display: grid;
  grid-gap: 0.8rem;
  grid-template-columns: repeat(12, [col] 1fr);
  grid-template-rows: [header] auto [content] 1fr [footer] auto [end];
  height: 100%;
  padding: 1rem 0rem;
`
const Content = styled.div``

const Line = styled.hr`
  margin-bottom: 0.5rem;

  border: 0;
  height: 1px;
  background: ${props => props.theme.brandColor};
  background-image: linear-gradient(
    to right,
    #fff,
    ${props => props.theme.brandColor},
    ${props => props.theme.brandColor},
    #fff
  );
`
const TemplateWrapper = ({ children, data }) => (
  <ThemeProvider theme={theme}>
    <Container>
      <Helmet
        title="Gatsby Default Starter"
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />

      <Grid>
        <div
          style={{ gridColumn: 'col 2 / col 12', gridRow: 'header / content' }}
        >
          <Header />
        </div>

        <div
          style={{ gridColumn: 'col 3 / col 11', gridRow: 'content / footer' }}
        >
          <Content>{children()}</Content>
        </div>
        <div style={{ gridColumn: 'col 2 / col 12', gridRow: 'footer / end' }}>
          <Line
            style={{
              gridColumn: 'col 2 / col 12',
              gridRow: 'header / content',
            }}
          />
          <Footer profileImage={data.profileImage} />
        </div>
      </Grid>
    </Container>
  </ThemeProvider>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

//Query profile image
export const query = graphql`
  query ProfileImageQuery {
    profileImage: imageSharp(id: { regex: "/profile-image/" }) {
      resolutions(width: 64) {
        ...GatsbyImageSharpResolutions_withWebp_tracedSVG
      }
    }
  }
`
