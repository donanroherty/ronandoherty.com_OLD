import React from 'react'
import styled from 'styled-components'

// SVG icons
const IconStyle = styled.svg`
  width: 20px;
  height: 20px;
`
export const Icon = props => {
  return (
    <IconStyle>
      <use xlinkHref={`#${props.icon.id}`} alt="search button" />
    </IconStyle>
  )
}

// Horizontal Line
export const Line = styled.hr`
  margin-bottom: 0.5rem;
  border: 0;
  height: 1px;
  background: ${props => props.theme.color1};
  background-image: linear-gradient(
    to right,
    #fff,
    ${props => props.theme.color1},
    ${props => props.theme.color1},
    #fff
  );
`
