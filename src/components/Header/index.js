import React from 'react'
import styled from 'styled-components'
import {Brand, H4, Link, Subtitle} from '../utils/text-styles'
import {Line} from '../utils/common-elements'

const Content = styled.div `
  width: 100%;
  text-align: right;
  margin-left: auto;
  max-width: 370px;

  display:grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto;
  grid-gap: 16px;
`

const Header = props => {
  return (
    <Content>
      <Link to="/">
        <Brand>{props.siteMetadata.title}</Brand>
      </Link>

      <Subtitle>{`${props.siteMetadata.tagline}`}</Subtitle>
      {/* <Line /> */}
    </Content>
  )
}

export default Header
