import React from 'react'
import styled from 'styled-components'
import {Line} from '../Utils/common-elements'

const Content = styled.div `
  width: 100%;
  text-align: right;
  /* margin-left: auto; */
  /* max-width: 370px; */
  color: ${props => props.theme.color2};
  
  height: 40px;

  /* display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto;
  grid-gap: 16px; */
`

const Header = props => {
  const iconSize = 24
  return (
    <Content>
      <Line/>
      ©2018 {props.siteMetadata.title}
    </Content>
  )
}

export default Header
