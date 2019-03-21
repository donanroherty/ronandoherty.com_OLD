import React from 'react'
import styled from 'styled-components'

const Content = styled.div`
  width: 100%;
  text-align: right;
  color: ${props => props.theme.colorLightText};
  height: 40px;
`

const Header = props => {
  return <Content>©2018 {props.siteMetadata.title}</Content>
}

export default Header
