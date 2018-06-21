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

// Links
const StyleLink = styled.div`
  text-decoration: none;
  fill: ${props => props.theme.color2} !important;
  color: ${props => props.theme.color2} !important;
  > * {
    fill: ${props => props.theme.color2} !important;
    color: ${props => props.theme.color2} !important;
  }
  :link {
    color: ${props => props.theme.color2} !important;
  }
  :visited {
    color: ${props => props.theme.color2} !important;
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
