import React from 'react'
import styled from 'styled-components'
import GatsbyLink from 'gatsby-link'

// Brand
export const H1 = styled.h1`
  font-family: ${props => props.theme.h1Font};
  font-size: ${props => props.theme.h1Size};
  color: ${props => props.theme.color1};
  line-height: 1.2rem;
`
// Page title
export const H2 = styled.h2`
  font-family: ${props => props.theme.h2Font};
  font-size: ${props => props.theme.h2Size};
  color: ${props => props.theme.color1};
  line-height: 1rem;
`
// Page section title
export const H3 = styled.h3`
  font-family: ${props => props.theme.h3Font};
  font-size: ${props => props.theme.h3Size};
  color: ${props => props.theme.color1};
`
// Subtitle
export const H4 = styled.h4`
  font-family: ${props => props.theme.h4Font};
  font-size: ${props => props.theme.h4Size};
  color: ${props => props.theme.color3};
  line-height: 0.2rem;
`
// Links
const LinkStyle = styled(GatsbyLink)`
  text-decoration: none;
  fill: ${props => props.theme.color2};
  color: ${props => props.theme.color2};
  :hover {
    filter: brightness(120%);
  }
`
export const Link = props => {
  return <LinkStyle to={props.to}>{props.children}</LinkStyle>
}
