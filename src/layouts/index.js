import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styled, { ThemeProvider, injectGlobal } from 'styled-components'

export const theme = {
  // colors
  color: '#2A2A2A',
  color1: '#619DD2',
  color2: '#FF6600',
  color3: '#616161',
  backgroundColor: '#F8F8F8',

  // fonts
  font: 'roboto',
  specialFont: 'dosis',
  h1Font: 'dosis',
  h2Font: 'dosis',
  h3Font: 'dosis',
  h4Font: 'dosis',

  // font sizes
  h1Size: '2rem',
  h2Size: '1.4rem',
  h3Size: '1.2rem',
  h4Size: '1rem',
  fontSize: '1rem',

  // grid
  gridGap: '0.8rem',
}

injectGlobal`
  html, body, #___gatsby,  #___gatsby>div {
    height:100vh;
    width: 100vw;
    padding: 0;
    margin:0;
  a {
      text-decoration: none;
      color: ${theme.color2};
      :hover {
        filter: brightness(120%);
      }   
  }

}
`
const Container = styled.div`
  margin: auto;
  width: 960px;
  height: 100%;
  color: ${props => props.theme.color};
  font-size: ${props => props.theme.fontSize};
  font-family: ${props => props.theme.font};
`
const Grid = styled.div`
  display: grid;
  min-height: 100%;
  grid-gap: ${props => props.theme.gridGap};
  grid-template-columns: repeat(12, [col] 1fr);
  grid-template-rows: [row] auto [row] 1fr [row] auto [row];
  margin: auto;
  ${'' /* height: 100vh; */};
`
const HeaderWrapper = styled.div`
  grid-column: col 2 / col 12;
  grid-row: row 1 / row 2;
`
const ContentWrapper = styled.div`
  grid-column: col 3 / col 11;
  grid-row: row 2 / row 3;
`
const FooterWrapper = styled.div`
  grid-column: col 2 / col 12;
  grid-row: row 3 / row 4;
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
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>
        <ContentWrapper>{children()}</ContentWrapper>
        <FooterWrapper>
          <Footer profileImage={data.profileImage} />
        </FooterWrapper>
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
  query FooterImageQuery {
    profileImage: imageSharp(id: { regex: "/profile-image/" }) {
      resolutions(width: 64) {
        ...GatsbyImageSharpResolutions_withWebp_tracedSVG
      }
    }
  }
`
