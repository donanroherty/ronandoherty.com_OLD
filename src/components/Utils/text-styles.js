import React from 'react'
import styled from 'styled-components'
// import Link from 'gatsby-link'

// Brand
export const Heading1 = styled.h1`
  font-family: ${props => props.theme.h1Font};
  font-size: ${props => props.theme.h1Size};
  color: ${props => props.theme.color1};
  line-height: 1.2rem;
`
// Page title
export const Heading2 = styled.h2`
  font-family: ${props => props.theme.h2Font};
  font-size: ${props => props.theme.h2Size};
  color: ${props => props.theme.color1};
  line-height: 1rem;
`
// Page section title
export const Heading3 = styled.h3`
  font-family: ${props => props.theme.h3Font};
  font-size: ${props => props.theme.h3Size};
  color: ${props => props.theme.color1};
`
// Subtitle
export const Heading4 = styled.h4`
  font-family: ${props => props.theme.h4Font};
  font-size: ${props => props.theme.h4Size};
  color: ${props => props.theme.color3};
  line-height: 0.2rem;
`

// export const A = Link.extend`
//   text-decoration: none;
//   color: ${theme.color2};
//   :hover {
//     filter: brightness(120%);
//   }
// `
