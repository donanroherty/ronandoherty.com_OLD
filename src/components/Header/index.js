import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { H1, H4, A } from '../Utils/text-styles'
import { Line } from '../Utils/common-elements'

const Content = styled.div`
  ${'' /* display: grid; */}
  ${'' /* grid-gap: 10px; */}
  ${'' /* grid-template-columns: 100%; */}
  ${'' /* margin: 0 auto; */}
  ${'' /* padding: 2rem 0.5rem 0rem 0.5rem; */}
  width: 100%;
`
const Title = H1.extend`
  text-align: center;
`
const Subtitle = H4.extend`
  text-align: center;
`
const BrandLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.textPrimaryColor} !important;
  &:hover {
    color: ${props => props.theme.linkColor} !important;
  }
  &:visited {
    color: ${props => props.theme.color1} !important;
  }
  &:active {
    color: ${props => props.theme.color1} !important;
  }
`

const Header = () => {
  return (
    <Content>
      <Title>
        {/* <BrandLink to="/">Ronan Doherty</BrandLink> */}
        Ronan Doherty
      </Title>
      <Subtitle>web and game developer</Subtitle>
      <Line />
    </Content>
  )
}

export default Header
