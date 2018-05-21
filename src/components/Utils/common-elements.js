import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

// Horizontal Line
export const Line = styled.hr `
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