import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Container = styled.div`
  padding: 0.5rem;
`
const Content = styled.div`
  margin: 0 auto;
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
`
const BrandTitle = styled.div`
  font-family: ${props => props.theme.brandFont};
  text-align: center;
  font-size: 1.6rem;
  color: ${props => props.theme.brandColor} !important;
  line-height: 1.2rem;
`
const BrandSubtitle = styled.div`
  font-family: ${props => props.theme.brandFont};
  text-align: center;
  font-size: 1rem;
  color: ${props => props.theme.mainColor};
  font-weight: 600;
`
const BrandLink = styled(Link)`
  text-decoration: none;
  &:hover {
    color: ${props => props.theme.highlightColor} !important;
  }
  &:visited {
    color: ${props => props.theme.brandColor} !important;
  }
  &:active {
    color: ${props => props.theme.brandColor} !important;
  }
`

const Header = () => (
  <Container>
    <Content>
      <BrandTitle>
        <BrandLink to="/">Ronan Doherty</BrandLink>
      </BrandTitle>
      <BrandSubtitle>web and game developer</BrandSubtitle>
    </Content>
  </Container>
)

export default Header
