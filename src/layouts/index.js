import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styled, { ThemeProvider, injectGlobal } from 'styled-components'

const theme = {
  brandColor: '#619DD2',
  highlightColor: '#FF6600',
  mainColor: '#2A2A2A',
  brandFont: 'dosis',
  mainFont: 'roboto',
  backgroundColor: 'lightgrey',
}

injectGlobal`
  html, body, #___gatsby,  #___gatsby>div {
    height:100% !important;
    margin: 0;
  a {
      text-decoration: none;
      
      color: ${theme.highlightColor};
      :hover {
        filter: brightness(120%);
      }   
  }
}
`
const MainBody = styled.div`
  min-height: 100%;
  display: grid;
  grid-gap: 20px;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;

  ${'' /* background-color: ${props => props.theme.backgroundColor}; */}
  color: #${props => props.theme.mainColor};
  font-family: ${props => props.theme.mainFont};
`
const Content = styled.div`
  margin: 0 auto;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`

const TemplateWrapper = ({ children, data }) => (
  <ThemeProvider theme={theme}>
    <div>
      <Helmet
        title="Gatsby Default Starter"
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <MainBody>
        <Header />
        <Content>{children()}</Content>
        <Footer profileImage={data.profileImage} />
      </MainBody>
    </div>
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
      resolutions(width: 84) {
        ...GatsbyImageSharpResolutions_withWebp_tracedSVG
      }
    }
  }
`
