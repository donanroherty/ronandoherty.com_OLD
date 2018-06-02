import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import GatsbyLink from 'gatsby-link'

// Horizontal Line
export const Line = styled.hr`
  margin-bottom: 0.5rem;
  border: 0;
  height: 1px;
  background: ${props => props.theme.color1};
  background-image: linear-gradient(
    to right,
    ${props => props.theme.backgroundColor},
    ${props => props.theme.color1},
    ${props => props.theme.color1},
    ${props => props.theme.backgroundColor}
  );
`

export const Image = styled(Img)`
  border-radius: 3px;
`

// Page title
// export const H1 = styled.h1`
//   font-family: ${props => props.theme.fontSecondary};
//   font-size: ${props => props.theme.h1Size};
//   color: ${props => props.theme.color1};
//   line-height: 1.2rem;
// `
// Page section title
// export const H2 = styled.h2`
//   font-family: ${props => props.theme.fontBrand};
//   font-size: ${props => props.theme.h2Size};
//   color: ${props => props.theme.color1};
//   line-height: 1.4rem;
// `
// Page minor title
// export const H3 = styled.h3`
//   font-family: ${props => props.theme.fontSecondary};
//   font-size: ${props => props.theme.h3Size};
//   color: ${props => props.theme.color1};
// `
// Date
// export const H4 = styled.h4`
//   font-family: ${props => props.theme.fontPrimary};
//   font-size: ${props => props.theme.h4Size};
//   color: ${props => props.theme.color};
//   line-height: 0.8rem;
//   padding: 0;
//   margin: 0;
// `

// Links
const StyleLink = styled.div`
  text-decoration: none;
  fill: ${props => props.theme.color2} !important;
  color: ${props => props.theme.color2} !important;
  > * {
    color: ${props => props.theme.color1} !important;
  }
  :hover {
    filter: brightness(120%);
  }
`

export const Link = props => (
  <StyleLink>
    <GatsbyLink style={{ textDecoration: 'none' }} to={props.to}>
      {props.children}
    </GatsbyLink>
  </StyleLink>
)

export const ExternalLink = props => (
  <StyleLink>
    <a style={{ textDecoration: 'none' }} {...props} href={props.to}>
      {props.children}
    </a>
  </StyleLink>
)
